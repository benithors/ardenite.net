import React from "react";
import NavButton from "./NavButton";
import * as Scroll from "react-scroll";
import { ArrowUpCircle } from "react-feather";
import { getOpacityFromBottomTransition } from "../lib/Transitions";
import { useInView } from "react-intersection-observer";

interface IProps {
  floatingNavStatus: FloatingNavStatus;
  scroller: any
}

export enum FloatingNavStatus {
  TOP = "start",
  PACKAGES = "packages",
  WORKSHOPS = "workshops",
  TRAININGS = "trainings",
  ABOUT = "about",
  CONTACT = "contact",
  NONE = "none",
}

const FloatingNav = (props: IProps) => {
  // Somewhere else, even another file

  const floatingNavInView = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
  });
  return (
    <div
      className={
        "pointer-events-none fixed bottom-0  z-50 mb-4 block w-full md:hidden "
      }
    >
      <div className={"flex w-full flex-col items-center "}>
        <div
          ref={floatingNavInView.ref}
          className={
            "pointer-events-auto flex h-14 w-11/12 flex-row justify-around border-[1px] border-gray-700  bg-brand-black font-mono text-[0.7rem] font-extrabold text-white sm:w-3/4 sm:text-md  md:text-xl" +
            " delay-1000 " +
            getOpacityFromBottomTransition(floatingNavInView.inView)
          }
        >
          <NavButton
            floatingNavStatus={FloatingNavStatus.NONE}
            borderColor={"border-brand-black"}
            onClick={() => {
              props.scroller.scrollTo("topScrollToElement", {
                duration: 1500,
                delay: 100,
                smooth: true,
              });
            }}
            buttonType={FloatingNavStatus.TOP}
          >
            <ArrowUpCircle className={"stroke-2"} />
          </NavButton>

          <NavButton
              borderColor={"border-brand-black"}
              floatingNavStatus={props.floatingNavStatus}
              buttonType={FloatingNavStatus.PACKAGES}
              onClick={() => {
                props.scroller.scrollTo("packagesScrollToElement", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                });
              }}
          >
            Packages
          </NavButton>


          <NavButton
              borderColor={"border-brand-black"}
              floatingNavStatus={props.floatingNavStatus}
              buttonType={FloatingNavStatus.ABOUT}
              onClick={() => {
                props.scroller.scrollTo("aboutScrollToElement", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                });
              }}
          >
            About
          </NavButton>
          <NavButton
            borderColor={"border-brand-black"}
            floatingNavStatus={props.floatingNavStatus}
            buttonType={FloatingNavStatus.TRAININGS}
            onClick={() => {
              props.scroller.scrollTo("trainingsScrollToElement", {
                duration: 1500,
                delay: 100,
                smooth: true,
              });
            }}
          >
            Trainings
          </NavButton>

          <NavButton
              borderColor={"border-brand-black"}
              floatingNavStatus={props.floatingNavStatus}
              buttonType={FloatingNavStatus.WORKSHOPS}
              onClick={() => {
                props.scroller.scrollTo("workshopsScrollToElement", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                });
              }}
          >
            Workshops
          </NavButton>



          <NavButton
            borderColor={"border-brand-black"}
            floatingNavStatus={props.floatingNavStatus}
            buttonType={FloatingNavStatus.CONTACT}
            onClick={() => {
              props.scroller.scrollTo("contactScrollToElement", {
                duration: 1500,
                delay: 100,
                smooth: true,
              });
            }}
          >
            Contact
          </NavButton>
        </div>
      </div>
    </div>
  );
};

export default FloatingNav;
