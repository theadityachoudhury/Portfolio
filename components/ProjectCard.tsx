import { Dot, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: {
    project: {
        projectImage: string,
        projectName: string,
        projectType: string,
        techStack: string,
        year: number,
        description: string,
        githubLink: string
    }
}) {
    return (
        <div>
            <div className="p-5 space-y-3">
                <div>
                    <Image src={project.projectImage} alt="" height={500} width={500} />
                </div>
                <Link href="" target="_blank" className="flex">
                    <p className="text-3xl text-white">{project.projectName}</p> {/* project name */}
                    <div className="p-2">
                        <SquareArrowOutUpRight size={20} />
                    </div>
                </Link>
                <div className="flex gap-2 text-indigo-500">
                    <p className="uppercase ">{project.projectType}</p> {/* project type */}
                    <Link href={project.githubLink} className="hover:text-indigo-300">View code on Github</Link>
                </div>
                <div className="flex">
                    <p className="">{project.techStack}</p> {/* tech stack */}
                    <Dot size={25} strokeWidth={8} className="p-1" />
                    <p className="">{project.year}</p> {/* year */}
                </div>
                <p className="text-gray-400 text-xl">{project.description}</p> {/* description */}
            </div>
        </div>
    )
}