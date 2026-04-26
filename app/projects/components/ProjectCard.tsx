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
    <div className="flex flex-col border border-border-default group transition-all duration-300">
      <div className="relative aspect-square overflow-hidden border-b border-border-default">
        <Image
          src={projectdata.properties.CoverImg.rich_text[0].href}
          alt="cover image"
          width={600}
          height={600}
          draggable={false}
          priority
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-bg-base/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-primary"
          >
            VIEW_LOG
          </button>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-sans tracking-tight">
            {projectdata.properties.Name.title[0].plain_text}
          </h3>
          <span className="font-mono text-xs text-text-muted opacity-60">PRJ_0{projectdata.properties.Name.title[0].plain_text.length}</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {projectdata.properties.Stack.multi_select.map((tag, index: number) => (
            <span
              key={index}
              className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-border-default text-text-muted"
            >
              {tag.name}
            </span>
          ))}
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
