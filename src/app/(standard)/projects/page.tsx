import { getAllProjects } from "@/services/contentful_api";
import "server-only";

export default async function Page() {
  const projects = await getAllProjects();
  console.log(projects);

  return (
    <div>
      <p>Page with all projects goes here? Or just on Homepage TBD</p>
      {projects.map((project) => (
        <p key={project.sys.id}>{project.name}</p>
      ))}
    </div>
  );
}
