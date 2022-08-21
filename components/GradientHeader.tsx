import React from "react";

interface IProps {
  children: any;
}

const GradientHeader = (props: IProps) => {
  return (
    <h1
      className={
        "mt-4  bg-gradient-to-l from-brand-pink to-brand-turquoise  bg-clip-text font-mono text-xl  font-extrabold text-transparent text-white lg:mt-8 "
      }
    >
      {props.children}
    </h1>
  );
};

export default GradientHeader;
