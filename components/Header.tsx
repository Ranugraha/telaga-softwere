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
            ? "shadow-[0px 5px 8px rgb(0 0 0 / 3%)] fixed top-0 z-10 flex w-full items-center bg-sistemBackground-primary transition-all"
            : "shadow-[0px 5px 8px rgb(0 0 0 / 3%)] fixed top-[-80px] z-10 flex w-full items-center bg-sistemBackground-primary transition-all"
        }
      >
        <div className="relative mx-20 flex h-20 w-full items-center justify-between 2xl:mx-36">
          <Image className="h-8 w-48" src={LogoImage} alt="" />

          <ul className="flex flex-row  space-x-[32px] font-semibold">
            <NavbarMenu href="/" menuName="Home" />
            <NavbarMenu href="/" menuName="About" />
            <NavbarMenu href="/" menuName="Services" />
            <NavbarMenu href="/" menuName="Prices" />
            <NavbarMenu href="/" menuName="Testimonial" />
            <li>
              <AccentButtons buttonName="Book A Demo" className="" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
