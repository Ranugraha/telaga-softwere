import React from "react";

type Props = {
  buttonName: string;
  className?: string;
};

function AccentButtons(props: Props) {
  return (
    <button
      className={
        "w- hover rounded-[30px] border-2 border-accentColors-acecent1 bg-accentColors-acecent1 px-[20px] py-[6px] text-lg font-medium text-white hover:bg-white hover:text-accentColors-acecent1"

        // +(props.className || "px-[20px] py-[11px]")
      }
    >
      {props.buttonName}
    </button>
  );
}

export { AccentButtons };
