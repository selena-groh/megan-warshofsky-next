import Link from "@/components/Link";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./ProjectImage.module.css";

function ProjectImage({ project }) {
  return (
    <Link href={`/projects/${project.fields.slug}`} display="block">
      {project.fields.coverImage ? (
        <div className={styles.container}>
          <Image
            src={`https:${project.fields.coverImage.fields.file.url}`}
            alt={project.fields.name}
            width={project.fields.coverImage.fields.file.details.image.width}
            height={project.fields.coverImage.fields.file.details.image.height}
            placeholder="blur"
            // This is just a gray overlay while image is loading
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcWg8AAe8BNu73HEoAAAAASUVORK5CYII="
            sizes="(min-width: 48rem) 50vw, 100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <div className={styles.overlay}>
            <Text>{project.fields.name}</Text>
          </div>
        </div>
      ) : (
        <Box
          margin="auto"
          textAlign="center"
          border="1px solid #254d32"
          padding="32px"
          width="100%"
        >
          {project.fields.name}
        </Box>
      )}
    </Link>
  );
}

export default ProjectImage;
