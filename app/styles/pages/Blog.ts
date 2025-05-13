"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-top: 26px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const SubTitle = styled.h4`
  margin-top: 0px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 100;
`;

export const BlogTitle = styled.h3`
  margin-top: 10px;
  margin-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const PostList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));
  flex-direction: column;
`;

export const PostBody = styled(motion(Link))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  transition: transform 0.2s ease;
`;

export const PostContents = styled.div`
  @media screen and (max-width: 800px) {
    max-width: 350px;
  }
`;

export const PostTitle = styled.div`
  margin-bottom: 5px;
  @media screen and (max-width: 500px) {
    margin-top: 5px;
  }
`;

export const PostSubTitle = styled.div`
  color: #fff;
  font-size: 14px;
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  div {
    display: flex;
    align-items: center;
    margin-right: 5px;
  }
`;

export const ThumbnailImg = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 230px;
  border-radius: 20px;
  transition: transform 0.2s ease;
  &:hover {
    background-color: var(--hv-cr);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
  @media screen and (max-width: 500px) {
    height: 230px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

export const ImageCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  margin: 0 auto;
  height: 230px;
  border-radius: 19px;
  top: 24px;
  left: 00px;
  padding: 20px;
  text-align: center;
  background-color: transparent;
  transition: background-color 0.2s ease, opacity 0.2s ease;
  opacity: 1;
  > div {
    display: flex;
    justify-content: space-between;
    opacity: 0;
    transition: opacity 0.2s ease;
    color: #fff;
    > svg {
      width: 30px;
      height: 30px;
    }
  }
  &:hover {
    background: rgba(0, 0, 0, 0.7);
    > div {
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    height: 300px;
  }
  @media screen and (max-width: 500px) {
    height: 230px;
  }
`;
