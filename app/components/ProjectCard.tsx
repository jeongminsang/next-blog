"use client"

import Image from "next/image";

const ProjectCard = (projectdata: any) => {
  // console.log(projectdata.projectdata);
  console.log(projectdata.projectdata.cover.external);
  return (
    <>
      <div>{projectdata.projectdata.properties.Name.title[0].plain_text}</div>
      <Image
        src={projectdata.projectdata.cover.external.url}
        alt="cover image"
        width={1000}
        height={1000}
      // draggable={false}
      />
    </>
  )
}
export default ProjectCard;