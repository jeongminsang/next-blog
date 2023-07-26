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

export const HeaderTitle = styled.h4`
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--hv-cr);
    transition: background-color 0.2s ease;
  }
`;

export const BlackThemeIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  margin: 10px;
  display: var(--dis--light);
`;

export const LightThemeIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  margin: 10px;
  display: var(--dis--black);
`;

export const CustomImage = styled(Image)`
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--hv-cr);
    transition: background-color 0.2s ease;
  }
`;
