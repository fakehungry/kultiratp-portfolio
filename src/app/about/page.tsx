"use client";
import AboutMe from "@/(component)/about-me-section/AboutMe";
import Design from "@/(component)/design-section/Design";
import Experience from "@/(component)/experience-section/Experience";
import Footer from "@/(component)/footer/Footer";
import Navbar from "@/(component)/navbar/Navbar";
import Tool from "@/(component)/tool-section/Tool";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <Main>
      <Navbar />
      <AboutMeImgContainer>
        <AboutMeImg src="/png/banner-about.png" alt="about" fill />
        <AboutMeOverlay>About Me</AboutMeOverlay>
      </AboutMeImgContainer>
      <AboutMe />
      <Experience />
      <Design />
      <Tool />
      <Footer />
    </Main>
  );
};

export default AboutPage;

const Main = styled.main`
  background-color: ${({ theme }) => theme.primaryBgColor};
`;

const AboutMeImgContainer = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  margin: 68px 0 0;

  @media (max-width: 768px) {
    height: 140px;
    margin: 64px 0 0;
  }
`;

const AboutMeImg = styled(Image)`
  object-fit: cover;
`;

const AboutMeOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: #fff1b8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: 800;
  line-height: 1.2;
  width: 100%;
  height: 100%;
  border-radius: 12px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
