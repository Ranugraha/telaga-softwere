import Link from "next/link";
import React, { useState } from "react";
import { DropdownIcon } from "./images/icon";

type Props = {
  menuName: any;
  href: string;
};

function NavbarMenu(props: Props) {
  const [state, setState] = useState(false);
  const toogle = () => {
    setState(!state);
  };
  return (
    <li className="flex flex-row items-center ">
      <button onClick={toogle} className="">
        <Link href={props.href} className="flex flex-row transition">
          {props.menuName}

          <DropdownIcon
            className={
              state
                ? "m-2 transition duration-500"
                : "t m-2 rotate-180 transition duration-500"
            }
          />
        </Link>
      </button>
      <h1 className={state ? "hidden" : ""}>read</h1>
    </li>
  );
}

export { NavbarMenu };
