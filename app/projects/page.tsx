import ProjectCard from "./components/ProjectCard";
import { getProjectData } from "../libs/api";

export default async function Projects() {
  const data = await getProjectData();

  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <header className="max-w-[1200px] w-full mx-auto px-8 py-xl flex flex-col md:flex-row md:items-end justify-between border-b border-border-default">
        <h1 className="font-mono text-[80px] md:text-[180px] lg:text-[240px] leading-none tracking-tighter opacity-10 select-none">
          PROJECTS
        </h1>
        <div className="pb-md max-w-md">
          <p className="font-mono text-sm tracking-[1.4px] text-text-muted mb-4 uppercase">BUILD_LOG_V1.0</p>
          <p className="font-sans text-text-secondary leading-relaxed">
            Explorations in distributed systems, high-frequency interfaces, and the core primitives of web infrastructure.
          </p>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="max-w-[1200px] w-full mx-auto px-8 py-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {data &&
            data.props.data.results.map((projectdata: any, index: number) => (
              <ProjectCard key={index} projectdata={projectdata} />
            ))}
        </div>
      </main>
    </div>
  );
}
