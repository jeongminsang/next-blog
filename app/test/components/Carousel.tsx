"use client";

import {
  Carouseldiv,
  PrevArrowBtn,
  NextArrowBtn,
  LeftIcn,
  RightIcn,
  CarouselImage,
} from "../../styles/components/Modal";

interface ProjectImages {
  projectImages: {
    id: number;
    image: string;
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

const Carousel = ({ projectImages }: ProjectImages) => {
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
    <Carouseldiv {...settings}>
      {projectImages.map((image, index: number) => (
        <CarouselImage
          key={index}
          src={image.image}
          alt='Carousel Image'
          width={1000}
          height={1000}
          draggable={false}
          priority
        />
      ))}
    </Carouseldiv>
  );
};

export default Carousel;
