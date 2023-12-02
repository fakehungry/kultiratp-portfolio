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
    <>
      <Navbar />
      <AboutMeImgContainer>
        <AboutMeImg
          src="https://s3-alpha-sig.figma.com/img/5473/f8a1/97c6c22918886977ce8add5cfe19e86e?Expires=1702252800&Signature=HlVCbhPqud3hllQjoGkq97Q8Cc7ekxJcYcEA1R0FolIFvG5Z6e6er3zA6zXRszZkUcARwYOhxaYzT0NI2lbIyxBgsNdRCRh4ZNeo2nSXn49MHVW~rpuhj6aKYJQwnCHkC8MbG4C9xWzXnZwathqF~3Q-~Czjytcr-4~s3pARJbYsrcZ1ZiU7M7-UsBeHWIaCYenU6PQwcOJq1jwmRY44yvVyby3OAavjpS46wuV2DZ044pXC4wiLHaoE4MbcJSgil-iSuqHRlxInrHM0onKbJIEmF3aXM5n5jnPiEmYAly-Py-rRLRySruGHJ1~iOp3Mec1hB2QZk2s6mipvbU--vg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="about"
          fill
        />
        <AboutMeOverlay>About Me</AboutMeOverlay>
      </AboutMeImgContainer>
      <AboutMe />
      <Experience />
      <Design />
      <Tool />
      <Footer />
    </>
  );
};

export default AboutPage;

const AboutMeImgContainer = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
`;

const AboutMeImg = styled(Image)`
  border-radius: 12px;
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
`;
