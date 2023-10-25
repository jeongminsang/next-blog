"use client";

import { CarouselContainer, Carouseldiv, PrevArrowBtn, NextArrowBtn, CarouselImage } from '../styles/components/Modal';

const PrevArrow = (props: any) => (
  <PrevArrowBtn onClick={props.onClick}>
    Previous
  </PrevArrowBtn>
);
const NextArrow = (props: any) => (
  <NextArrowBtn onClick={props.onClick}>
    Next
  </NextArrowBtn>
);

const Carousel = (images: any) => {
  console.log(images)
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
        {images.images.map((image: any) => (
          <CarouselImage
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