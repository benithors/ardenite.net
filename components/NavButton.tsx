import React from "react";
import { FloatingNavStatus } from "./FloatingNav";

interface IProps {
  children: any;
  onClick: () => void;
  floatingNavStatus: FloatingNavStatus;
  buttonType: FloatingNavStatus;
  borderColor?: string;
}

const NavButton = (props: IProps) => {
  return (
    <button
      aria-label={"Scroll to " + props.buttonType}
      onClick={props.onClick}
      className={
        "h-full transition-colors  hover:text-brand-pink" +
        " border-b-4 px-1 hover:border-brand-pink sm:px-6 " +
        (props.floatingNavStatus === props.buttonType
          ? " border-brand-pink text-brand-pink "
          : props.borderColor)
      }
    >
      <p
        className={
          " flex h-full w-full flex-col justify-center transition-transform hover:-translate-y-1 " +
          (props.floatingNavStatus === props.buttonType && " -translate-y-1 ")
        }
      >
        {props.children}
      </p>
    </button>
  );
};

export default NavButton;
