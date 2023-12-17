import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

const AboutMe = () => {
  return (
    <AboutMeSection>
      <Container>
        <AboutMeCard>
          <AboutMeDetail>
            <AbountMeTitle>Get to know me</AbountMeTitle>
            <AbountMeDesc>
              {`Greetings! I'm Kultirat Phongpun, a UX/UI Designer based in
            Bangkok, Thailand.`}
              <br />
              <br />
              <br />
              With a background in Well Services Supervisor at PTTEP for 9+
              years. Wide variety of experiences in task management, leadership,
              problem-solving and business.
              <br />
              <br />
              <br />
              I discovered my true passion in product designs and web
              development. This portfolio is my creative journey, showcasing in
              crafting user-friendly web and app designs.
              <br />
              <br />
              <br />
              Beyond the design and coding, I love in coffee, travelling, home
              decorating and identify as a dog person.
              <br />
              <br />
              <br />
              Welcome to my creative space. I hope you enjoy!
            </AbountMeDesc>
          </AboutMeDetail>
          <AboutMeImgContainer>
            <AboutMeImg src="/png/about-me-img.png" alt="about-me-img" fill />
          </AboutMeImgContainer>
        </AboutMeCard>
      </Container>
    </AboutMeSection>
  );
};

export default AboutMe;

const AboutMeSection = styled.section`
  height: 70vh;
  margin: 80px 80px 0;

  @media (max-width: 768px) {
    margin: 0;
    height: 100%;
  }
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const AboutMeCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  background: ${({ theme }) => theme.tertiaryBgColor};
  padding: 32px 40px;
  border-radius: 24px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 0;
    padding: 24px 16px;
  }
`;

const AboutMeDetail = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const AbountMeTitle = styled.h2`
  color: ${({ theme }) => theme.tertiaryFgColor};
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.96px;
  margin: 24px 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const AbountMeDesc = styled.p`
  color: ${({ theme }) => theme.primaryFgColor};
  font-size: 16px;
  line-height: 1.5;
  max-width: 520px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const AboutMeImgContainer = styled.div`
  display: flex;
  position: relative;
  width: 370px;
  height: 360px;

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

const AboutMeImg = styled(Image)`
  border-radius: 100%;
  object-fit: cover;
`;
