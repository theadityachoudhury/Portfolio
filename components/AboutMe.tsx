"use client";
import { Camera, SquareArrowRight } from "lucide-react";
import SectionName from "./SectionName";
import { useState } from "react";
import Link from "next/link";

export default function AboutMe() {
    const [currentCompany, setCurrentCompany] = useState("Celebal Technologies");
    const [webDeveloper, setWebDeveloper] = useState("Web Developer");

    function handleCurrentCompany() {
        if (currentCompany === "Celebal Technologies") setCurrentCompany("सेलेबल टेक्नोलॉजीज");
        else if (currentCompany === "सेलेबल टेक्नोलॉजीज") setCurrentCompany("ସେଲିବଲ୍ ଟେକ୍ନୋଲୋଜି");
        else if (currentCompany === "ସେଲିବଲ୍ ଟେକ୍ନୋଲୋଜି") setCurrentCompany("సెలెబల్ టెక్నాలజీస్");
        else setCurrentCompany("Celebal Technologies");
    }

    function handleWebDeveloper() {
        if (webDeveloper === "Web Developer") setWebDeveloper("Software Developer");
        else if (webDeveloper === "Software Developer") setWebDeveloper("Web Developer");
    }
    return (
        <div className="container px-5 lg:px-48 mb-10 lg:mx-auto">
            <SectionName name="About Me" side="left" />
            <div className="flex flex-col space-y-3 px-5">
                <p className="font-light text-3xl">Heyy, I am Aditya!!</p>
                <div className="font-light">
                    <p className="text-gray-400 text-2xl">about:</p>
                    <div className="px-3 text-xl">
                        <p className="flex gap-2"><SquareArrowRight className="" />CS Undergrad at KIIT University</p>
                        <p className="flex gap-2 underline cursor-pointer" onClick={handleWebDeveloper}><SquareArrowRight className="" />{webDeveloper}</p>
                        <p className="flex gap-2"><SquareArrowRight className="" />Photographer</p>
                    </div>
                </div>
                <div className="font-light">
                    <p className="text-gray-400 text-2xl">currently:</p>
                    <div className="px-3 text-xl">
                        <div className="flex space-x-1">
                            <p className="flex gap-2"><SquareArrowRight className="" />Working at </p>
                            <p className="underline cursor-pointer" onClick={handleCurrentCompany}>{currentCompany}</p>
                        </div>

                        <p className="flex gap-2"><SquareArrowRight className="" />improving my photography📷 skills</p>
                        <p className="flex gap-2"><SquareArrowRight className="" />Software Developer</p>
                    </div>
                </div>

                <div className="text-lg">
                    <p>For internship/paid work, hit me at <Link className="text-blue-600" href="mailto:aditya@adityachoudhury.com" target="_blank">email</Link>/<Link className="text-blue-600" href="https://instagram.com/the_aditya27" target="_blank">instagram</Link></p>
                </div>
            </div>
        </div>
    )
}