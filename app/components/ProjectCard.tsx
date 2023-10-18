"use client"

import { CardContainer, CardImg, CardContents, CardTitle, ProjectStack, StackTag, ButtonContainer, MoreButton } from "../styles/pages/Projects"

const ProjectCard = (projectdata: any) => {
  console.log(projectdata.projectdata.properties.Tags.multi_select);

  const goGitHubHandle = () => {
    window.open(`${projectdata.projectdata.properties.GitHub.rich_text[0].text.content}`)
  }

  return (
    <CardContainer>
      {/* <div>{projectdata.projectdata.properties.Name.title[0].plain_text}</div> */}
      <CardImg
        src={projectdata.projectdata.cover.file.url}
        alt="cover image"
        width={1000}
        height={1000}
        draggable={false}
      />
      <CardContents>
        <CardTitle>
          {projectdata.projectdata.properties.Name.title[0].plain_text}
        </CardTitle>
        <ProjectStack>
          {projectdata.projectdata.properties.Tags.multi_select.map((tag: any) => (
            <StackTag>{tag.name}</StackTag>
          ))}
        </ProjectStack>
        <ButtonContainer>
          <MoreButton onClick={goGitHubHandle}>LEARN MORE</MoreButton>
        </ButtonContainer>
      </CardContents>
    </CardContainer>
  )
}
export default ProjectCard;