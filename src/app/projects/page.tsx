"use client";
import Navbar from "@/(component)/navbar/Navbar";
import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
import Projects from "@/(component)/projects-section/Projects";
import Footer from "@/(component)/footer/Footer";

type Props = {};

const ProjectsPage = (props: Props) => {
  return (
    <Main>
      <Navbar />
      <ProjectImgContainer>
        <ProjectImg src="/png/banner-projects.png" alt="projects" fill />
        <ProjectImgOverlay>Projects</ProjectImgOverlay>
      </ProjectImgContainer>
      <Projects />
      <Footer />
    </Main>
  );
};

export default ProjectsPage;

const Main = styled.main`
  background-color: ${({ theme }) => theme.primaryBgColor};
`;

const ProjectImgContainer = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  margin: 68px 0 0;

  @media (max-width: 450px) {
    height: 140px;
    margin: 64px 0 0;
  }
`;

const ProjectImg = styled(Image)`
  object-fit: cover;
`;

const ProjectImgOverlay = styled.div`
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

  @media (max-width: 450px) {
    font-size: 20px;
  }
`;
