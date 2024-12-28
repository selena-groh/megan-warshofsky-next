import Link from "@/components/Link";
import { fetchProjects } from "@/services/contentful-client-api";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import "server-only";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function bucketizeArray(arr: any[], numBuckets: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any[] = Array.from({ length: numBuckets }, () => []); // Create empty buckets

  // Loop through the array and distribute items into buckets
  arr.forEach((item, index) => {
    const bucketIndex = index % numBuckets; // Calculate which bucket the item goes to
    result[bucketIndex].push(item);
  });

  return result;
}

export default async function Page() {
  const projects = (await fetchProjects()) ?? [];

  const bucketedProjects = bucketizeArray(projects, 2);

  return (
    <div>
      {/* <Heading as="h1" size="2xl" mb="24px" textAlign="center">
        Projects will go here
      </Heading> */}
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap="32px"
      >
        {bucketedProjects.map((bucket, index) => (
          <Box key={index} display="flex" flexDirection="column" gap="32px">
            {bucket?.map((project) => (
              <Link
                href={`/projects/${project.fields.slug}`}
                key={project.sys.id}
              >
                {project.fields.coverImage && (
                  <Image
                    src={`https:${project.fields.coverImage.fields.file.url}`}
                    alt={project.fields.name}
                    width={
                      project.fields.coverImage.fields.file.details.image.width
                    }
                    height={
                      project.fields.coverImage.fields.file.details.image.height
                    }
                    placeholder="blur"
                    // This is just a gray overlay while image is loading
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcWg8AAe8BNu73HEoAAAAASUVORK5CYII="
                    sizes="(min-width: 48rem) 50vw, 100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                )}
              </Link>
            ))}
          </Box>
        ))}
      </Box>
    </div>
  );
}
