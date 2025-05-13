"use client";

import styled from "styled-components";
import Image from "next/image";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding-top: 70px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 26px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ResumeImg = styled(Image)`
  display: flex;
  align-self: center;
  border-radius: 1000px;
  width: 300px;
  height: 300px;
`;

export const SubTitle = styled.h3`
  display: flex;
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 100;
`;

export const Contents = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
`;
