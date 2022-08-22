import React, {useEffect, useState} from "react";
import NavButton from "./NavButton";
import * as Scroll from "react-scroll";
import {ArrowUpCircle} from "react-feather";
import {getOpacityFromBottomTransition} from "../lib/Transitions";
import {useInView} from "react-intersection-observer";

interface IProps {
    floatingNavStatus: FloatingNavStatus;
    scroller: any
    showShopInfo:any;
}

export enum FloatingNavStatus {
    TOP = "start",
    ABOUT = "about",
    CONTACT = "contact",
    NONE = "none",
}

const FloatingNav = (props: IProps) => {
    const [didScroll, setDidScroll] = useState(false);
    useEffect(() => {
        let previousScrollYPosition = window.scrollY;

        const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
            Math.abs(currentScrollYPosition - previousScrollYPosition) > 0;


        const updateScrollDirection = () => {
            const currentScrollYPosition = window.scrollY;

            if (scrolledMoreThanThreshold(currentScrollYPosition)) {

                setDidScroll(true)
            }
        };

        const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <div
            className={
                "pointer-events-none fixed bottom-0  z-50 mb-4 block w-full md:hidden "
            }
        >
            <div className={"flex w-full flex-col items-center "}>
                <div

                    className={
                        "pointer-events-auto flex h-14 w-11/12 flex-row justify-around border-[1px] border-gray-700  bg-brand-black  text-lg font-extrabold text-white sm:w-3/4 sm:text-md  md:text-xl" +

                        getOpacityFromBottomTransition(didScroll)
                    }
                >
                    <NavButton
                        floatingNavStatus={FloatingNavStatus.NONE}
                        borderColor={"border-brand-black"}
                        onClick={() => {
                            props.scroller.scrollTo("top", {
                                duration: 1500,
                                delay: 100,
                                smooth: true,
                            });
                        }}
                        buttonType={FloatingNavStatus.TOP}
                    >
                        <ArrowUpCircle className={"stroke-2"}/>
                    </NavButton>

                    <NavButton
                        borderColor={"border-brand-black"}
                        floatingNavStatus={props.floatingNavStatus}
                        buttonType={FloatingNavStatus.ABOUT}
                        onClick={() => {
                            props.scroller.scrollTo("about", {
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
                        buttonType={FloatingNavStatus.CONTACT}
                        onClick={() => {
                            props.scroller.scrollTo("contact", {
                                duration: 1500,
                                delay: 100,
                                smooth: true,
                            });
                        }}
                    >
                        Contact
                    </NavButton>
                    <NavButton
                        borderColor={"border-brand-black"}
                        floatingNavStatus={props.floatingNavStatus}
                        buttonType={FloatingNavStatus.NONE}
                        onClick={() => {
                         props.showShopInfo();
                        }}
                    >
                        Shop
                    </NavButton>

                </div>
            </div>
        </div>
    );
};

export default FloatingNav;
