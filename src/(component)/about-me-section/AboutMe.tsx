import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <AboutMeSection>
      <AboutMeCard>
        <AboutMeDetail>
          <AbountMeTitle>Get to know me</AbountMeTitle>
          <AbountMeDesc>
            {`Greetings! I'm Kultirat Phongpun, a UX/UI Designer based in
            Bangkok, Thailand.`}
            <br />
            <br />
            <br />
            With a background in Well Services Supervisor at PTTEP for 9+ years.
            Wide variety of experiences in task management, leadership,
            problem-solving and business.
            <br />
            <br />
            <br />
            I discovered my true passion in product designs and web development.
            This portfolio is my creative journey, showcasing in crafting
            user-friendly web and app designs.
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
          <AboutMeImg
            src="https://s3-alpha-sig.figma.com/img/5137/eb06/be2f4df3b21d43d783260d1241301323?Expires=1701648000&Signature=XDWJ3wNN0zu8aDwyEa~wNedF-FZq23fKjlaOv0g34xHb324KyXiyRV1tt2z5h~NqhwPkrOLtfSPru1o9DsytP29Nj7jSMkXzxRSLzFLi42beZno7ezzROTaLk37tWURXG6y5yqLyCjXg3aZyK5AwPI6OxbnBsfqdINq4OEPrde6oIIVYwT288ex1H2OEpwmPZy7udDhqQXPPzenE1vPkJWJYatA0v-s6u8jC20d0lIs5B~CQNB--OQ8Y-oI58r95FS~PCvvEzni5m-nES2QXe4XBYygs8tPM13waKHnW4ecjTF1xhySrpN~P1WV8TNdJ3MhfDkt4v8TLYRvpOqvdVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="about-me-img"
            fill
          />
        </AboutMeImgContainer>
      </AboutMeCard>
    </AboutMeSection>
  );
};

export default AboutMe;

const AboutMeSection = styled.section`
  height: 100vh;
  background: #fcfcfd;
  margin: 44px 80px 0;
`;

const AboutMeCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  background: #fcfcfd;
  padding: 32px 40px;
`;

const AboutMeDetail = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const AbountMeTitle = styled.h2`
  color: #00639b;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.96px;
  margin: 24px 0;
`;

const AbountMeDesc = styled.p`
  color: #1f1f1f;
  font-size: 16px;
  line-height: 1.5;
  max-width: 520px;
`;

const AboutMeImgContainer = styled.div`
  display: flex;
  position: relative;
  width: 370px;
  height: 360px;
`;

const AboutMeImg = styled(Image)`
  border-radius: 100%;
  object-fit: cover;
`;
