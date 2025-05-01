import {
  MainContainer,
  Title,
  ProjectContainer,
} from "../styles/pages/Projects";
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
    <MainContainer>
      <Title>Projects</Title>
      <ProjectContainer>
        {projects &&
          projects
            .reverse()
            .map((project, index: number) => (
              <ProjectCard key={index} projectdata={project} />
            ))}
      </ProjectContainer>
    </MainContainer>
  );
}
