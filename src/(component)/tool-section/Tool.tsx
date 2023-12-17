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
      <Container>
        <ToolTitle>{`Here are tools I've been working with:`}</ToolTitle>
        <Tools>
          <div className="hover-container">
            <FaFigma size={40} />
            <div className="hover-content">80%</div>
          </div>
          <div className="hover-container">
            <SiAdobephotoshop size={40} />
            <div className="hover-content">30%</div>
          </div>
          <div className="hover-container">
            <SiAdobeillustrator size={40} />
            <div className="hover-content">30%</div>
          </div>
          <div className="hover-container">
            <CgMaze size={40} />
            <div className="hover-content">50%</div>
          </div>
          <div className="hover-container">
            <SiJira size={40} />
            <div className="hover-content">80%</div>
          </div>
          <div className="hover-container">
            <RiNotionFill size={40} />
            <div className="hover-content">80%</div>
          </div>
          <div className="hover-container">
            <FaHtml5 size={40} />
            <div className="hover-content">50%</div>
          </div>
          <div className="hover-container">
            <FaCss3Alt size={40} />
            <div className="hover-content">50%</div>
          </div>
          <div className="hover-container">
            <IoLogoJavascript size={40} />
            <div className="hover-content">30%</div>
          </div>
          <div className="hover-container">
            <PiFileSqlThin size={40} />
            <div className="hover-content">50%</div>
          </div>
          <div className="hover-container">
            <SiMongodb size={40} />
            <div className="hover-content">50%</div>
          </div>
        </Tools>
      </Container>
    </ToolSection>
  );
};

export default Tool;

const ToolSection = styled.section`
  margin: 120px 80px;

  @media (max-width: 768px) {
    margin: 120px 0;
  }
`;

const Container = styled.div`
  background: ${({ theme }) => theme.tertiaryBgColor};
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 60px 32px;
  gap: 32px;
  border-radius: 24px;
  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
    0px 20px 24px -4px rgba(16, 24, 40, 0.08);

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

const ToolTitle = styled.h2`
  color: ${({ theme }) => theme.tertiaryFgColor};
  text-align: justify;
  font-weight: 700;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Tools = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 50px;
  max-width: 500px;
  color: ${({ theme }) => theme.primaryFgColor};

  .hover-container {
    position: relative;
    width: 40px;
    height: 40px;

    .hover-content {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-weight: 700;
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: ${({ theme }) => theme.tertiaryBgColor};
      transition: all 0.5s ease-in-out;
    }

    &:hover {
      .hover-content {
        opacity: 0.9;
        box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.06),
          0px 4px 8px -2px rgba(16, 24, 40, 0.1);
      }
    }
  }

  @media (max-width: 768px) {
    gap: 32px 8px;
  }
`;
