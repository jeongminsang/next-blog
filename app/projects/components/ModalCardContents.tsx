"use client";

import { AiFillGithub } from "react-icons/ai";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import Carousel from "./Carousel";

const ModalCardContents = ({ projectdata }: any) => {
  const data = projectdata.properties;

  const goGitHubHandle = () => {
    window.open(`${data.GitHub.rich_text[0].plain_text}`);
  };

  const goDeployLinkHandle = () => {
    window.open(`${data.Deploy.rich_text[0].plain_text}`);
  };

  return (
    <>
      <Carousel projectname={data.Images.rich_text} />
      <h2 className="text-text-color mt-[10px] mb-0">{data.Name.title[0].plain_text}</h2>
      <p className="text-gray-500 mt-[8px] mb-[8px]">
        {data.Description.rich_text[0].plain_text}
      </p>
      <div className="flex justify-center max-w-[450px] flex-wrap text-white">
        {data.Stack.multi_select.map((tag: any, index: number) => (
          <div
            key={index}
            className="text-[12px] px-[5px] py-[3px] m-[3px] rounded-[5px] border border-[#5ba2ff] bg-[#5ba2ff] text-white"
          >
            {tag.name}
          </div>
        ))}
      </div>
      <div className="flex justify-center text-text-color mt-[8px] mb-[8px]">
        {data.WorkPeriod.date.start + " ~ " + data.WorkPeriod.date.end}
      </div>
      <div className="flex flex-row">
        <button
          onClick={() => goGitHubHandle()}
          className="flex bg-[#5ba2ff] text-white border-none px-[20px] py-[10px] m-[10px] items-center transition-colors duration-200 cursor-pointer hover:bg-background-cr hover:text-[#5ba2ff]"
        >
          <AiFillGithub className="text-[15px] mr-[8px]" />
          GITHUB
        </button>
        {data.Deploy.rich_text[0] && (
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
