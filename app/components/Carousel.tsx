"use client";

import { CarouselContainer, Carouseldiv, PrevArrowBtn, NextArrowBtn, LeftIcn, RightIcn, CarouselImage } from '../styles/components/Modal';

interface ImageFile {
  file: {
    url: string;
  };
}

interface CarouselImgProps {
  images: ImageFile[];
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

const Carousel = (images: CarouselImgProps) => {
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
        {images.images.map((image, index: number) => (
          <CarouselImage
            key={index}
            src={image.file.url}
            alt="cover image"
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