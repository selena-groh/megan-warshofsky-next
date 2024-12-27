import Link from "@/components/Link";
import { getAllProjects } from "@/services/contentful_api";
import { Heading } from "@chakra-ui/react";
import "server-only";

export default async function Page() {
  const projects = await getAllProjects();

  return (
    <div>
      <Heading as="h1" size="2xl" mb="24px" textAlign="center">
        Projects will go here
      </Heading>
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project.sys.id}>
          {project.name}
        </Link>
      ))}
    </div>
  );
}
