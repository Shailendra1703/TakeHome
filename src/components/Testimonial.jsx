import React from "react";

const Testimonial = ({ count }) => {
  return (
    <div class="mb-12 md:mb-0 max-w-[300px]">
      <div class="flex justify-center mb-6">
        <img
          src={`https://mdbootstrap.com/img/Photos/Avatars/img%20(${count}).jpg`}
          class="rounded-full shadow-lg w-32"
        />
      </div>
      <h5 class="text-lg font-bold mb-4">Maria Smantha</h5>
      <h6 class="font-medium text-[#249cc5] mb-4">Web Developer</h6>
      <p class="mb-4">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-left"
          class="w-6 pr-2 inline-block"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
          ></path>
        </svg>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
        officiis hic tenetur quae quaerat ad velit ab hic tenetur.
      </p>
      <ul class="flex justify-center mb-0"></ul>
    </div>
  );
};

export default Testimonial;
