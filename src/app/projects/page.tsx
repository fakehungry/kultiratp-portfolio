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
        <ProjectImg
          src="https://s3-alpha-sig.figma.com/img/e334/bee3/04b67e512c53b0ae282b74b4a4216d78?Expires=1702252800&Signature=nK05QrenrYUt3lc23Y1C5SPj0TH5fe1wwrPDMUPHvBbCEh0-SUf2wfncw7kk6j5i6UHyVWuyWkGdlDQFTUoQEVIXz80D2qm3Nkx4n72DXckxwhuhavUTjkvFVnzNv5scGoyNqXXM5z44He4qgCsfy1efIV0fAWY1-RQvSw1SWWOAWr3PEKSUSaY0NXJxcoSJT9sXEIZY8xv~t2MhgqMdqDOVR~zV1uVPaSjhfs1zAQyPa3NnKimRJPoo3cVa1W7Gtx8aUlMAoi8LLaxh74ZJODUymSFyq1qUu-j1QJbSl7gAP9w6IgxU4KCE8sk7v7JXT3RpC5RoLhmALG0cokR6iQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="projects"
          fill
        />
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
`;

const ProjectImg = styled(Image)`
  border-radius: 12px;
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
`;
