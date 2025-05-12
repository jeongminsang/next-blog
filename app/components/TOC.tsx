"use client";

import CustomLink from "./CustomLink";
import styled from "styled-components";
import { useEffect, useState } from "react";

const TOC = ({ content }: { content: string }) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
      }
    );
    const headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach((heading) => observer.observe(heading));
    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  const getHeadings = (source: string) => {
    const regex = /^(#|##|###) (.*$)/gim;
    if (source.match(regex)) {
      return source.match(regex)?.map((heading: string) => ({
        text: heading.replace(/#/g, ""),
        link: heading
          .replace(/@/g, "")
          .replace("# ", "")
          .replace(/#+/g, "")
          .replace(/ /g, "-")
          .replace(/[+,?]/g, "")
          .toLowerCase(),
        indent: heading.replace("#", "").match(/#/g)?.length,
      }));
    }
    return [];
  };

  const HeadingArr = getHeadings(content);
  return (
    <div>
      {HeadingArr?.map((heading, index) => (
        <div key={index}>
          <CustomLink
            href={"#" + heading.link}
            $isactive={activeId === heading.link}
            $hashcount={heading.indent}
          >
            {heading.text}
          </CustomLink>
        </div>
      ))}
    </div>
  );
};
export default TOC;
