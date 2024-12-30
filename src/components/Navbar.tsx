import React from "react";
import Image from "next/image";
import Logo from "@/images/logo.png";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className=" bg-white  text-red-400 flex items-center p-2">
      <a href="/">
        <div className=" flex items-center">
          <Image src={Logo} width={50} height={50} alt="Logo" />
          <p className=" text-3xl">fasterwork</p>
        </div>
      </a>
    </div>
  );
}
