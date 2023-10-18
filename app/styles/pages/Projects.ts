"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";

const TitleMoveDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const StackMoveDown = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

const TextMoveUp = keyframes`
  0% {
    transform: translateY(30%);
    opacity: 1;
  }
  100% {
    transform: translateY(0%);
    opacity: 0;
  }
`;

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

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
`;

export const CardImg = styled(Image)`
  object-fit: cover;
  width: calc(33.33% - 20px);
  width: 250px;
  height: 250px;
  flex: 1;
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;

export const CardContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 250px;
  height: 250px;
  top: 24px;
  left: 0;
  background: rgba(0, 0, 0, 0);
  padding: 5px;
  text-align: center;
  transition: background-color 0.5s ease;
  > div {
    display: none;
  }
  &:hover {
    background: var(--background--cr);
    > div {
      display: flex;
    }
  }
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;

export const CardTitle = styled.div`
  font-size: 22px;
  font-weight: 400;
  padding: 30px 10px 0px 10px;
  animation: ${TitleMoveDown} 0.2s linear;
`;

export const ProjectStack = styled.div`
  display: flex;
  justify-content: center;
  max-width: 200px;
  margin-top: 10px;
  flex-wrap: wrap;
  color: white;
  animation: ${StackMoveDown} 0.2s linear;
`;

export const StackTag = styled.div`
  border: 1px #5ba2ff solid;
  font-size: 12px;
  padding: 3px 5px 3px 5px;
  margin: 3px;
  border-radius: 5px;
  background-color: #5ba2ff;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  bottom: 10px;
  color: #5ba2ff;
  height: 100%;
  animation: ${TextMoveUp} 0.2s linear;
`;

export const MoreButton = styled.div`
  border: 1px #5ba2ff solid;
  padding: 10px;
  margin-top: 30px;
  transition: background-color 0.5s ease;
  transition: color 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #5ba2ff;
    color: white;
  }
`;
