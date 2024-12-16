const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
} = process.env;

// Set a variable that contains all the fields needed for projects when a fetch for
// content is performed
const PROJECT_GRAPHQL_FIELDS = `
  sys {
    id
  }
  name
`;

// title
// slug
// summary
// details {
//   json
//   links {
//     assets {
//       block {
//         sys {
//           id
//         }
//         url
//         description
//       }
//     }
//   }
// }
// date
// authorName
// categoryName
// projectImage {
//   url
// }

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview ? CONTENTFUL_PREVIEW_ACCESS_TOKEN : CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for projects with an "projects" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["projects"] },
    }
  ).then((response) => response.json());
}

function extractProjectEntries(fetchResponse) {
  return fetchResponse?.data?.projectCollection?.items;
}

export async function getAllProjects(
  // For this demo set the default limit to always return 3 projects.
  limit = 3,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing projects before they are live
  isDraftMode = false
) {
  const projects = await fetchGraphQL(
    // `query {
    //     projectCollection(where:{slug_exists: true}, order: date_DESC, limit: ${limit}, preview: ${
    //       isDraftMode ? "true" : "false"
    //     }) {
    //       items {
    //         ${PROJECT_GRAPHQL_FIELDS}
    //       }
    //     }
    //   }`,
    `query {
        projectCollection(limit: ${limit}, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${PROJECT_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractProjectEntries(projects);
}

export async function getProject(slug, isDraftMode = false) {
  const project = await fetchGraphQL(
    // `query {
    //     projectCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
    //       isDraftMode ? "true" : "false"
    //     }) {
    //       items {
    //         ${PROJECT_GRAPHQL_FIELDS}
    //       }
    //     }
    //   }`,
    `query {
        projectCollection(limit: 1, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${PROJECT_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractProjectEntries(project)[0];
}
