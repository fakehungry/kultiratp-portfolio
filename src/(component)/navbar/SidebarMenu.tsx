import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styled from "@emotion/styled";
import { MdDesignServices } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { SiBloglovin } from "react-icons/si";

type Props = {
  isOpen: boolean;
};

const variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const SidebarMenu = ({ isOpen }: Props) => (
  <Menu isOpen={isOpen} variants={variants}>
    {menuItems.map((item) => (
      <MenuItem
        link={item.link}
        icon={item.icon}
        title={item.title}
        key={item.title}
      />
    ))}
  </Menu>
);

const Menu = motion(styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  margin: 0;
  padding: 25px;
  position: absolute;
  flex-direction: column;
  gap: 25px;
  top: 55px;
  left: -180px;
  width: 230px;
  background-color: ${({ theme }) => theme.primaryBgColor};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`);

const Button = styled(motion.button)`
  display: flex;
  width: 100%;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 40px;
  background: #ffe58f;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.06),
    0px 1px 3px 0px rgba(16, 24, 40, 0.1);
  cursor: pointer;
`;

const menuItems = [
  { icon: <MdDesignServices />, title: "About", link: "/about" },
  {
    icon: <AiOutlineFundProjectionScreen />,
    title: "Projects",
    link: "/projects",
  },
  { icon: <SiBloglovin />, title: "Blog", link: "/blog" },
  {
    icon: (
      <Button
        whileHover={{ scale: 1.1, color: "white" }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 400,
        }}
      >
        Resume
      </Button>
    ),
    link: "#",
  },
];
