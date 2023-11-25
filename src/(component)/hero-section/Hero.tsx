import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <HeroSection>
      <HeroAvatar
        alt="kultirat-avatar"
        src="https://s3-alpha-sig.figma.com/img/6c44/ed86/1e10db58cc21318d89a6e5f7e62a6ef1?Expires=1701648000&Signature=Mp1WhXLHlh8tmd7UiGxwdXugPHcFyCocFb-KfvAPKP5tJmZGxZegDoRAUC1L7GVAZG2-2rjggGs7ez2MyyvGSnk41pG0Ocmwb0DohTzlVovOxodA9JC-RrjPDDY4gr1C7tWO80A~WzQb4dgvIXP82weoAakZbDNF1TVRbNuqMG73TQMd7acF9lp6gkZ3fFMJg6qXvrYptNtDeST8vDxQIlepBrObCkgEILnykBIys-BzcDTMwtO8lcQOy4R7-1cWI5mMpVHsJm8B~6LJwtsMEctfSF-fJEqWp8~ZAXDyFEt~EkcEqU7Cmv6Y2ieT8PZJyAwRoPZRqPdLdE77gkzy8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        width={186}
        height={186}
      />
      <HeroName>
        <span>Hi! I’m Kultirat </span>
        <Image
          alt="kultirat-wave"
          src="https://s3-alpha-sig.figma.com/img/cfe1/1ca5/5be4fd2e1fac1e9f0db81d6d0df645e5?Expires=1701648000&Signature=Th3HH6TxcilQKYoEj0cbJxJRWCbgamWs6VMumnRx6OmScG~pSuRJ~B4LWTzZwJ0pdNn~yet6y2zvXvkdYSbDD~ybYm6lEF8ofY~mXOZdIw7Bbzwhkxm1pF2Q~1IN~1TtvtDkyrcHOilIODDqSQyWPIqNuc8S5VVjq8EDnAlpoBNZFMj1Vx5fva0oQHy-ZrGmbbJC8BvXPexca--tk3J9A8NtLoDjQK0brzFdj0ENkNWlJ3Klnv8s8P2SiYKeVAqFZbw-XC5-iaIheLhhUxHkcXNbe-iYm6ShoCXGjpYMVv8AZcFEqHbYBgG-Yv6iZMYo544T4NPx9wzn6seHI7Zpeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          width={40}
          height={40}
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
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HeroAvatar = styled(Image)`
  border-radius: 100%;
  margin-bottom: 8px;
`;

const HeroName = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #1f1f1f;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
`;

const HeroQuote = styled.div`
  max-width: 800px;
  margin-top: 24px;
  color: #1f1f1f;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.96px;
`;

const HeroDesc = styled.div`
  margin-top: 8px;
  color: #616161;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;
