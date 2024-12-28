import { fetchProject } from "@/services/contentful-client-api";
import { Heading } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import "server-only";
import { isTypeYoutubeVideo } from "@/services/content-types";
import YouTubeIFrameVideo from "@/components/YouTubeIFrameVideo";
import RichText from "@/components/RichText";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
