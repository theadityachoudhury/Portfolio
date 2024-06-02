import SectionName from "./SectionName";
import ProjectCard from "./ProjectCard";
import { data } from "@/utils/projects";

export default function Projects() {
    return (
        <div className="container px-5 lg:px-48 mb-10 lg:mx-auto">
            <SectionName name="Projects" side="right" />
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                {data.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}

            </div>
        </div>
    )
}
