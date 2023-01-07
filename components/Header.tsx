import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AccentButtons } from "./Buttons";
import { LogoImage } from "./images";
import { NavbarMenu } from "./NavbarMenu";

type Props = {};

export default function TryError({}: Props) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    // <div className={`active ${show && "hidden"} `}>
    <div className="">
      <section
        id="hero"
        className={
          visible
            ? " fixed top-0 flex h-20 w-full flex-row items-center justify-between bg-white px-[80px]  shadow-md transition-all"
            : "fixed top-[-80px] flex h-20 w-full flex-row items-center justify-between bg-white px-[80px] shadow-md transition-all"
        }
      >
        <Image className="h-8 w-48" src={LogoImage} alt="" />

        <ul className="flex flex-row  space-x-[32px] font-semibold">
          <NavbarMenu href="/" menuName="Home" />
          <NavbarMenu href="/" menuName="About" />
          <NavbarMenu href="/" menuName="Services" />
          <NavbarMenu href="/" menuName="Prices" />
          <NavbarMenu href="/" menuName="Testimonial" />
          <li>
            <AccentButtons buttonName="Book A Demo" />
          </li>
        </ul>
      </section>
    </div>
  );
}
