import React from "react";

interface IProps {
  children: any;
  className?: string;
  onClick?: () => void;
  ariaLabel: string;
  type: any;
  href?: string;
  backgroundColor?: string;
}

const PopInButton = (props: IProps) => {
  let className =
    "popOutBtn__thumbnail font-bold uppercase w-full  h-full  flex flex-row justify-center items-center  text-xl  " + (!props.backgroundColor ? ' bg-brand-pink  ' : props.backgroundColor);

  return (
    <div className={"popOutBtn h-full w-full max-w-lg  " + props.className}>
      {!props.href ? (
        <button
          type={props.type}
          aria-label={props.ariaLabel}
          onClick={props.onClick}
          className={className}
        >
          {props.children}
        </button>
      ) : (
        <a
          target={"_blank"}
          rel="noreferrer"
          href={props.href}
          aria-label={props.ariaLabel}
          className={className}
        >
          {props.children}
        </a>
      )}
    </div>
  );
};

export default PopInButton;
