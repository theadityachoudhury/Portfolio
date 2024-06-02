import Image from "next/image";
import SectionName from "./SectionName";
import TechStackCard from "./TechStackCard";

const techStack = {
    "Languages": [
        {
            name: "C",
            icon: "icons/c.svg"
        },
        {
            name: "C++",
            icon: "icons/cpp.svg"
        },
        {
            name: "Python",
            icon: "icons/python.svg"
        },
        {
            name: "JavaScript",
            icon: "icons/javascript.svg"
        },
        {
            name: "TypeScript",
            icon: "icons/typescript.svg"
        },
        {
            name: "PHP",
            icon: "icons/php.svg"
        },
        {
            name: "JAVA",
            icon: "icons/java.svg"
        }
    ],
    "Cloud": [
        {
            name: "AWS",
            icon: "icons/aws.svg"
        }
    ],
    "Frontend": [
        {
            name: "React",
            icon: "icons/react.svg"
        },
        {
            name: "Next.js",
            icon: "icons/nextjs.svg"
        },
        {
            name: "Tailwind CSS",
            icon: "icons/tailwindcss.svg"
        },
        {
            name: "Bootstrap",
            icon: "icons/bootstrap.svg"
        }
    ],
    "Backend": [
        {
            name: "Node.js",
            icon: "icons/nodejs.svg"
        },
        {
            name: "Express",
            icon: "icons/express.svg"
        }
    ],
    "Databases": [
        {
            name: "MongoDB",
            icon: "icons/mongodb.svg"
        },
        {
            name: "MySQL",
            icon: "icons/mysql.svg"
        }
    ],
    "Tools": [
        {
            name: "Git",
            icon: "icons/git.svg"
        },
        {
            name: "Docker",
            icon: "icons/docker.svg"
        },
    ],
};

export default function TechStack() {
    return (
        <div className="container px-5 lg:px-48 mb-10 lg:mx-auto">
            <SectionName name="Tech Stack" side="left" />
            {Object.entries(techStack).map(([category, items], index) => (
                <TechStackCard categoryData={items} categoryName={category} />
            ))}

        </div>
    )

}