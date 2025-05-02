"use client";

import { useState } from "react";
import {
  CardContainer,
  CardImg,
  CardContents,
  CardTitle,
  ProjectStack,
  StackTag,
  ButtonContainer,
  MoreButton,
} from "../../styles/pages/Projects";
import Modal from "../components/Modal";
import ModalCardContents from "./ModalCardContents";

interface ProjectCardProps {
  projectdata: {
    end_date: string | null;
    github: string | null;
    id: number;
    link: string | null;
    start_date: string;
    sub_title: string;
    title: string;
    images: {
      id: number;
      image: string;
    }[];
    tags: {
      id: number;
      name: string;
      color: string;
    }[];
  };
}
const ProjectCard = ({ projectdata }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <CardContainer>
      <CardImg
        src={projectdata.images[0].image}
        alt='cover image'
        width={1000}
        height={1000}
        draggable={false}
        priority
      />
      <CardContents $modalstate={`${isModalOpen}`}>
        <CardTitle>{projectdata.title}</CardTitle>
        <ProjectStack>
          {projectdata.tags.map((tag, index: number) => (
            <StackTag key={index} color={tag.color}>
              {tag.name}
            </StackTag>
          ))}
        </ProjectStack>
        <ButtonContainer>
          <MoreButton onClick={() => setIsModalOpen(true)}>
            LEARN MORE
          </MoreButton>
          <Modal
            isModalOpen={isModalOpen}
            onClickCloseModal={() => {
              setIsModalOpen(false);
            }}
          >
            <ModalCardContents projectdata={projectdata}></ModalCardContents>
          </Modal>
        </ButtonContainer>
      </CardContents>
    </CardContainer>
  );
};
export default ProjectCard;
