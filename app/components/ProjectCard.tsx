"use client"

import Image from "next/image";
import { CardContainer, CardImg, CardContents, CardTitle, ProjectStack, ButtonContainer, MoreButton } from "../styles/pages/Projects"
import router from "next/router";

const ProjectCard = (projectdata: any) => {
  // console.log(projectdata.projectdata.properties.GitHub.rich_text[0].text.content);

  const goGitHubHandle = () => {
    window.open(`${projectdata.projectdata.properties.GitHub.rich_text[0].text.content}`)
  }

  return (
    <CardContainer>
      {/* <div>{projectdata.projectdata.properties.Name.title[0].plain_text}</div> */}
      <CardImg
        src={projectdata.projectdata.cover.external.url}
        alt="cover image"
        width={1000}
        height={1000}
        draggable={false}
      />
      <CardContents>
        <CardTitle>
          {projectdata.projectdata.properties.Name.title[0].plain_text}
        </CardTitle>
        <ProjectStack>nextjs</ProjectStack>
        <ButtonContainer>
          <MoreButton onClick={goGitHubHandle}>LEARN MORE</MoreButton>
        </ButtonContainer>
      </CardContents>
    </CardContainer>
  )
}
export default ProjectCard;