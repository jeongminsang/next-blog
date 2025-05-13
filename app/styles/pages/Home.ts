"use client";

import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding-top: 70px;
`;

export const ResumeImg = styled(Image)`
  display: flex;
  align-self: center;
  border-radius: 1000px;
  width: 300px;
  height: 300px;
`;

export const ResumeText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const SubTitle = styled(motion.h3)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 200;
  font-size: 22px;
`;

export const Contents = styled(motion.p)`
  display: flex;
  justify-content: center;
  text-align: center;
`;
