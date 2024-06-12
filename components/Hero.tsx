"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Link } from "react-scroll";

export default function Hero() {
  const router = useRouter();
  return (
    <div
      id="home"
      className="flex items-center justify-between py-16 px-10 mt-[120px] max-md:w-full max-md:p-5 max-md:flex-col max-md:mb-20 max-lg:p-10"
    >
      <div className="flex flex-col">
        <h2 className="text-primary uppercase max-md:text-center">
          the best coffee varieties
        </h2>
        <h3 className="text-secondary mb-16 max-md:text-center">for you</h3>
        <p className="w-[600px] mb-7 max-md:w-full max-md:text-justify max-lg:w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          laudantium culpa perspiciatis numquam ullam! Sit, iusto recusandae!
          Eos dolorum ex quidem sapiente provident aperiam obcaecati neque vitae
          tempore, illum excepturi.
        </p>
        <Button variant="primary" size="lg" className="w-[170px]">
          <Link
            to="products"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="uppercase flex text-base font-bold hover:text-white"
          >
            Explore
          </Link>
        </Button>
      </div>
      <div className="bg-hero bg-no-repeat bg-cover rounded-full w-[400px] h-[400px] max-md:hidden max-lg:w-[300px] max-lg:h-[300px]"></div>
    </div>
  );
}
