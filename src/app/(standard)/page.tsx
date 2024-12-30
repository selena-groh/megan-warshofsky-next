import ProjectImage from "@/components/ProjectImage";
import { fetchProjects } from "@/services/contentful-client-api";
import { Box } from "@chakra-ui/react";
import "server-only";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function bucketizeArray(arr: any[], numBuckets: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any[] = Array.from({ length: numBuckets }, () => []);
  arr.forEach((item, index) => {
    const bucketIndex = index % numBuckets;
    result[bucketIndex].push(item);
  });
  return result;
}

export default async function Page() {
  const projects = (await fetchProjects()) ?? [];
  const bucketedProjects = bucketizeArray(projects, 2);

  return (
    <div>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: "16px", md: "32px" }}
      >
        {bucketedProjects.map((bucket, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            gap={{ base: "16px", md: "32px" }}
          >
            {bucket?.map((project) => (
              <ProjectImage project={project} key={project.sys.id} />
            ))}
          </Box>
        ))}
      </Box>
    </div>
  );
}
