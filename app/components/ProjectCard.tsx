"use client"

import { useState } from "react";
import { CardContainer, CardImg, CardContents, CardTitle, ProjectStack, StackTag, ButtonContainer, MoreButton } from "../styles/pages/Projects"
import Modal from "./Modal"
import ModalCardContents from "./ModalCardContents";
import { projectImgs } from "../libs/ProjectImgs"

interface ProjectData {
  cover: {
    file: {
      url: string;
    };
  };
  properties: {
    Name: {
      title: {
        plain_text: string
      }[];
    };
    Stack: {
      multi_select: {
        name: string
      }[];
    };
  };
}

interface ProjectCardProps {
  projectdata: ProjectData;
}

const ProjectCard = (projectdata: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const findProjectIndex = (projectName: any) => {
    for (let i = 0; i < projectImgs.length; i++) {
      if (projectImgs[i].projectName === projectName) {
        return i;
      }
    }
    return projectImgs.length;
  }

  return (
    <CardContainer>
      <CardImg
        src={projectImgs[findProjectIndex(projectdata.projectdata.properties.Name.title[0].plain_text)].coverimage}
        alt="cover image"
        width={1000}
        height={1000}
        draggable={false}
      />
      <CardContents modalstate={`${isModalOpen}`}>
        <CardTitle>
          {projectdata.projectdata.properties.Name.title[0].plain_text}
        </CardTitle>
        <ProjectStack>
          {projectdata.projectdata.properties.Stack.multi_select.map((tag, index: number) => (
            <StackTag key={index}>{tag.name}</StackTag>
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