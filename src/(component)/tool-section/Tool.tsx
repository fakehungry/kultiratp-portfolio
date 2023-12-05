import React from "react";
import styled from "@emotion/styled";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { CgMaze } from "react-icons/cg";
import { SiJira } from "react-icons/si";
import { RiNotionFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileSqlThin } from "react-icons/pi";
import { SiMongodb } from "react-icons/si";

type Props = {};

const Tool = (props: Props) => {
  return (
    <ToolSection>
      <ToolTitle>{`Here are tools I've been working with:`}</ToolTitle>
      <Tools>
        <FaFigma size={40} />
        <SiAdobephotoshop size={40} />
        <SiAdobeillustrator size={40} />
        <CgMaze size={40} />
        <SiJira size={40} />
        <RiNotionFill size={40} />
        <FaHtml5 size={40} />
        <FaCss3Alt size={40} />
        <IoLogoJavascript size={40} />
        <PiFileSqlThin size={40} />
        <SiMongodb size={40} />
      </Tools>
    </ToolSection>
  );
};

export default Tool;

const ToolSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 120px 80px;
  padding: 60px 32px;
  gap: 32px;
  border-radius: 24px;
  background: ${({ theme }) => theme.tertiaryBgColor};
  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
    0px 20px 24px -4px rgba(16, 24, 40, 0.08);
`;

const ToolTitle = styled.h2`
  color: ${({ theme }) => theme.tertiaryFgColor};
  text-align: justify;
  font-weight: 700;
  line-height: 1.3;
`;

const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 50px;
  max-width: 500px;
`;
