import React from "react";
import ConcaveSvg from "../concave-svg/ConcaveSvg";
import styled from "@emotion/styled";

type Props = {};

const Skill = (props: Props) => {
  return (
    <SkillSection>
      <SkillTitle>What I am capable of</SkillTitle>
      <SkillDesc>
        I design digital products based on customer insights and UX/UI best
        practices. I help design and built your app and website from scratch to
        launch.
      </SkillDesc>
      <ConcaveSvg />
    </SkillSection>
  );
};

export default Skill;

const SkillSection = styled.section`
  height: 100vh;
  padding: 38px 80px 0;
  background: #fff4cc;
`;

const SkillTitle = styled.h2`
  color: #1f1f1f;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.96px;
`;

const SkillDesc = styled.p`
  max-width: 550px;
  margin-top: 26px;
  color: #1f1f1f;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;