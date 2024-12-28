import { fetchProject, fetchProjects } from "@/services/contentful-client-api";
import { Heading } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import "server-only";
import { isTypeYoutubeVideo } from "@/services/content-types";
import YouTubeIFrameVideo from "@/components/YouTubeIFrameVideo";
import RichText from "@/components/RichText";

import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const project = await fetchProject(slug);

  return {
    title: project.fields.name,
  };
}

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3600;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const projects = await fetchProjects();
  return projects.map((project) => ({
    slug: String(project.fields.slug),
  }));
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug;
  const project = await fetchProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Heading as="h1" size="4xl" mb="24px" textAlign="center">
        {project.fields.name}
      </Heading>
      {project.fields.mainMedia &&
        isTypeYoutubeVideo(project.fields.mainMedia) && (
          <YouTubeIFrameVideo
            videoId={project.fields.mainMedia.fields.youtubeVideoId}
            // TODO: make this better
            aspectRatio={
              project.fields.mainMedia.fields.aspectRatioWidth /
              project.fields.mainMedia.fields.aspectRatioHeight
            }
          />
        )}
      {project.fields.description && (
        <RichText document={project.fields.description} />
      )}
    </div>
  );
}
