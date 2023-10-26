"use client"

import { useState } from "react";
import { CardContainer, CardImg, CardContents, CardTitle, ProjectStack, StackTag, ButtonContainer, MoreButton } from "../styles/pages/Projects"
import Modal from "./Modal"
import ModalCardContents from "./ModalCardContents";

const ProjectCard = (projectdata: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(projectdata.projectdata.properties.Stack.multi_select);

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
      <CardContents modalState={isModalOpen}>
        <CardTitle>
          {projectdata.projectdata.properties.Name.title[0].plain_text}
        </CardTitle>
        <ProjectStack>
          {projectdata.projectdata.properties.Stack.multi_select.map((tag: any) => (
            <StackTag>{tag.name}</StackTag>
          ))}
        </ProjectStack>
        <ButtonContainer>
          <MoreButton onClick={() => setIsModalOpen(true)}>LEARN MORE</MoreButton>
          <Modal
            isModalOpen={isModalOpen}
            onClickCloseModal={() => {
              setIsModalOpen(false);
            }}
          >
            <ModalCardContents projectdata={projectdata.projectdata}></ModalCardContents>
          </Modal>
        </ButtonContainer>
      </CardContents>
    </CardContainer>
  )
}
export default ProjectCard;