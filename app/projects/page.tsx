import ProjectCard from "../components/ProjectCard";
import { getProjectData } from "../libs/api";
import { MainContainer, Title, ProjectContainer } from "../styles/pages/Projects"

export default async function Projects() {
  const data = await getProjectData();

  return (
    <MainContainer>
      <Title>Projects</Title>
      <ProjectContainer>
        {data && data.props.data.results.map((projectdata: any, index: number) => (
          <ProjectCard key={index} projectdata={projectdata} />
        ))}
      </ProjectContainer>
    </MainContainer>
  );
}