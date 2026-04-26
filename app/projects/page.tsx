import ProjectCard from "./components/ProjectCard";
import { getProjectData } from "../libs/api";

export default async function Projects() {
  const data = await getProjectData();

  return (
    <div className="flex flex-col max-w-[800px] w-full mx-auto px-4">
      <h1 className="mt-[26px] mb-[10px]">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] w-full mt-[20px]">
        {data &&
          data.props.data.results.map((projectdata: any, index: number) => (
            <ProjectCard key={index} projectdata={projectdata} />
          ))}
      </div>
    </div>
  );
}
