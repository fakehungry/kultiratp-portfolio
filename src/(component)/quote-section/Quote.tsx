import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

type Props = {};

const Quote = (props: Props) => {
  return (
    <QuoteSection>
      <QuoteFemale
        src="https://s3-alpha-sig.figma.com/img/5b6b/fbe7/1ad5ca817f031682ae8854f7d2e78c40?Expires=1701648000&Signature=VZcms13jkiN2YnkleaZ1YxPz647IOM7jua895SjMML2~hEhDEVT2uUV4wPufpadVuhoQCAcbVz2PFzKQESA8pepoKl~a6Vo7-yJydcxP4aWFd-89NuV57JYNnGK43K62wyzgKZ4xoFKNzqyqAP0XtQKc6IEJ~TBSU7Ekl~EwdbfM-m5B8zMkzW~31HxzCq5CRMIm7WA7aZdwTdNuFgceER9Qd4hPMTEx0ayULYDRxlsgS8eu46dI3pmzKjzd5kAWpajBVh2hVmzH-bUbXZLP9GBo-xvTRCmd6aIJHtNaLaNsvRuZ5~U3aIlzoH2UhGWbrP-u1Zifkjosrpssw10dfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        width={80}
        height={80}
        alt="female-avatar"
      />
      <QuoteEnclose>“</QuoteEnclose>
      <QuoteText>I love creating products that bring people together</QuoteText>
      <QuoteEnclose>”</QuoteEnclose>
      <QuoteMale
        src="https://s3-alpha-sig.figma.com/img/081c/3a3e/2f863fdbdbae75fb5603562efd14bce0?Expires=1701648000&Signature=NJTa4NO0gPrt8PtbZeerRuOLP~KuQSNJvAm4E4qSx4N12OjvuqaGCL1agEMEzxF3fb2r859gp0e6EUjm3Ms64hgX2KdZfRHT3yo9YAqfNA9YuJ34~L08TzzFgWDPLn9Q83M7fCqzMXjzQYRxJYjyFkX0nh5FJef1Gs128dmGUuEZC~qXTV8mdXbDSHGRYECkWHzTFXoY0qPTutvcxBFhsOm8Cd1qejgfibXKZoCAxshFsr70phxMsIYDw-oTrzKkLD6wppDqnxtox39ILuZE0LxR1jlNKLSwW9T15gTIQ2BtL9O0cOhGfsipN0JzIZOznaXpalmD1nXmRg34TUJq8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        width={80}
        height={80}
        alt="male-avatar"
      />
    </QuoteSection>
  );
};

export default Quote;

const QuoteSection = styled.section`
  background: #fffdf6;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 100vh;
  position: relative;
`;

const QuoteFemale = styled(Image)`
  border-radius: 100%;
  position: absolute;
  top: 30%;
  left: 10%;
`;

const QuoteEnclose = styled.div`
  color: #ffe58f;
  font-size: 100px;
  font-weight: 600;
  position: relative;
  top: -5%;
`;

const QuoteText = styled.div`
  color: #1f1f1f;
  max-width: 60%;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.96px;
`;

const QuoteMale = styled(Image)`
  border-radius: 100%;
  position: absolute;
  bottom: 30%;
  right: 10%;
`;
