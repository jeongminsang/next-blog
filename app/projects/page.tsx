import ProjectCard from "../components/ProjectCard";
import { getProjectData } from "../libs/api";
import { MainContainer, Title } from "../styles/pages/Home"

export default async function Projects() {
  const data = await getProjectData();

  return (
    <MainContainer>
      <Title>Projects</Title>
      {data && data.props.data.results.map((projectdata: any, index: number) => (
        <ProjectCard key={index} projectdata={projectdata} />
      ))}

    </MainContainer>
  );
}