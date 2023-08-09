"use client";

import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

export const PostSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const PostTitle = styled.h1`
  display: flex;
  font-size: 40px;
  justify-content: center;
  padding: 10px;
  @media screen and (max-width: 800px) {
    font-size: 30px;
    width: 100%;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: center;
`;

export const PostContents = styled.div`
  padding: 10px;
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
    max-height: 500px;
    object-fit: contain;
  }
  a {
    color: #5ba2ff;
  }
  li {
    margin-left: 20px;
  }
`;

export const TagAside = styled.div`
  width: 280px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const TOCAside = styled.aside`
  position: sticky;
  top: 230px;
  width: 240px;
  height: 100%;
  margin: 10px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  div {
    margin-bottom: 5px;
    a {
      border-radius: 5px;
      padding: 3px;
      &:hover {
        background-color: var(--hv-cr);
      }
    }
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const GiscusContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`;
