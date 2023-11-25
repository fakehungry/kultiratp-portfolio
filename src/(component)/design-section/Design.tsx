import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

type Props = {};

const Design = (props: Props) => {
  return (
    <DesignSection>
      <DesignContent>
        <DesignTitle>Design:</DesignTitle>
        <DesignDesc>
          The design skills I&aposve gained from UX/UI practices, coupled with
          web development skills as demonstrated through this portfolio website.
        </DesignDesc>
      </DesignContent>
    </DesignSection>
  );
};

export default Design;

const DesignSection = styled.section`
  background: #fcfcfd;
  display: flex;
  flex-direction: column;
  margin: 120px 80px;
  height: 100vh;
`;

const DesignContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 40px;
  border-radius: 24px;
  background: #fffdf6;
`;

const DesignTitle = styled.h2`
  color: #00639b;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
`;

const DesignDesc = styled.p`
  color: #1f1f1f;
  text-align: justify;
  font-size: 16px;
  line-height: 1.5;
  max-width: 600px;
  margin-top: 24px;
  margin-bottom: 60px;
`;
