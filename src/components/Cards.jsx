import React from "react";
import Carousel from "react-elastic-carousel";
import Testimonial from "./Testimonial";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
];

const Cards = () => {
  return (
    <div className="my-4">
      <p className="text-center font-extrabold capitalize text-black md:py-10 md:text-3xl py-4 text-xl ">
        <span className="text-transparent bg-gradient-to-tr from-[#249cc5] to-[#21e5ed] via-[#249cc5] bg-clip-text px-2">
          TESTIMONIALS
        </span>
      </p>
      <Carousel
        breakPoints={breakPoints}
        className="max-w-7xl mx-auto"
        itemsToScroll={1}
      >
        <Testimonial count="1" />
        <Testimonial count="2" />
        <Testimonial count="3" />
        <Testimonial count="4" />
        <Testimonial count="5" />
      </Carousel>
    </div>
  );
};

export default Cards;
