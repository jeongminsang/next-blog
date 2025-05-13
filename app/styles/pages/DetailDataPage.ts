"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

export const PostContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  & > * {
    flex-shrink: 0;
  }
`;

export const PostSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const PostTitle = styled(motion.h1)`
  display: flex;
  font-size: 40px;
  justify-content: center;
  padding: 10px;
  @media screen and (max-width: 800px) {
    font-size: 30px;
    width: 100%;
  }
`;

export const PostInfo = styled(motion.div)`
  display: flex;
  font-size: 16px;
  justify-content: center;
`;

export const PostContents = styled(motion.div)`
  padding: 10px;
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
    max-height: 500px;
    object-fit: contain;
  }
  a {
    color: #5ba2ff;
  }
  li {
    margin-left: 20px;
  }
`;

export const TagAside = styled(motion.aside)`
  width: 240px;
  @media screen and (max-width: 1440px) {
    display: none;
  }
`;

export const TOCAside = styled(motion.aside)`
  position: sticky;
  top: 230px;
  width: 240px;
  height: 100%;
  padding: 10px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  div {
    margin-bottom: 5px;
    white-space: normal;
  }
  @media screen and (max-width: 1440px) {
    display: none;
  }
`;

export const GiscusContainer = styled(motion.div)`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`;
