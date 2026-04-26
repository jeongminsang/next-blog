"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "../../components/Modal";
import ModalCardContents from "./ModalCardContents";

interface ProjectData {
  cover: {
    file: {
      url: string;
    };
  };
  properties: {
    Images: {
      rich_text: {
        href: string;
      }[];
    };
    CoverImg: {
      rich_text: {
        href: string;
      }[];
    };
    Name: {
      title: {
        plain_text: string;
      }[];
    };
    Stack: {
      multi_select: {
        name: string;
      }[];
    };
  };
}

interface ProjectCardProps {
  projectdata: ProjectData;
}

const ProjectCard = ({ projectdata }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex m-auto relative">
      <Image
        src={projectdata.properties.CoverImg.rich_text[0].href}
        alt="cover image"
        width={250}
        height={250}
        draggable={false}
        priority
        className="object-cover w-[250px] h-[250px] flex-1 sm:w-[300px] sm:h-[300px]"
      />
      <div
        className={`flex flex-col items-center absolute w-[250px] h-[250px] top-0 left-0 p-[5px] text-center transition-colors duration-500 sm:w-[300px] sm:h-[300px] group ${
          isModalOpen ? "bg-background-cr" : "bg-transparent hover:bg-background-cr"
        }`}
      >
        <div className={`flex-col items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${isModalOpen ? "flex opacity-100" : "flex"}`}>
          <div className="text-[22px] font-[400] pt-[30px] px-[10px] pb-0 animate-title-move-down">
            {projectdata.properties.Name.title[0].plain_text}
          </div>
          <div className="flex justify-center max-w-[200px] mt-[10px] flex-wrap text-white animate-stack-move">
            {projectdata.properties.Stack.multi_select.map((tag, index: number) => (
              <div
                key={index}
                className="text-[12px] px-[5px] py-[3px] m-[3px] rounded-[5px] border border-[#5ba2ff] bg-[#5ba2ff]"
              >
                {tag.name}
              </div>
            ))}
          </div>
          <div className="flex items-center relative bottom-[-10px] text-[#5ba2ff] h-full animate-text-move-up">
            <div
              onClick={() => setIsModalOpen(true)}
              className="border border-[#5ba2ff] p-[10px] mt-[30px] transition-colors duration-500 cursor-pointer hover:bg-[#5ba2ff] hover:text-white"
            >
              LEARN MORE
            </div>
          </div>
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        onClickCloseModal={() => {
          setIsModalOpen(false);
        }}
      >
        <ModalCardContents projectdata={projectdata} />
      </Modal>
    </div>
  );
};
export default ProjectCard;
