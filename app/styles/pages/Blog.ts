"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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

export const SubTitle = styled.h4`
  margin-top: 0px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 100;
`;

export const BlogTitle = styled.h3`
  margin-top: 10px;
  margin-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const PostList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const PostBody = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-5px);
    background-color: var(--hv-cr);
    transition: transform 0.2s ease;
  }
  @media screen and (max-width: 500px) {
    margin-top: 0px;
    margin-bottom: 0px;
    margin: 10px;
    flex-direction: column-reverse;
  }
`;

export const PostContents = styled.div`
  @media screen and (max-width: 800px) {
    max-width: 350px;
  }
`;

export const PostTitle = styled.div`
  margin-bottom: 5px;
  @media screen and (max-width: 500px) {
    margin-top: 5px;
  }
`;

export const PostSubTitle = styled.div`
  font-size: 14px;
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  div {
    display: flex;
    align-items: center;
    margin-right: 5px;
  }
`;

export const ThumbnailImg = styled(Image)`
  object-fit: cover;
  width: 130px;
  height: 63px;
  margin: 0;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    max-height: 250px;
  }
`;
