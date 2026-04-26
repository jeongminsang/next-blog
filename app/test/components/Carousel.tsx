"use client";

import Slider from "react-slick";
import Image from "next/image";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

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
  <div
    onClick={props.onClick}
    className="absolute bottom-0 left-0 z-[99] text-white bg-gray-500/50 px-[10px] py-[8px] cursor-pointer"
  >
    <BiLeftArrow className="w-[25px] h-[25px]" />
  </div>
);
const NextArrow = (props: ArrowProps) => (
  <div
    onClick={props.onClick}
    className="absolute bottom-0 right-0 z-[99] text-white bg-gray-500/50 px-[10px] py-[8px] cursor-pointer"
  >
    <BiRightArrow className="w-[25px] h-[25px]" />
  </div>
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
    <Slider
      {...settings}
      className="flex flex-row sticky w-[500px] h-[300px] md:w-[454.55px] sm:w-[412px]"
    >
      {projectImages.map((image, index: number) => (
        <Image
          key={index}
          src={image.image}
          alt="Carousel Image"
          width={1000}
          height={1000}
          draggable={false}
          priority
          className="object-cover m-0 w-[500px] h-[300px]"
        />
      ))}
    </Slider>
  );
};

export default Carousel;
