"use client";

import CustomLink from "./CustomLink";

const TOC = ({ content }: any) => {
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
  console.log(getHeadings(content))
  return (
    <div>
      {HeadingArr?.map((heading) => (
        <div>
          <CustomLink href={'#' + heading.link}>{heading.text}</CustomLink>
        </div>
      ))}
    </div>
  )

}
export default TOC;