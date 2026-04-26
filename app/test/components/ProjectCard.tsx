"use client";

import { useState } from "react";
import Image from "next/image";
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
    <div className="flex m-auto relative group">
      <Image
        src={projectdata.images[0].image}
        alt="cover image"
        width={250}
        height={250}
        draggable={false}
        priority
        className="object-cover w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]"
      />
      <div
        className={`flex flex-col items-center absolute inset-0 p-[5px] text-center transition-all duration-300 ${
          isModalOpen ? "bg-background-cr" : "bg-transparent group-hover:bg-background-cr"
        }`}
      >
        <div className={`flex flex-col items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${isModalOpen ? "opacity-100" : ""}`}>
          <div className="text-[22px] font-[400] pt-[30px] px-[10px] pb-0">
            {projectdata.title}
          </div>
          <div className="flex justify-center max-w-[200px] mt-[10px] flex-wrap text-white">
            {projectdata.tags.map((tag, index: number) => (
              <div
                key={index}
                style={{ backgroundColor: tag.color }}
                className="text-[12px] px-[5px] py-[3px] m-[3px] rounded-[5px] border border-transparent"
              >
                {tag.name}
              </div>
            ))}
          </div>
          <div className="mt-auto mb-[20px]">
            <button
              onClick={() => setIsModalOpen(true)}
              className="border border-[#5ba2ff] text-[#5ba2ff] p-[10px] transition-colors duration-200 hover:bg-[#5ba2ff] hover:text-white"
            >
              LEARN MORE
            </button>
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
