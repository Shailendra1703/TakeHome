import React from "react";
import { hero } from "../assets/index.js";

const Hero = () => {
  return (
    <section className="h-[100vh] bg-black" id="hero">
      <div className="grid max-w-7xl px-4 md:py-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-12 lg:grid-cols-12 h-full">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-3xl pb-8 md:-mt-20  sm:text-[80px] text-[45px] z-10 tracking-tight font-extrabold leading-none  inline-block text-white ">
            DIVE INTO THE <br />
            <span className="text-transparent bg-gradient-to-tr from-[#249cc5] to-[#21e5ed] via-[#249cc5] bg-clip-text">
              MINDS
            </span>{" "}
            OF YOUR
            <br />
            <span className="text-transparent bg-gradient-to-tr from-[#249cc5] to-[#21e5ed] via-[#249cc5] bg-clip-text">
              COUSTOMERS
            </span>
          </h1>

          <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 text-sm lg:text-[15px] pr-5 font-poppins">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            iure ducimus sit neque alias facilis tempore perferendis debitis.
            Sed nam architecto quidem, facilis eos, esse in quia iste assumenda
            maxime deleniti asperiores quos est eum ipsum magnam, ducimus
            aliquam praesentium?
          </p>

          <a
            href=""
            className="inline-flex  font-poppins items-center justify-center md:px-8 py-1.5 md:py-3 px-4 text-base font-medium mt-3 sm:mt-0 ml-2 sm:ml-0
            text-center text-white border border-[#249cc5] hover:bg-[#21e5ed] hover:text-black"
          >
            Live Demo
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={hero}
            alt="mockup"
            className="h-full  -translate-x-20 scale-150"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
