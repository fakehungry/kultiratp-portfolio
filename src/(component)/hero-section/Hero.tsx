import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <HeroSection>
      <Image
        className="avatar-img"
        alt="kultirat-avatar"
        src="/png/avatar-me.png"
        width={180}
        height={180}
      />
      <HeroName>
        <span>{`Hi! I’m Kultirat`}</span>
        <HiImage
          alt="kultirat-wave"
          src="/png/hi-five.png"
          width={40}
          height={40}
          animate={{ rotate: [0, 20, 40, 20, 0] }}
          transition={{
            times: [0, 0.25, 0.5, 0.75, 1],
            duration: 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </HeroName>
      <HeroQuote>Building digital products, brands and experiences.</HeroQuote>
      <HeroDesc>
        A UX/UI Designer, Responsive design and web development.
      </HeroDesc>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.primaryBgColor};

  .avatar-img {
    margin-bottom: 8px;
    border-radius: 100%;
  }

  @media (max-width: 768px) {
    padding: 0 32px;

    .avatar-img {
      width: 120px;
      height: 120px;
    }
  }
`;

const HeroName = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  color: ${(props) => props.theme.primaryFgColor};

  @media (max-width: 768px) {
    font-size: 16px;

    img {
      width: 32px;
      height: 32px;
    }
  }
`;

const HeroQuote = styled.div`
  max-width: 800px;
  margin-top: 24px;
  color: ${({ theme }) => theme.primaryFgColor};
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.96px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const HeroDesc = styled.div`
  margin-top: 8px;
  color: ${(props) => props.theme.secondaryFgColor};
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const HiImage = motion(Image);
