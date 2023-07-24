"use client";

import styled from "styled-components";
import Image from "next/image";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
`;

export const HeaderIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  margin: 10px;
`;

export const CustomImage = styled(Image)`
  margin: 10px;
`;
