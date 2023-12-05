import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { TbChevronsUpRight } from "react-icons/tb";
import { CiPlay1 } from "react-icons/ci";

type Props = {
  isShowMore?: boolean;
};

const Projects = (props: Props) => {
  const [projects, setProjects] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" });

        return res.json();
      } catch (error) {}
    })().then((data) => {
      if (props.isShowMore) {
        const showProjects = data.projects.slice(0, 3);
        setProjects(showProjects);
      } else {
        setProjects(data.projects);
      }
    });
  }, [props.isShowMore]);

  return (
    <ProjectsSection>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectContainer>
        {projects?.map((project: any, i: number) => (
          <ProjectCard key={i}>
            {i % 2 === 0 ? (
              <>
                <ProjectDetail>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDesc>{project.description}</ProjectDesc>
                  <ProjectTags>
                    {project.tags.map((tag: string, i: number) => (
                      <ProjectTag key={i}>{tag}</ProjectTag>
                    ))}
                  </ProjectTags>
                </ProjectDetail>
                <ProjectImgContainer>
                  <ProjectImg
                    alt={project.title}
                    src={project.img}
                    width={542}
                    height={400}
                  />
                  <HoveringIconContainer>
                    <TbChevronsUpRight />
                    <CiPlay1 />
                  </HoveringIconContainer>
                </ProjectImgContainer>
              </>
            ) : (
              <>
                <ProjectImgContainer>
                  <ProjectImg
                    alt={project.title}
                    src={project.img}
                    width={542}
                    height={400}
                  />
                  <HoveringIconContainer>
                    <TbChevronsUpRight />
                    <CiPlay1 />
                  </HoveringIconContainer>
                </ProjectImgContainer>
                <ProjectDetail>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDesc>{project.description}</ProjectDesc>
                  <ProjectTags>
                    {project.tags.map((tag: string, i: number) => (
                      <ProjectTag key={i}>{tag}</ProjectTag>
                    ))}
                  </ProjectTags>
                </ProjectDetail>
              </>
            )}
          </ProjectCard>
        ))}
      </ProjectContainer>
      {props.isShowMore ? (
        <ProjectMore>
          <ProjectMoreText>See more work</ProjectMoreText>
          <BsArrowUpRightCircleFill />
        </ProjectMore>
      ) : null}
    </ProjectsSection>
  );
};

export default Projects;

const ProjectsSection = styled.section`
  display: flex;
  padding: 120px 80px 80px;
  flex-direction: column;
`;

const ProjectsTitle = styled.h2`
  color: ${({ theme }) => theme.primaryFgColor};
  text-align: justify;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.96px;
  margin-bottom: 40px;
  text-decoration: underline #ffe58f 10px solid;
  text-underline-position: under;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 64px;
`;

const ProjectDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px 0;
  gap: 24px;
  max-width: 520px;
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.primaryFgColor};
  text-align: justify;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.72px;
`;

const ProjectDesc = styled.p`
  color: ${({ theme }) => theme.primaryFgColor};
  font-size: 16px;
  line-height: 1.5;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const ProjectTag = styled.span`
  padding: 8px 12px;
  border-radius: 40px;
  background: #fff1b8;
  color: #000;
  text-align: center;
  font-size: 14px;
  line-height: 1.4;
`;

const ProjectImgContainer = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: -25px;
    width: 56px;
    height: 56px;
    background-color: #d7e4bd;
    z-index: 3;
    border-radius: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: -55px;
    right: -55px;
    width: 120px;
    height: 120px;
    background-color: #c2b4d9;
    z-index: 1;
    border-radius: 100%;
  }
`;

const ProjectImg = styled(Image)`
  position: relative;
  z-index: 2;
  background-color: #fff1b8;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:has(+ div:hover) {
    opacity: 0.5;
    border-radius: 9999px;
  }

  & + div {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover + div,
  & + div:hover {
    opacity: 1;
  }
`;

const HoveringIconContainer = styled.div`
  position: relative;
  display: flex;
  gap: 33%;
  left: 0;
  transform: translate(27%, -100px);
  z-index: 4;

  svg {
    width: 44px;
    height: 44px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    background-color: #fff1b8;
    border-radius: 100%;
    cursor: pointer;
  }
`;

const ProjectMore = styled.button`
  display: inline-flex;
  padding: 16px;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: #fff1b8;
  margin: 24px auto 132px;
  border: none;
`;

const ProjectMoreText = styled.span`
  color: #1f2529;
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
`;
