import React from "react";

interface IProps {
  children: any;
  className?: string;
}

const ContentContainer = (props: IProps) => {
  return (
    <div className={"max-w-screen-xl px-6 sm:px-8 md:px-14 " + props.className}>
      {props.children}
    </div>
  );
};

export default ContentContainer;
