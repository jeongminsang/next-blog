"use client";

import styled from "styled-components";

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

export const PostTitle = styled.h3`
  margin-top: 10px;
  margin-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 580px;
`;

export const PostBody = styled.li`
  display: flex;
  flex-direction: column;
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
  @media screen and (max-width: 800px) {
    margin-top: 0px;
    margin-bottom: 0px;
    margin: 10px;
  }
`;
