"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex items-center justify-between fixed top-0 bg-primary h-[100px] w-full p-10 z-10 max-md:p-3 max-md:flex-col max-md:flex-col-reverse">
      <Nav />
      <Logo />
    </div>
  );
}
