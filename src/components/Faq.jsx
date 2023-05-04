import React, { useState } from "react";

const data = [
  {
    id: 1,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique vulputate ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique vulputate . In urna turpis, vehicula eget felis quis, tristique facilisis augue. Proin at enim eget urna maximus tristique sed cursus lacus. Fusce non interdum urna, eu ultricies sem. Pellentesque vitae lacus eu metus rhoncus tempor posuere eget ex. Curabitur euismod egestas turpis nec ultricies. Praesent quis justo laoreet, facilisis neque eu, eleifend leo. Curabitur pharetra odio nec sem rhoncus egestas.",
  },
  {
    id: 2,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique vulputate ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique vulputate . In urna turpis, vehicula eget felis quis, tristique facilisis augue. Proin at enim eget urna maximus tristique sed cursus lacus. Fusce non interdum urna, eu ultricies sem. Pellentesque vitae lacus eu metus rhoncus tempor posuere eget ex. Curabitur euismod egestas turpis nec ultricies. Praesent quis justo laoreet, facilisis neque eu, eleifend leo. Curabitur pharetra odio nec sem rhoncus egestas.",
  },
  {
    id: 3,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique vulputate ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique vulputate . In urna turpis, vehicula eget felis quis, tristique facilisis augue. Proin at enim eget urna maximus tristique sed cursus lacus. Fusce non interdum urna, eu ultricies sem. Pellentesque vitae lacus eu metus rhoncus tempor posuere eget ex. Curabitur euismod egestas turpis nec ultricies. Praesent quis justo laoreet, facilisis neque eu, eleifend leo. Curabitur pharetra odio nec sem rhoncus egestas.",
  },
  {
    id: 4,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique vulputate ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique vulputate . In urna turpis, vehicula eget felis quis, tristique facilisis augue. Proin at enim eget urna maximus tristique sed cursus lacus. Fusce non interdum urna, eu ultricies sem. Pellentesque vitae lacus eu metus rhoncus tempor posuere eget ex. Curabitur euismod egestas turpis nec ultricies. Praesent quis justo laoreet, facilisis neque eu, eleifend leo. Curabitur pharetra odio nec sem rhoncus egestas.",
  },
];

const Accordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex justify-center mx-2">
      <div className="m-2 md:px-5  pl-2 py-3 border border-[#249cc5] sm:w-3/4 w-full mx-auto rounded-lg ">
        <h1
          className="sm:font-bold font-semibold flex justify-between items-center cursor-pointer px-2 md:px-0 text-sm md:text-md"
          onClick={() => setShow(!show)}
        >
          ❔ {question}
          <span className="cursor-pointer text-xl font-bold">
            {show ? "-" : "+"}
          </span>
        </h1>
        <div className="overflow-hidden mr-10 px-2 md:px-0 text-sm md:text-md">
          {
            <p
              className={
                show
                  ? "pt-2 transition-all ease-in duration-100  h-full "
                  : "pt-0 transition-all ease-in h-0"
              }
            >
              {show && answer}
            </p>
          }
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <div className="md:mb-20 mb-8">
      <p className="text-center font-extrabold capitalize text-black md:py-10 md:text-3xl py-4 text-xl">
        FAQ
        <span className="text-transparent bg-gradient-to-tr from-[#249cc5] to-[#21e5ed] via-[#249cc5] bg-clip-text px-2">
          SECTION
        </span>
      </p>
      {data.map((item) => {
        const { id } = item;
        return <Accordian key={id} {...item} />;
      })}
    </div>
  );
};

export default Faq;
