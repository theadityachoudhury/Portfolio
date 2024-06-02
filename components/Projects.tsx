import SectionName from "./SectionName";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const data: {
        projectImage: string,
        projectName: string,
        projectType: string,
        techStack: string,
        year: number,
        description: string,
        githubLink:string
    }[] = [{
        projectImage: "https://raw.githubusercontent.com/theadityachoudhury/Event-Manager-Frontend/main/public/assets/ss/01.png",
        projectName: "Evently",
        projectType: "full-stack",
        techStack: "React, ExpressJS, MongoDB, AWS",
        year: 2024,
        description: "Create event today and enjoy the hassle free management process of attendance or sharing pictures with the participants. Weather it be formal or informal events. We got you covered.",
        githubLink:""
    }];


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
