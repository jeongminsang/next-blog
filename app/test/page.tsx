import { createClient } from "../utils/supabase/server";
import ProjectCard from "./components/ProjectCard";

export default async function Projects() {
  const supabase = await createClient();
  const { data: projects } = await supabase.from("projects").select(`
    *,
    images (
      id,
      image
    ),
    tags (
      id,
      name,
      color
    )
  `);

  return (
    <div className="flex flex-col max-w-[800px] w-full mx-auto px-4">
      <h1 className="mt-[26px] mb-[10px]">Projects (Test)</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] w-full mt-[20px]">
        {projects &&
          projects
            .reverse()
            .map((project, index: number) => (
              <ProjectCard key={index} projectdata={project} />
            ))}
      </div>
    </div>
  );
}
