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

const defaultProjects = [
  {
    title: "FINNIE",
    description:
      "Personal financial planner that help everyone reach your financial goals with simple way.",
    tags: [
      "Design System",
      "User Research",
      "UI Design",
      "Prototyping",
      "Usability Test",
    ],
    img: "https://s3-alpha-sig.figma.com/img/821f/e259/7961f0f9ed8b2c0c8d103eb00e2e5061?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PtcyGfNyeurg~r9Wyr~ubkJ6AT7-jamBD-JcEdObJM9BCF0sf6ndXCtJy-yPNAuGyQox9mpOu2TZr9QUtMbP8W-sQb3yxfEQ-i15EIGLE6g3wW9ACC4rQYLIKheCl4DfIRYQtRA81MnHwQwqG8qDowxXafcUOuZWqm0uFNRIRBBAjSxNKuJIp9iQVSrRqIy8iMms5-pTKBsRIZLc~Fnrpqjzo-TozahPFpFjYrbfHQhgqRi7~ruCN3znqQoulSrQW0fqkjZyFv9kbvuz9CT20Vu0pikQwfVn8F3k1X-eKs0OMu41BZtAzAk3X7npl8Fg2QtfEl7BXe1zz46EO~uS0Q__",
    view: "https://www.figma.com/proto/My9HLZl79AucZ95xc6MW9O/FINNIE?page-id=109%3A2723&type=design&node-id=145-2253&viewport=868%2C375%2C0.17&t=5q7Sx5qbLTNoyhXm-1&scaling=scale-down&starting-point-node-id=145%3A2253",
    video:
      "https://www.figma.com/proto/My9HLZl79AucZ95xc6MW9O/FINNIE?page-id=109%3A2723&type=design&node-id=145-2253&viewport=868%2C375%2C0.17&t=5q7Sx5qbLTNoyhXm-1&scaling=scale-down&starting-point-node-id=145%3A2253",
  },
  {
    title: "CMMS Dashboard",
    description:
      "Identify user pain points in the current design and propose solutions for enhanced functionality and a more user-friendly design.",
    tags: [
      "Task Analysis",
      "UX Design",
      "Heuristic Evalutation",
      "User Flow",
      "UI Design",
    ],
    img: "https://s3-alpha-sig.figma.com/img/7097/0121/5e6c546c59c8da684ab2d0a1f5046ec0?Expires=1703462400&Signature=gWHW8ZkJFUOzQ~kqAK7xYVHFbj4iEqbM5soVWQMKOMMtFvJQPhKgJKO6HQOPsfbAaVbnI~W95paDBeYKMTeAZpT8e8oi962fIN5CiVFdFxYXks6VPnEDVEwzlRCp3lm~hi0kyOntzWLSg~xHJkJrDgPkG23-ZsnekGKPdyvgFddaAOS8qyhVPWsnJKYWc0JqUCCqQCemfsWEV~l0MGs737WmflI3Ru4eQ6~lWqYqF85FoDx7OE6Wqb6eeAc102VmlZtjZ0QiiNNDzK0xRZiZixwCa0LIUmAIZbOjGYHo1xeBJSTnDy-gmKPxG4rEnBlU3BQaqMyYTerzanweA1XBMA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    view: "https://vimeo.com/879713609",
    video:
      "https://www.figma.com/proto/Ggej3vvU0v8TwW1RNTDQpS/AltoTech---Redesign-CMMS?page-id=1022%3A9651&type=design&node-id=1022-9652&viewport=975%2C921%2C0.29&t=ufAXoQ9b2fN7RpmR-1&scaling=scale-down&starting-point-node-id=1022%3A9652",
  },
  {
    title: "KTC Mobile Application",
    description: "UX Audit and Revamping for KTC Mobile Application.",
    tags: [
      "UX Audit",
      "UI Redesign",
      "Prototyping",
      "Responsive Design",
      "Brand Identity",
    ],
    img: "https://s3-alpha-sig.figma.com/img/85bc/102f/360939519766177af36a542c8c463848?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=afoUSiz4LbAqT2VeviA6aHqUhXERx5DHEoOrG~hv7SmYvvL5T3BlbtOXFZ68TxxnmU7eXN50vtym7M7XE1O24~Jy8-M4EUH3A1YJPImpSsWI9e2o3PMKZ6QF7pWfBnAaiP4wJBtkSGECkiREfpx4xOI-kjrXOt9fZ8ZOY4eZvP78Ax-xkxYnHy-TI-AQu9XH0BIVBhwkmScwPC6QEqQEuOezihFfTVAdhODC0UvqD2xmgwXHnKe534eaRWc0mUy54HnifmIHIkvH-vyW9ZbfiofDU7V-mfcPMYyZka8S7LNsy3Kj3J3BzSVvMu3ljwFVoRHeI9oxx5GL772-Py4png__",
    view: "https://drive.google.com/file/d/1c3dhd9QY5_mjP_LTmKdwONJI1Zdyqt8O/view",
    video: "https://vimeo.com/865870397",
  },
  {
    title: "Effortless Money Transaction",
    description:
      "The design challenge for Thai credit mobile app focused on achieving seamless and user-friendly transactions.",
    tags: [
      "Research",
      "Brand Identity",
      "Design System",
      "UX/UI Design",
      "Prototyping",
    ],
    img: "https://s3-alpha-sig.figma.com/img/427f/517a/d8d67411ebed5ab8fbfaa09167c47500?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h~DOrercQPhSwAV9byZUOWlpmUgPYLmxoSRTfHE8tdp1aFazeKWEZWlM2ZK3taXA9UvWfmsTn-rmDtc3cwX0eYpogRiprlOhL0566YITFSZ~ojvRl-jrufHuNLjOmB2vWCg3t4S0bWkwCOQpovE0KBj-Yp0EsYBmyFJzntUTEiPcSfUnHNwcHSDTtnwMyMPYwZMZoLO5~YHQQzYnN~ldFWGsRSD9OxeOUn~5CSNCJ5kayyy9-LoZrVJdXweqshuvitZSASad6-W7ny11wJTwpyV0yqIB0odbLilJpw59B7js8K33y14YJnC3Q9yI5sj7eADtzEQA5NcrWhGAb18vxw__",
    view: "https://drive.google.com/file/d/1pg5BK7WNHhMWj3ZM1NH8tBkkeqDG5e2B/view?usp=sharing",
    video:
      "https://www.figma.com/proto/QXAACGGt0NQ9d39yBEQYNA/Thaicredit-bank-Design-challenge?page-id=13%3A37&type=design&node-id=45-239&viewport=214%2C310%2C0.46&t=6jF3h80q9qqvxGXI-1&scaling=scale-down",
  },
  {
    title: "Responsive Portfolio Design",
    description: "Portfolio seamless design for mobile and desktop interfaces",
    tags: [
      "Responsive design",
      "Visual design",
      "Web development",
      "Interaction design",
      "Custom Component",
    ],
    img: "https://s3-alpha-sig.figma.com/img/9d4c/fd23/a37a126369149b62938ec7b11626a464?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W6Mhl4bL9tN5295yUGpLOaaMoXmgt7UHR8sFUljkzom6XGeesoswmO~hwkJJYAiEJd8Yx5CDgpgJkXsoAKhGAUIRbOG1-Cp1TsZIZfHCD3J5P2ydi72aGm0y3oPikLlzZOSL7sGktd3~ONkTW3LYIJ1usPnFsdeQs6trqgo9tYXopY100EXvZpxFR31OHTOxKGGb7xg9GhXxv9l-v7oaKGh2PH78~VESiFXO0v8cbfkhxy1BNq5n1qrVSD3I5bhNSdk89uvLVNLQafrMyLmMvz7bTQchIWhPbg1yHEdZ-7HXXlXYQ~u6kmrm7WNZ1FNMYxf1KjN1fKQlveyMwZL2VA__",
    view: "https://drive.google.com/file/d/1ZKXSt0ngWji4vzG3kWudi8Zp5yhXqvj_/view",
    video:
      "https://www.figma.com/proto/Yq2InP0qkzVE2CEZqhJ8B8/Kultiratp.com?page-id=443%3A8999&type=design&node-id=443-9053&viewport=1038%2C615%2C0.06&t=efb82GUZ3WGUVoiI-1&scaling=scale-down&starting-point-node-id=443%3A9053&show-proto-sidebar=1&mode=design",
  },
];

const Projects = (props: Props) => {
  const router = useRouter();

  const [projects, setProjects] = useState(defaultProjects);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (props.isShowMore) {
      const showProjects = projects?.slice(0, 3);
      setProjects(showProjects);
    }

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
