import React from "react";

type Props = {
  buttonName: string;
  className?: string;
};

function AccentButtons(props: Props) {
  return (
    <button
      className={
        "rounded-[30px] bg-accentColors-acecent1 px-6 py-3 text-white transition-all hover:border hover:border-accentColors-acecent1 hover:bg-white hover:text-accentColors-acecent1" +
        (props.className || "")
      }
    >
      {props.buttonName}
    </button>
  );
}

export { AccentButtons };
