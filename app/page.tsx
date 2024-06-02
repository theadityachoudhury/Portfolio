import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default async function Home() {

  return (
    <div className="">
      <Navbar />
      <AboutMe />
      <TechStack />
      <Projects />
    </div>
  );
}
