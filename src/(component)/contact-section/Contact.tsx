import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <ContactSection>
      <Container>
        <ContactImgContainer>
          <ContactImg
            src="/png/avatar-hello.png"
            width={238}
            height={238}
            alt="contact-avatar"
          />
          <div className="bg-img" />
        </ContactImgContainer>
        <ContactTitle>Say Hello.</ContactTitle>
        <ContactBtn
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 400,
          }}
          onClick={() => (window.location.href = "mailto:kultirat.p@gmail.com")}
        >
          <span>kultirat.p@gmail.com</span>
          <BsArrowUpRightCircleFill />
        </ContactBtn>
        <ContactSocial>
          <FaLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/kultirat-phongpun-533959102",
                "_blank"
              )
            }
          />
          <FaBehanceSquare
            onClick={() =>
              window.open("https://www.behance.net/kultiraphongpu1", "_blank")
            }
          />
          <FaDribbble
            onClick={() =>
              window.open("https://dribbble.com/Phongpun", "_blank")
            }
          />
          <FaInstagram
            onClick={() =>
              window.open("https://www.instagram.com/ellepajinko/", "_blank")
            }
          />
        </ContactSocial>
      </Container>
    </ContactSection>
  );
};

export default Contact;

const ContactSection = styled.section`
  background: #fff1b8;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const ContactTitle = styled.h2`
  color: #1f2529;
  text-align: center;
  font-size: 72px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -1.44px;

  @media (max-width: 768px) {
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

    @media (max-width: 768px) {
      width: 142.185px;
      height: 104.37px;
    }
  }
`;

const ContactImg = styled(Image)`
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const ContactBtn = motion(styled.button`
  cursor: pointer;
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
`);

const ContactSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  svg {
    cursor: pointer;
    width: 24px;
    height: 24px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #00639b;
    }
  }
`;
