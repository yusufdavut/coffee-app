import Image from "next/image";
import React from "react";

import aboutIMG from "../public/about.jpg";

type Props = {};

export default function About({}: Props) {
  return (
    <section
      id="about"
      className="py-16 px-10 w-full h-screen flex justify-between items-center
      max-md:p-5 max-md:flex-col max-md:justify-start max-md:h-auto max-md:mb-20 max-lg:h-auto max-lg:mb-20 max-lg:p-10 max-lg:gap-5"
    >
      <div className="flex w-1/2 max-md:w-full max-md:mb-7">
        <Image src={aboutIMG} alt="About Image" />
      </div>
      <div className="flex flex-col w-1/2 max-md:w-full">
        <h3 className="mb-5">About Us</h3>
        <p className="max-md:text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla
          libero possimus cupiditate totam minus quae iste quam, deleniti
          placeat nihil quibusdam eaque blanditiis aliquam quod magnam.
          Corporis, enim dolores!
        </p>
      </div>
    </section>
  );
}
