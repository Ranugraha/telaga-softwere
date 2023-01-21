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
      <Link href={props.href} className="flex flex-row">
        {props.menuName}
        <DropdownIcon className="m-2" />
      </Link>
    </li>
  );
}

export { NavbarMenu };
