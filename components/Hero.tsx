import Image from "next/image";
import React from "react";
import { AccentButtons } from "./Buttons";
import { HeroFoto } from "./images";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className=" mx-20 flex h-screen flex-row content-center items-center justify-around pt-[80px] 2xl:mx-36">
      <div className="w-max-[558px] pl-[24px]">
        <h1 className="lead-[60px] pb-4 text-[50px] font-bold text-textcolor-primary">
          Maximize Your IT <br />
          Investment
        </h1>
        <p className="w-[80%] pb-10 text-xl text-textcolor-brown">
          We will help you to audit, manage, automate and secure your entire
          business.
          <br />
          <span className=" font-bold text-labelColor-primary">
            Schedule a demo with our specialists.
          </span>
        </p>
        <AccentButtons buttonName="Read More " />
      </div>
      {/* Background */}
      <div>
        <Image src={HeroFoto} alt="" className="h-auto w-[564px] " />
      </div>
    </div>
  );
}
