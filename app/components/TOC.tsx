"use client";

import CustomLink from "./CustomLink";
import styled from "styled-components";

const TOC = ({ content }: { content: string }) => {
  const getHeadings = (source: string) => {
    const regex = /^(#|##|###) (.*$)/gim;
    if (source.match(regex)) {
      return source.match(regex)?.map((heading: string) => ({
        text: heading.replace('#', '').replace('#', '>').replace('#', '>'),
        link: heading.replace('# ', '').replace('#', '').replace('#', '').replace(/ /g, '-').toLowerCase().replace('?', ''),
        indent: heading.match(/#/g)?.length
      }));
    }
    return [];
  };

  const HeadingArr = getHeadings(content);
  return (
    <div>
      <TocHeader>목차</TocHeader>
      {HeadingArr?.map((heading, index) => (
        <div key={index}>
          <CustomLink href={'#' + heading.link}>{heading.text}</CustomLink>
        </div>
      ))}
    </div>
  )

}
export default TOC;

const TocHeader = styled.div`
  padding-bottom: 5px;
  border-bottom: 1px solid grey;
`;