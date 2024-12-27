import Video from "@/components/Video";
import { getProject } from "@/services/contentful_api";
import { Heading } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import "server-only";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Heading as="h1" size="4xl" mb="24px" textAlign="center">
        {project.name}
      </Heading>
      <Video src="https://www.youtube.com/embed/uOaMqC8ymig" />
    </div>
  );
}
