import React, { useState } from "react";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <svg
      width="29"
      height="19"
      viewBox="0 0 29 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1C0 0.447715 0.447715 0 1 0H28C28.5523 0 29 0.447715 29 1C29 1.55228 28.5523 2 28 2H1C0.447716 2 0 1.55228 0 1Z"
        fill="#D9D9D9"
      />
      <path
        d="M0 9C0 8.44772 0.447715 8 1 8H28C28.5523 8 29 8.44772 29 9V9C29 9.55228 28.5523 10 28 10H1C0.447716 10 0 9.55228 0 9V9Z"
        fill="#D9D9D9"
      />
      <path
        d="M0 18C0 17.4477 0.447715 17 1 17H28C28.5523 17 29 17.4477 29 18C29 18.5523 28.5523 19 28 19H1C0.447716 19 0 18.5523 0 18Z"
        fill="#D9D9D9"
      />
    </svg>
  );
};

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-black">
      <div
        className="flex justify-between items-center h-20 max-w-7xl lg:mx-auto font text-white font-poppins md:mx-2  "
        id="navbar"
      >
        <div className="flex flex-row">
          <a href="">
            <img src={logo} class="h-[40px] px-2" alt="Logo" />
          </a>
          <a
            class="self-center sm:text-2xl text-md font-extrabold whitespace-nowrap text-transparent bg-gradient-to-tr from-[#249cc5] to-[#21e5ed] via-[#249cc5] bg-clip-text "
            href=""
          >
            LOGO.
          </a>
        </div>
        <ul className="hidden md:flex text-md">
          <a href="" className="p-4 text-white">
            <li className="py-4">Home</li>
          </a>
          <a href="" className="py-4 pr-4 text-white">
            <li className="py-4">Products</li>
          </a>
          <a href="" className="py-4 pr-4 text-white">
            <li className="py-4">Faq's</li>
          </a>
          <a href="" className="py-4 text-white ">
            <li className="py-4">Earn</li>
          </a>

          <p className="p-4 py-8 cursor-pointer text-white">Contact</p>
        </ul>
        <div className="hidden md:flex">
          {/* <button
            className="inline-flex items-center justify-center sm:px-8 px-2 py-3 text-base font-medium cursor-pointer
            text-center text-white border border-[#249cc5] hover:bg-[#21e5ed] hover:text-black"
          >
            Know More
          </button> */}
          <a
            href=""
            className="inline-flex  font-poppins items-center justify-center md:px-8 py-1.5 md:py-3 px-4 text-base font-medium mt-3 sm:mt-0 ml-2 sm:ml-0
            text-center text-white border border-[#249cc5] hover:bg-[#21e5ed] hover:text-black"
          >
            Live Demo
          </a>
        </div>
        <div onClick={handleNav} className="block text-white md:hidden pr-4">
          {nav ? "X" : <Nav />}
        </div>

        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[45%] h-full border-r  bg-[#000300] ease-in-out duration-500 z-100"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
          style={{ zIndex: "1000" }}
        >
          <h1 className="w-full text-3xl font-bold text-white m-4 flex flex-row justify-around mx-2">
            <span class="self-center text-xl font-semibold whitespace-nowrap ">
              <a href="#">LOGO.</a>
            </span>
            <button className=" text-md" onClick={handleNav}>
              X
            </button>
          </h1>
          <li className="p-4 border-b border-gray-600">
            <a href="">Home</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#">Products</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#">Faq's</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#">Earn</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <p className="">contact</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
