import Image from "next/image";
import React from "react";

import LogoSVG from "../public/logo.svg";

type Props = {};

export default function Logo({}: Props) {
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-white mr-5">Coffee Shop</h3>
      <Image src={LogoSVG} alt="Logo" width={35} height={35} />
    </div>
  );
}
