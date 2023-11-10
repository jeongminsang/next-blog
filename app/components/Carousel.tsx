"use client";

import { CarouselContainer, Carouseldiv, PrevArrowBtn, NextArrowBtn, LeftIcn, RightIcn, CarouselImage } from '../styles/components/Modal';
import { projectImgs } from "../libs/ProjectImgs"

interface ProjectNameProps {
  projectname: string;
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

  const findProjectIndex = (projectName: string) => {
    for (let i = 0; i < projectImgs.length; i++) {
      if (projectImgs[i].projectName === projectName) {
        return i;
      }
    }
    return projectImgs.length;
  }

  return (
    <CarouselContainer>
      <Carouseldiv {...settings}>
        {projectImgs[findProjectIndex(projectname.projectname)].carouselimage.map((image, index: number) => (
          <CarouselImage
            key={index}
            src={image}
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