"use client";

import styled from "styled-components";
import Slider from "react-slick";
import Image from "next/image";

export const MainContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const ModalSection = styled.section`
  /* display: flex;
  justify-content: center;
  align-items: center;
  align-content: center; */
  position: fixed;
  top: 100px;
  width: 500px;
  height: 500px;
  border: 1px none solid;
  background-color: var(--background--cr);
`;

export const ChildrenContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentsTitle = styled.h2`
  color: var(--text--color);
`;

export const ContentsSubTitle = styled.p`
  color: grey;
`;

export const ProjectStack = styled.div`
  display: flex;
  justify-content: center;
  max-width: 200px;
  margin-top: 10px;
  flex-wrap: wrap;
  color: white;
`;

export const StackTag = styled.div`
  border: 1px #5ba2ff solid;
  font-size: 12px;
  padding: 3px 5px 3px 5px;
  margin: 3px;
  border-radius: 5px;
  color: white;
  background-color: #5ba2ff;
`;

export const CarouselContainer = styled.div`
  /* display: flex;
  flex-direction: row; */
`;

export const Carouseldiv = styled(Slider)`
  display: flex;
  flex-direction: row;
  position: sticky;
  width: 500px;
  height: 300px;
`;

export const PrevArrowBtn = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
`;

export const NextArrowBtn = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const CarouselImage = styled(Image)`
  object-fit: cover;
  margin: 0;
  width: 500px;
  height: 300px;
`;
