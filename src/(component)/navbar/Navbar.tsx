import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import MoonIcon from "../svg/MoonIcon";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header>
      <Nav>
        <NavHomeIcon
          src="/png/home-icon.png"
          alt="kultirat-home-icon"
          width={48}
          height={48}
        />
        <NavMenuUl>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </NavMenuUl>
        <NavRightMenu>
          <MoonIcon />
          <NavResumeBtn>Resume</NavResumeBtn>
        </NavRightMenu>
      </Nav>
    </header>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 80px;
  align-items: center;
  font-size: 16px;
  line-height: 1.2;
`;

const NavHomeIcon = styled(Image)`
  border-radius: 100%;
`;

const NavMenuUl = styled.ul`
  display: inline-flex;
  padding: 16px 32px;
  align-items: center;
  gap: 60px;
  border-radius: 9999px;
  background: #ffe58f;
  box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.06),
    0px 4px 8px -2px rgba(16, 24, 40, 0.1);

  a {
    color: #1f2529;
    text-align: center;
    font-size: 16px;
    line-height: 1.2;
  }
`;

const NavResumeBtn = styled.button`
  display: flex;
  padding: 12px 18px;
  justify-content: center;
  align-items: center;
  gap: 60px;
  border: none;
  border-radius: 40px;
  background: #ffe58f;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06),
    0px 1px 3px 0px rgba(16, 24, 40, 0.1);
`;

const NavRightMenu = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;

  svg {
    width: 32px;
    height: 32px;
  }
`;
