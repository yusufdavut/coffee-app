"use client";
import React from "react";

import { Link } from "react-scroll";

type Props = {};

const menus = [
  {
    id: 1,
    name: "home",
    path: "home",
    offset: -50,
  },
  {
    id: 2,
    name: "about",
    path: "about",
    offset: -50,
  },
  {
    id: 3,
    name: "products",
    path: "products",
    offset: -50,
  },
  {
    id: 4,
    name: "contact",
    path: "contact",
    offset: -50,
  },
];

export default function Nav({}: Props) {
  return (
    <div className="flex justify-between gap-5">
      {menus.map((menu) => (
        <Link
          key={menu.id}
          to={menu.path}
          spy={true}
          smooth={true}
          offset={menu.offset}
          duration={500}
          className="uppercase flex text-base font-bold"
        >
          {menu.name}
        </Link>
      ))}
    </div>
  );
}
