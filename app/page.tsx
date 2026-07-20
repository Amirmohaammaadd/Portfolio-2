import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Container from "@/layout/container";

const About = dynamic(() => import("@/components/About"));
const Technologies = dynamic(() => import("@/components/Technologies"));
const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const Contact = dynamic(() => import("@/components/Contact"));
const ScrollButton = dynamic(() => import("@/components/ScrollButton"));

export default function Home() {

  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
      <ScrollButton />
    </Container>
  );
}
