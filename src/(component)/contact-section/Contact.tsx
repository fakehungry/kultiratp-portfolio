import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

type Props = {};

const Contact = (props: Props) => {
  return (
    <ContactSection>
      <ContactImgContainer>
        <ContactImg
          src="https://s3-alpha-sig.figma.com/img/ab13/cdfe/dec8cde00c48e8781674199a98b2a459?Expires=1701648000&Signature=P-~4VJs8prpGMuzvJ8YKmnJc41CRihvg34ss1BityQ4GKwMlJsey65CDqhx2hxJhGZLAeJ6QCyttezvAE~jL3pPwwtXtKx580w74B1WfzsGbQyLjZNCBi6OA9OWuxSqz1pIvF9AiJ2qi1-Mm3iN8cbCTT9PW3cvSj~iULxryEKu4KqiiT2YCZ4UNOltj5RdCwdC0MDulmI3Dcncr--XVOYSn67DQM7tFT~9~WrXpax5as1sxhJNwcho5YvfP2Zi0GDhtBH1~gg87Gm8WnUNRouuPHR6IsBhz8HtXQpsBCXr2mMd~SjJQQDabTSTUNQoeA4HHiUFhspUNE6jCqDlYVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          width={238}
          height={238}
          alt="contact-avatar"
        />
        <div className="bg-img" />
      </ContactImgContainer>
      <ContactTitle>Say Hello.</ContactTitle>
      <ContactBtn>
        <span>kultirat.p@gmail.com</span>
        <BsArrowUpRightCircleFill />
      </ContactBtn>
      <ContactSocial>
        <FaLinkedin />
        <FaBehanceSquare />
        <FaDribbble />
        <FaInstagram />
      </ContactSocial>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff1b8;
  height: 100vh;
  gap: 40px;
`;

const ContactTitle = styled.h2`
  color: #1f2529;
  text-align: center;
  font-size: 72px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -1.44px;

  @media (max-width: 450px) {
    font-size: 36px;
  }
`;

const ContactImgContainer = styled.div`
  position: relative;

  .bg-img {
    width: 188px;
    height: 138px;
    bottom: 5%;
    left: 10%;
    position: absolute;
    border-radius: 67.5px;
    background: #f16529;

    @media (max-width: 450px) {
      width: 142.185px;
      height: 104.37px;
    }
  }
`;

const ContactImg = styled(Image)`
  position: relative;
  z-index: 2;

  @media (max-width: 450px) {
    width: 180px;
    height: 180px;
  }
`;

const ContactBtn = styled.button`
  display: flex;
  padding: 16px 24px;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: #fff;
  border: none;

  span {
    font-size: 16px;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const ContactSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  svg {
    width: 24px;
    height: 24px;
  }
`;
