import React from "react";
import ConcaveSvg from "../concave-svg/ConcaveSvg";
import styled from "@emotion/styled";

type Props = {};

const Skill = (props: Props) => {
  return (
    <SkillSection>
      <Container>
        <SkillTitle>What I am capable of</SkillTitle>
        <SkillDesc>
          I design digital products based on customer insights and UX/UI best
          practices. I help design and built your app and website from scratch
          to launch.
        </SkillDesc>
      </Container>
      <ConcaveSvg />
    </SkillSection>
  );
};

export default Skill;

const SkillSection = styled.section`
  height: 100vh;
  background: ${({ theme }) => theme.secondaryBgColor};

  @media (max-width: 768px) {
    height: 120vh;
  }
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 38px 80px 0;

  @media (max-width: 768px) {
    padding: 52px 16px 0;
  }
`;

const SkillTitle = styled.h2`
  color: ${({ theme }) => theme.primaryFgColor};
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.96px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const SkillDesc = styled.p`
  max-width: 550px;
  margin-top: 26px;
  color: ${({ theme }) => theme.primaryFgColor};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
