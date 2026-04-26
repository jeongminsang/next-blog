"use client";

import { AiFillGithub } from "react-icons/ai";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
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
      <h2 className="text-text-color mt-[10px] mb-0">{projectdata.title}</h2>
      <p className="text-gray-500 mt-[8px] mb-[8px]">{projectdata.sub_title}</p>
      <div className="flex justify-center max-w-[450px] flex-wrap text-white">
        {projectdata.tags.map((tag, index: number) => (
          <div
            key={index}
            style={{ backgroundColor: tag.color }}
            className="text-[12px] px-[5px] py-[3px] m-[3px] rounded-[5px] border border-transparent text-white"
          >
            {tag.name}
          </div>
        ))}
      </div>
      <div className="flex justify-center text-text-color mt-[8px] mb-[8px]">
        {projectdata.start_date +
          " ~ " +
          (projectdata.end_date === null ? "ing" : projectdata.end_date)}
      </div>
      <div className="flex flex-row">
        <button
          onClick={() => goGitHubHandle()}
          className="flex bg-[#5ba2ff] text-white border-none px-[20px] py-[10px] m-[10px] items-center transition-colors duration-200 cursor-pointer hover:bg-background-cr hover:text-[#5ba2ff]"
        >
          <AiFillGithub className="text-[15px] mr-[8px]" />
          GITHUB
        </button>
        {projectdata.link && (
          <button
            onClick={() => goDeployLinkHandle()}
            className="flex bg-[#5ba2ff] text-white border-none px-[20px] py-[10px] m-[10px] items-center transition-colors duration-200 cursor-pointer hover:bg-background-cr hover:text-[#5ba2ff]"
          >
            <LiaExternalLinkAltSolid className="text-[15px] mr-[8px]" />
            LINK
          </button>
        )}
      </div>
    </>
  );
};

export default ModalCardContents;
