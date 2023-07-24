"use client";

import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    background-color: #ff7f50;
    transition: transform 0.2s ease;
  }
`;
