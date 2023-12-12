"use client";
import React from "react";
import styled from "@emotion/styled";
import Navbar from "@/(component)/navbar/Navbar";
import Image from "next/image";

type Props = {};

const BlogPage = (props: Props) => {
  return (
    <Main>
      <Navbar />
      <BlogImgContainer>
        <BlogImg src="/png/banner-blog.png" alt="blog" fill />
        <BlogImgOverlay>
          <span>Upcoming. It will be launched soon.</span>
          <Image
            src="/png/avatar-blog.png"
            alt="avatar"
            width={80}
            height={80}
          />
        </BlogImgOverlay>
      </BlogImgContainer>
    </Main>
  );
};

export default BlogPage;

const Main = styled.main`
  background-color: ${({ theme }) => theme.primaryBgColor};
`;

const BlogImgContainer = styled.div`
  height: 100vh;
  position: relative;
  margin: 68px 0 0;

  @media (max-width: 768px) {
    margin: 64px 0 0;
  }
`;

const BlogImg = styled(Image)`
  object-fit: cover;
`;

const BlogImgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: #fff1b8;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  padding: 0 8px;
  gap: 16px;

  span {
    color: black;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }

  img {
    margin-left: 32px;
    border-radius: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
