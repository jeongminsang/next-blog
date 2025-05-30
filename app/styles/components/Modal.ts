"use client";

import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import Image from "next/image";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

interface ModalSectionProps {
  $ismodalopen: string;
}

const ModalOpenMove = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const ModalCloseMove = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.5);
    opacity: 0;
  }
`;

const OverlayFadeIn = keyframes`
  0% {
    background-color: transparent;
  }
  100% {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const OverlayFadeOut = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0.6);
  }
  100% {
    background-color: transparent;
  }
`;

export const MainContainer = styled.div<{ $ismodalopen?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: transparent;
  animation: ${(props) => (props.$ismodalopen ? OverlayFadeIn : OverlayFadeOut)}
    0.2s ease-in-out forwards;
  &.closing {
    animation: ${OverlayFadeOut} 0.3s ease-in-out forwards;
  }
`;


export const ModalSection = styled.section<ModalSectionProps>`
  position: fixed;
  top: 100px;
  width: 500px;
  height: 500px;
  border: 1px none solid;
  background-color: var(--background--cr);
  animation: ${(props) =>
      props.$ismodalopen === "true" ? ModalOpenMove : ModalCloseMove}
    0.3s ease-in-out;
  /* supabase 적용 끝나면 아래로 바꿀 것 */
  /* animation: ${ModalOpenMove}0.3s ease-in-out; */
  opacity: ${(props) => (props.$ismodalopen === "true" ? 1 : 0)};
  transform: scale(${(props) => (props.$ismodalopen === "true" ? 1 : 0.95)});
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  &.closing {
    animation: ${ModalCloseMove} 0.3s ease-in-out forwards;
  }
  @media screen and (max-width: 800px) {
    width: 454.55px;
  }
  @media screen and (max-width: 500px) {
    width: 412px;
  }
`;

export const ChildrenContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  color: white;
  padding: 5px 5px 2px 5px;
  margin: 3px;
  border: none;
  border-radius: 10px;
  background-color: rgba(100, 100, 100, 0.5);
  cursor: pointer;
`;

export const CloseIcn = styled(IoCloseSharp)`
  width: 25px;
  height: 25px;
`;

export const ContentsTitle = styled.h2`
  color: var(--text--color);
  margin-top: 10px;
  margin-bottom: 0px;
`;

export const ContentsSubTitle = styled.p`
  color: grey;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const ProjectStack = styled.div`
  display: flex;
  justify-content: center;
  max-width: 450px;
  flex-wrap: wrap;
  color: white;
`;

export const ProjectPeriod = styled.div`
  display: flex;
  justify-content: center;
  color: var(--text--color);
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const LinkBtns = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LinkBtn = styled.button`
  display: flex;
  background-color: #5ba2ff;
  color: white;
  border: none;
  padding: 10px 20px 10px 20px;
  margin: 10px;
  align-items: center;
  transition: background-color 0.2s ease, color 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: var(--background--cr);
    color: #5ba2ff;
  }
`;

export const GitHubIcn = styled(AiFillGithub)`
  font-size: 15px;
  margin-right: 8px;
`;

export const LinkIcn = styled(LiaExternalLinkAltSolid)`
  font-size: 15px;
  margin-right: 8px;
`;

export const StackTag = styled.div<{ color: string }>`
  /* supabase 적용 끝나면 아래 주석 지울 것 */
  /* border: 1px #5ba2ff solid; */
  border: 1px ${(props) => props.color} solid;
  font-size: 12px;
  padding: 3px 5px 3px 5px;
  margin: 3px;
  border-radius: 5px;
  color: white;
  /* background-color: #5ba2ff; */
  background-color: ${(props) => props.color};
`;

export const Carouseldiv = styled(Slider)`
  display: flex;
  flex-direction: row;
  position: sticky;
  width: 500px;
  height: 300px;
  @media screen and (max-width: 800px) {
    width: 454.55px;
  }
  @media screen and (max-width: 500px) {
    width: 412px;
  }
`;

export const PrevArrowBtn = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
  color: white;
  background-color: rgba(100, 100, 100, 0.5);
  padding: 8px 10px 6px 8px;
  cursor: pointer;
`;

export const LeftIcn = styled(BiLeftArrow)`
  width: 25px;
  height: 25px;
`;

export const NextArrowBtn = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: white;
  background-color: rgba(100, 100, 100, 0.5);
  padding: 8px 8px 6px 10px;
  cursor: pointer;
`;

export const RightIcn = styled(BiRightArrow)`
  width: 25px;
  height: 25px;
`;

export const CarouselImage = styled(Image)`
  object-fit: cover;
  margin: 0;
  width: 500px;
  height: 300px;
`;
