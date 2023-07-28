'use client';

import { useEffect, useState } from 'react';
import styled from "styled-components";

export default function ReadingProgressBar() {
  const [width, setWidth] = useState(0);

  const scrollHeight = () => {
    const element = document.documentElement;
    const ScrollTop = element.scrollTop || document.body.scrollTop;
    const ScrollHeight = element.scrollHeight || document.body.scrollHeight;
    const percent = (ScrollTop / (ScrollHeight - element.clientHeight)) * 100;
    setWidth(percent);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeight);
    return () => window.removeEventListener('scroll', scrollHeight);
  }, []);

  return (
    <ProgressBar width={width} />
  );
}

const ProgressBar = styled.div<{ width: number }>`
  position: fixed;
  z-index: 50;
  top: 0px;
  left: 0px;
  height: 3px;
  border-radius: 0px 2px 0px 0px;
  background: linear-gradient(90deg, #b8d7ff, #5ba2ff);
  width: ${(props) => (props.width)}%;
`;
