import React from "react";
import PageTitle from "./PageTitle";

import coffeeIMG from "../public/coffee_v2.jpg";
import Image from "next/image";

type Props = {};

const productData = [
  {
    id: 1,
    name: "filter coffee",
    image: coffeeIMG,
    short: "$3.15",
    tall: "$3.50",
    grande: "$4.00",
  },
  {
    id: 2,
    name: "caffe latte",
    image: coffeeIMG,
    short: "$5.05",
    tall: "$5.75",
    grande: "$6.25",
  },
  {
    id: 3,
    name: "capuccino",
    image: coffeeIMG,
    short: "$3.45",
    tall: "$4.10",
    grande: "$4.70",
  },
  {
    id: 4,
    name: "white chocalatte mocha",
    image: coffeeIMG,
    short: "$5.50",
    tall: "$5.80",
    grande: "$6.10",
  },
];

export default function Products({}: Props) {
  return (
    <section
      id="products"
      className="py-16 px-10 bg-products bg-no-repeat bg-cover bg-center w-full h-screen 
      max-md:w-full max-md:p-5 max-md:flex-col max-md:mb-20 max-md:h-auto"
    >
      <PageTitle title="Products" />
      <div className="flex flex-wrap justify-between items-center w-full max-md:flex-nowrap max-md:justify-center max-md:flex-col">
        {productData.map((prod) => (
          <div
            key={prod.id}
            className="bg-white w-[250px] h-auto py-5 flex flex-col 
            justify-center items-center hover:bg-secondary transition-all duration-300 cursor-pointer
            max-md:mb-10 max-lg:mb-10 max-xl:w-[200px]"
          >
            <Image
              src={prod.image}
              alt={prod.name}
              className="w-[150px] h-[150px] rounded-full"
            />
            <p className="font-bold text-lg text-center text-primary capitalize min-h-16 flex items-center">
              {prod.name}
            </p>
            <div className="flex items-center justify-between w-full px-3">
              <div className="flex flex-col items-center justify-center">
                <p className="text-black text-lg font-bold">Short</p>
                <p className="text-gray-600 italic">{prod.short}</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-black text-lg font-bold">Tall</p>
                <p className="text-gray-600 italic">{prod.tall}</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-black text-lg font-bold">Grande</p>
                <p className="text-gray-600 italic">{prod.grande}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
