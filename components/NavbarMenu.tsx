import Link from "next/link";
import React from "react";
import { DropdownIcon } from "./images/icon";

type Props = {
  menuName: any;
  href: string;
};

function NavbarMenu(props: Props) {
  return (
    <li className="flex flex-row items-center ">
      <Link href={props.href}>{props.menuName}</Link>
      <DropdownIcon className="m-2" />
    </li>
  );
}

export { NavbarMenu };
