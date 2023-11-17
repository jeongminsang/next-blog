"use client";

import { CarouselContainer, Carouseldiv, PrevArrowBtn, NextArrowBtn, LeftIcn, RightIcn, CarouselImage } from '../styles/components/Modal';
import { projectImgs } from "../libs/ProjectImgs"

interface ProjectNameProps {
  projectname: {
    href: string;
  }[];
}

interface ArrowProps {
  onClick?: () => void;
}


const PrevArrow = (props: ArrowProps) => (
  <PrevArrowBtn onClick={props.onClick}>
    <LeftIcn />
  </PrevArrowBtn>
);
const NextArrow = (props: ArrowProps) => (
  <NextArrowBtn onClick={props.onClick}>
    <RightIcn />
  </NextArrowBtn>
);

const Carousel = (projectname: ProjectNameProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <CarouselContainer>
      <Carouseldiv {...settings}>
        {projectname.projectname.map((image: any, index: number) => (
          <CarouselImage
            key={index}
            src={image.href}
            alt="Carousel Image"
            width={1000}
            height={1000}
            draggable={false}
          />
        ))}
      </Carouseldiv>
    </CarouselContainer>
  );
}

export default Carousel;