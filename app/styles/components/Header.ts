"use client";

import styled from "styled-components";

interface RouterButtonProps {
  $params: string;
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
  color: ${(props) =>
    props.$params === "true" ? "var(--text--color)" : "grey"};
  cursor: pointer;
  &:hover {
    background-color: var(--hv-cr);
    transition: background-color 0.2s ease;
  }
`;

export const GitHubButton = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border-radius: 10px;
  background-color: var(--github--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  .github-icon {
    position: relative;
    margin-left: 2px;
    width: 33px;
    height: 32px;
    background-color: var(--text--color);
    mask: url(#gh-mask);
    -webkit-mask: url(#gh-mask);
  }

  .github-icon::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, var(--github--first--cr), var(--github--last--cr));
    background-size: 200%;
    background-position: left;
    transition: background-position 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: 0;
    mask: url(#gh-mask);
    -webkit-mask: url(#gh-mask);
    z-index: 1;
  }

  &:hover .github-icon::before {
    opacity: 1;
    background-position: right;
  }
`;
