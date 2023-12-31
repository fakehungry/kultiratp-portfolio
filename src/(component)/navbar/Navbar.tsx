import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "@/app/styles/AppThemeProvider";
import { LuMoonStar } from "react-icons/lu";
import { LuSunMedium } from "react-icons/lu";
import { motion, useCycle } from "framer-motion";
import { SidebarMenu } from "./SidebarMenu";
import Hamburger from "hamburger-react";
import { useClickOutside } from "@/app/utils/use-click-outside";

const Navbar = () => {
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  const [hState, sethState] = useState("top");
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef() as React.MutableRefObject<any>;
  useClickOutside(containerRef, () => toggleOpen(0));

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 400,
  };

  useEffect(() => {
    var lastVal = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > lastVal) {
        sethState("down");
      }
      if (y < lastVal) {
        sethState("up");
      }
      if (y === 0) {
        sethState("top");
      }
      lastVal = y;
    };
  }, []);

  return (
    <Header state={hState} boxShadow={theme}>
      <Nav>
        <NavHomeIcon
          src="/png/home-icon.png"
          alt="kultirat-home-icon"
          width={48}
          height={48}
          onClick={() => router.push("/")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={spring}
        />
        <NavMenuUl>
          <li>
            <LinkMenu href="/about" whileHover={{ color: "#00639B" }}>
              About
            </LinkMenu>
          </li>
          <li>
            <LinkMenu href="/projects" whileHover={{ color: "#00639B" }}>
              Projects
            </LinkMenu>
          </li>
          <li>
            <LinkMenu href="/blog" whileHover={{ color: "#00639B" }}>
              Blog
            </LinkMenu>
          </li>
        </NavMenuUl>
        <NavRightMenu>
          {theme === "light" ? (
            <MoonIcon
              onClick={() =>
                setTheme((theme) => (theme === "light" ? "dark" : "light"))
              }
            />
          ) : (
            <SunIcon
              onClick={() =>
                setTheme((theme) => (theme === "light" ? "dark" : "light"))
              }
            />
          )}

          <NavResumeBtn
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1cP1mfPmhiN6exxr6Ze3qW3yj-99S0Mor/view?usp=sharing",
                "_blank"
              );
            }}
            whileHover={{ scale: 1.1, color: "#00639B" }}
            whileTap={{ scale: 0.9 }}
            transition={spring}
          >
            Resume
          </NavResumeBtn>
          <HamburgerMenuContainer
            initial={false}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef}
          >
            <HamburgerMenuBackground />
            <SidebarMenu isOpen={isOpen} />
            <Hamburger size={24} toggled={isOpen} toggle={() => toggleOpen()} />
          </HamburgerMenuContainer>
        </NavRightMenu>
      </Nav>
    </Header>
  );
};

export default Navbar;

const Header = styled.header<{ state: string; boxShadow: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  background: ${({ theme }) => theme.primaryBgColor};
  box-shadow: ${({ boxShadow }) =>
    boxShadow === "light"
      ? "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)"
      : "0px 8px 8px -4px rgba(242, 250, 255, 0.03), 0px 20px 24px -4px rgba(242, 250, 255, 0.08)"};

  ${(props) => {
    if (props.state === "top") {
      return `
        transition: all 0.5s ease-in-out;
        transform: translateY(0);
      `;
    } else if (props.state === "down") {
      return `
        transition: all 0.5s ease-in-out;
        transform: translateY(-100%);
      `;
    } else if (props.state === "up") {
      return `
        transition: all 0.5s ease-in-out;
        transform: translateY(0);
      `;
    }
  }};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 80px;
  align-items: center;
  font-size: 16px;
  line-height: 1.2;

  @media (max-width: 768px) {
    padding: 8px;

    .home-icon {
      width: 32px;
      height: 32px;
    }
  }
`;

const NavHomeIcon = motion(styled(Image)`
  border-radius: 100%;
  cursor: pointer;
`);

const LinkMenu = motion(styled(Link)``);

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

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavResumeBtn = motion(styled.button`
  cursor: pointer;
  display: flex;
  font-size: 16px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 60px;
  border: none;
  border-radius: 40px;
  background: #ffe58f;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06),
    0px 1px 3px 0px rgba(16, 24, 40, 0.1);

  @media (max-width: 768px) {
    display: none;
  }
`);

const NavRightMenu = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;

  svg {
    width: 32px;
    height: 32px;
  }
`;

const MoonIcon = styled(LuMoonStar)`
  cursor: pointer;
`;

const SunIcon = styled(LuSunMedium)`
  color: ${({ theme }) => theme.primaryFgColor};
  cursor: pointer;
`;

const HamburgerMenuContainer = motion(styled.div`
  display: none;
  position: relative;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.primaryFgColor};

  @media (max-width: 768px) {
    display: block;
  }
`);

const HamburgerMenuBackground = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;
