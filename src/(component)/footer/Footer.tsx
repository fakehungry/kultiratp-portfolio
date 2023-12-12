import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <FooterContent>
        <FooterAddress>
          <h4>Address</h4>
          <p>Bangkok, Thailand, 10250</p>
        </FooterAddress>
        <FooterContact>
          <h4>Contact</h4>
          <Link href="mailto:kultirat.p@gmail.com">kultirat.p@gmail.com</Link>
        </FooterContact>
        <FooterFollowMe>
          <h4>Follow Me</h4>
          <div className="social">
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
            <FaMedium
              onClick={() =>
                window.open(
                  "https://medium.com/@kultiratellephongpun",
                  "_blank"
                )
              }
            />
          </div>
        </FooterFollowMe>
      </FooterContent>
      <FooterCopyRight>
        © Copyright Kultirat Phongpun{" "}
        {currentYear === 2023 ? `2023` : `2023 - ${currentYear}`}
      </FooterCopyRight>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  background: #fff1b8;
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  padding: 60px 80px;

  @media (max-width: 768px) {
    margin-top: 0;
    padding: 24px 16px;
    flex-direction: column;
  }
`;

const FooterContent = styled.div`
  display: flex;
  gap: 200px;

  @media (max-width: 768px) {
    gap: 32px;
    flex-direction: column;
  }
`;

const FooterAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  h4 {
    color: #000;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  }

  p {
    color: #000;
    font-size: 16px;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  h4 {
    color: #000;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  }

  a {
    color: #000;
    font-size: 16px;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const FooterFollowMe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .social {
    display: flex;
    gap: 32px;

    svg {
      cursor: pointer;
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const FooterCopyRight = styled.div`
  color: #878787;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  margin: 200px 0 30px;

  @media (max-width: 768px) {
    margin: 50px 0 12px;
  }
`;
