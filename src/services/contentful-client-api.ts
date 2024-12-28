import { createClient } from "contentful";
import { TypeProjectSkeleton } from "./content-types";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  // CONTENTFUL_PREVIEW_ACCESS_TOKEN,
} = process.env;

// This is the standard Contentful client. It fetches
// content that has been published.
const client = createClient({
  space: CONTENTFUL_SPACE_ID || "",
  accessToken: CONTENTFUL_ACCESS_TOKEN || "",
});

// This is a Contentful client that's been configured
// to fetch drafts and unpublished content.
// const previewClient = createClient({
// 	space: CONTENTFUL_SPACE_ID,
// 	accessToken: CONTENTFUL_PREVIEW_ACCESS_KEY,
// 	host: 'preview.contentful.com',
// })

// This little helper will let us switch between the two
// clients easily:
export default function contentfulClient() {
  // if (preview) {
  // 	return previewClient
  // }

  return client;
}

export async function fetchProjects() {
  const client = contentfulClient();

  const projectsResult = await client.getEntries<TypeProjectSkeleton>({
    content_type: "project",
    // order: "-fields.dateCompleted",
    limit: 24,
    include: 2,
  });

  const projects = projectsResult.items;
  return projects;
}

export async function fetchProject(slug) {
  const client = contentfulClient();

  const projectsResult = await client.getEntries<TypeProjectSkeleton>({
    "fields.slug": slug,
    content_type: "project",
    include: 2,
  });

  const project = projectsResult.items[0];
  return project;
}
