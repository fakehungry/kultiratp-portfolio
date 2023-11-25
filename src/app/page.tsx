"use client";
import Hero from "@/(component)/hero-section/Hero";
import Skill from "@/(component)/skill-section/Skill";
import Projects from "@/(component)/projects-section/Projects";
import Quote from "@/(component)/quote-section/Quote";
import Contact from "@/(component)/contact-section/Contact";
import Navbar from "@/(component)/navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skill />
      <Projects />
      <Quote />
      <Contact />
    </main>
  );
}
