import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import UpperRightIcon from "../svg/UpperRightIcon";
import LinkedInIcon from "../svg/LinkedInIcon";
import BehanceIcon from "../svg/BehanceIcon";
import InstagramIcon from "../svg/InstagramIcon";
import DribbleIcon from "../svg/DribbleIcon";

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
      </ContactImgContainer>
      <ContactTitle>Say Hello.</ContactTitle>
      <ContactBtn>
        <span>kultirat.p@gmail.com</span>
        <UpperRightIcon />
      </ContactBtn>
      <ContactSocial>
        <LinkedInIcon />
        <BehanceIcon />
        <DribbleIcon />
        <InstagramIcon />
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
`;

const ContactImgContainer = styled.div`
  position: relative;
  width: 238px;
  height: 238px;
`;

const ContactImg = styled(Image)`
  position: relative;
  z-index: 2;
`;

const ContactBtn = styled.button`
  display: flex;
  padding: 16px 24px;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: #fff;
  border: none;
`;

const ContactSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;