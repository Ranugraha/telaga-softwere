import Image from "next/image";
import React from "react";
import { AccentButtons } from "./Buttons";
import { HeroFoto } from "./images";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="flex h-screen flex-row content-center items-center">
      <div>
        <h1 className="lead-[60px] text-[50px] font-bold ">
          Maximize Your IT Investment
        </h1>
        <p className="leading- text-[20px]">
          We will help you to audit, manage, automate and secure your entire
          business.{" "}
          <span className="font-bold">
            Schedule a demo with our specialists.
          </span>
        </p>
        <AccentButtons buttonName="Read More" />
      </div>
      {/* Background */}
      <div>
        <Image src={HeroFoto} alt="" />
      </div>
    </div>
  );
}
