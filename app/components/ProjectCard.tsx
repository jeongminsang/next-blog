"use client"

import { useState } from "react";
import { CardContainer, CardImg, CardContents, CardTitle, ProjectStack, StackTag, ButtonContainer, MoreButton } from "../styles/pages/Projects"
import Modal from "./Modal"

const ProjectCard = (projectdata: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <Modal
            isModalOpen={isModalOpen}
            onClickCloseModal={() => {
              setIsModalOpen(false);
            }}
          >test</Modal>
          <div onClick={() => { setIsModalOpen(true) }}>버튼</div>
        </ButtonContainer>
      </CardContents>
    </CardContainer>
  )
}
export default ProjectCard;