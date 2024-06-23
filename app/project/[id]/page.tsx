import Navbar from "@/components/Navbar";
import ProjectPage from "@/components/ProjectPage";

const data = {
    projectImage: "/projects/CodeSync.png",
    projectName: "CodeSync",
    projectType: "full-stack",
    techStack: "React, ExpressJS, MongoDB, AWS, WebSockets",
    year: 2024,
    description: "CodeSync is a real-time collaborative code editor with chat, file management, and secure authentication. Organize projects in unique rooms for seamless teamwork.",
    githubLink: "https://github.com/theadityachoudhury/realtime-code-editor",
    hostedLink: "https://editor.adityachoudhury.com",
    feature: [{
        title: "Real-time collaborative code editor",
        details: [
            "Multiple users can edit the same file simultaneously",
            "See real-time changes from other collaborators",
        ],
    },
    {
        title: "Chat functionality",
        details: [
            "In-editor chat for seamless communication",
            "Supports group and private messages",
        ],
    },
    {
        title: "File manager",
        details: [
            "Organize and manage project files",
            "Drag-and-drop upload",
            "Create, rename, and delete files and folders",
        ],
    },
    {
        title: "Real-time file syncing",
        details: [
            "Automatic updates across all devices",
            "Ensures all users have the latest version of files",
        ],
    },
    {
        title: "Multiple rooms setup",
        details: [
            "Create different rooms for different projects or teams",
            "Customizable settings for each room",
        ],
    },
    {
        title: "Authentication and user verification",
        details: [
            "Secure login system",
            "Email verification for new users",
        ],
    },
    {
        title: "Password reset",
        details: [
            "Simple process for resetting forgotten passwords",
            "Email-based password recovery",
        ],
    },
    {
        title: "Additional Features",
        details: [
            "Syntax highlighting and code formatting",
            "Supports multiple programming languages",
            "Version control integration (e.g., Git)",
            "Activity tracking and history",
            "User roles and permissions management",
        ],
    },]
};

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <ProjectPage data={data} />
        </div>
    );
}
