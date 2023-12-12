import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

type Props = {};

const Quote = (props: Props) => {
  return (
    <QuoteSection>
      <QuoteFemale
        src="/png/avatar-female.png"
        width={80}
        height={80}
        alt="female-avatar"
        animate={{
          translateY: [0, 150, 320, 150, 0],
        }}
        transition={{
          times: [0, 0.25, 0.5, 0.75, 1],
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <QuoteEnclose>“</QuoteEnclose>
      <QuoteText>I love creating products that bring people together</QuoteText>
      <QuoteEnclose>”</QuoteEnclose>
      <QuoteMale
        src="/png/avatar-male.png"
        width={80}
        height={80}
        alt="male-avatar"
        animate={{
          translateY: [0, -150, -320, -150, 0],
        }}
        transition={{
          times: [0, 0.25, 0.5, 0.75, 1],
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </QuoteSection>
  );
};

export default Quote;

const QuoteSection = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.tertiaryBgColor};
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 100vh;
  position: relative;
`;

const QuoteFemale = motion(styled(Image)`
  border-radius: 100%;
  position: absolute;
  top: 30%;
  left: 10%;
  z-index: 3;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`);

const QuoteEnclose = styled.div`
  color: #ffe58f;
  font-size: 100px;
  font-weight: 600;
  position: relative;
  top: -5%;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const QuoteText = styled.div`
  color: ${({ theme }) => theme.primaryFgColor};
  max-width: 60%;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.96px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const QuoteMale = motion(styled(Image)`
  border-radius: 100%;
  position: absolute;
  bottom: 30%;
  right: 10%;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`);
