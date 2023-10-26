"use client";

import styled from "styled-components";
import Image from "next/image";

interface RouterButtonProps {
  isParams: boolean;
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  height: 70px;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
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

export const SideButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 800px;
  height: 70px;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const RouterButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RouterButton = styled.div<RouterButtonProps>`
  font-size: 17px;
  padding: 8px;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 5px;
  color: ${(props) => (props.isParams ? "var(--text--color)" : "grey")};
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
  margin: 10px 0px 10px 0px;
  display: var(--dis--light);
`;

export const LightThemeIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  margin: 10px 0px 10px 0px;
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
