"use client";

import CustomLink from "./CustomLink";

const Heading = ({ content }: any) => {
  const getHeadings = (source: string) => {
    const regex = /^(#|##|###) (.*$)/gim;
    if (source.match(regex)) {
      return source.match(regex)?.map((heading: string) => ({
        text: heading.replace('#', '').replace('#', '>').replace('#', '>'),
        link: heading.replace(/ /g, '-').toLowerCase(),
        repo: heading.replace('#', '').replace('#', ''),
        indent: heading.match(/#/g)?.length
        // indent: heading.replace('#', '').replace('#', '>').replace('#', '>')
        // indent: heading.match(/##/g) ? '>' : heading.match(/###/g) ? '>>' : '',
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
          <CustomLink href={heading.link}>{heading.text}</CustomLink>
        </div>
      ))}
    </div>
  )

}
export default Heading;