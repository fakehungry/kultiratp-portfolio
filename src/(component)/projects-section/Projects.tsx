import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { TbChevronsUpRight } from "react-icons/tb";
import { IoPlayOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Props = {
  isShowMore?: boolean;
};

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 400,
};

const Projects = (props: Props) => {
  const router = useRouter();

  const [projects, setProjects] = useState<any>();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" });

        return res.json();
      } catch (error) {}
    })().then((data) => {
      if (props.isShowMore) {
        const showProjects = data.projects?.slice(0, 3);
        setProjects(showProjects);
      } else {
        setProjects(data.projects);
      }
    });

    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    }
  }, [props.isShowMore]);

  return (
    <ProjectsSection>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectContainer>
        {projects?.map((project: any, i: number) => (
          <ProjectCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            key={i}
          >
            {i % 2 === 0 && !isMobile ? (
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
                    <TbChevronsUpRight
                      onClick={() => window.open(project?.view, "_blank")}
                    />
                    <IoPlayOutline
                      onClick={() => window.open(project?.video, "_blank")}
                    />
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
                    <TbChevronsUpRight
                      onClick={() => window.open(project?.view, "_blank")}
                    />
                    <IoPlayOutline
                      onClick={() => window.open(project?.video, "_blank")}
                    />
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
        <ProjectMore
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={spring}
          onClick={() => router.push("/projects")}
        >
          <ProjectMoreText>See more work</ProjectMoreText>
          <BsArrowUpRightCircleFill />
        </ProjectMore>
      ) : null}
    </ProjectsSection>
  );
};

export default Projects;

const ProjectsSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  padding: 120px 80px 80px;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 48px 16px 80px;
  }
`;

const ProjectsTitle = styled.h2`
  color: ${({ theme }) => theme.primaryFgColor};
  text-align: justify;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.96px;
  margin-bottom: 40px;
  width: fit-content;

  &:after {
    content: "";
    float: left;
    background: #ffe58f;
    width: 100%;
    height: 10px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    font-size: 24px;

    &:after {
      height: 5px;
    }
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectCard = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 64px;
  gap: 16px;

  @media (max-width: 1024px) {
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
`;

const ProjectDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px 0;
  gap: 24px;
  max-width: 520px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.primaryFgColor};
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.72px;
  z-index: 5;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ProjectDesc = styled.p`
  color: ${({ theme }) => theme.primaryFgColor};
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }
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

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
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

  @media (max-width: 768px) {
    img {
      width: 311px;
      height: 243px;
    }

    &::before {
      bottom: 30px;
      left: -10px;
      width: 23px;
      height: 23px;
    }

    &::after {
      top: -15px;
      right: -15px;
      width: 36px;
      height: 36px;
    }
  }
`;

const ProjectImg = styled(Image)`
  position: relative;
  z-index: 2;
  background-color: #fff1b8;
  border-radius: 12px;
  object-fit: cover;
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
  position: absolute;
  display: flex;
  transform: translate(0, -250%);
  z-index: 4;
  margin-left: 27%;
  gap: 150px;

  svg {
    width: 60px;
    height: 60px;
    padding: 4px;
    background-color: #fff1b8;
    border-radius: 100%;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-left: 30%;
    gap: 64px;

    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const ProjectMore = styled(motion.button)`
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
  cursor: pointer;
`;
