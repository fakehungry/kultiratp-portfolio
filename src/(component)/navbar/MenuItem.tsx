import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import Link from "next/link";

type Props = {
  icon: React.ReactNode;
  title?: string;
  link: string;
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ icon, title, link }: Props) => {
  return (
    <ListMenu
      href={link}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      {title ? <div>{title}</div> : null}
    </ListMenu>
  );
};

const ListMenu = motion(styled(Link)`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryFgColor};
`);
