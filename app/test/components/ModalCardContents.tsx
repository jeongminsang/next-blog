"use client";

import {
  ContentsTitle,
  ContentsSubTitle,
  ProjectStack,
  StackTag,
  ProjectPeriod,
  LinkBtns,
  LinkBtn,
  GitHubIcn,
  LinkIcn,
} from "../../styles/components/Modal";
import Carousel from "./Carousel";

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

const ModalCardContents = ({ projectdata }: ProjectCardProps) => {
  const goGitHubHandle = () => {
    window.open(`${projectdata.github}`);
  };

  const goDeployLinkHandle = () => {
    window.open(`${projectdata.link}`);
  };

  return (
    <>
      <Carousel projectImages={projectdata.images} />
      <ContentsTitle>{projectdata.title}</ContentsTitle>
      <ContentsSubTitle>{projectdata.sub_title}</ContentsSubTitle>
      <ProjectStack>
        {projectdata.tags.map((tag, index: number) => (
          <StackTag key={index}>{tag.name}</StackTag>
        ))}
      </ProjectStack>
      <ProjectPeriod>
        {projectdata.start_date + " ~ " + projectdata.end_date}
      </ProjectPeriod>
      <LinkBtns>
        <LinkBtn onClick={() => goGitHubHandle()}>
          <GitHubIcn />
          GITHUB
        </LinkBtn>
        {projectdata.link && (
          <LinkBtn onClick={() => goDeployLinkHandle()}>
            <LinkIcn />
            LINK
          </LinkBtn>
        )}
      </LinkBtns>
    </>
  );
};

export default ModalCardContents;
