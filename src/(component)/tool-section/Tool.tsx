import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

type Props = {};

const Tool = (props: Props) => {
  return (
    <ToolSection>
      <ToolTitle>{`Here are tools I've been working with:`}</ToolTitle>
      <Tools>
        <Image src="/png/figma-icon.png" alt="figma" width={40} height={40} />
        <Image
          src="/png/photoshop-icon.png"
          alt="photoshop"
          width={40}
          height={40}
        />
        <Image
          src="/png/illustrator-icon.png"
          alt="illustrator"
          width={40}
          height={40}
        />
        <Image src="/png/maze-icon.png" alt="maze" width={40} height={40} />
        <Image src="/png/jira-icon.png" alt="jira" width={40} height={40} />
        <Image src="/png/notion-icon.png" alt="notion" width={40} height={40} />
        <Image src="/png/html-icon.png" alt="html" width={40} height={40} />
        <Image src="/png/css-icon.png" alt="css" width={40} height={40} />
        <Image
          src="/png/javascript-icon.png"
          alt="javascript"
          width={40}
          height={40}
        />
        <Image src="/png/sql-icon.png" alt="sql" width={40} height={40} />
        <Image
          src="/png/mongodb-icon.png"
          alt="mongodb"
          width={40}
          height={40}
        />
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
  background: #fffdf6;
  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03),
    0px 20px 24px -4px rgba(16, 24, 40, 0.08);
`;

const ToolTitle = styled.h2`
  color: #00639b;
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
