"use client";
import AboutMe from "@/(component)/about-me-section/AboutMe";
import Design from "@/(component)/design-section/Design";
import Experience from "@/(component)/experience-section/Experience";
import Navbar from "@/(component)/navbar/Navbar";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Navbar />
      <AboutMeImgContainer>
        <Image src="/png/about-me.png" alt="about" fill />
      </AboutMeImgContainer>
      <AboutMe />
      <Experience />
      <Design />
    </>
  );
};

export default About;

const AboutMeImgContainer = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
`;
