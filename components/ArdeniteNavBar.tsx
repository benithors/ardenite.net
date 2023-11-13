import React from 'react'
import ArdeniteText from "./ArdeniteText";
import ContentContainer from "./ContentContainer";
import NavButton from "./NavButton";
import {FloatingNavStatus} from "./FloatingNav";
import {useRouter} from "next/router";
import Image from "next/image";


interface IProps {
    floatingNavStatus: FloatingNavStatus;
    scroller: any
}

const ArdeniteNavBar = (props: IProps) => {
    const router = useRouter();
    return (
        <>
            <nav
                className={
                    " fixed top-0 left-0 z-50  h-20  w-full flex-row justify-center bg-brand-black-transparent  text-white  md:flex"
                }
            >
                <ContentContainer
                    className={
                        " flex h-full opacity-100 w-full max-w-screen-2xl max-w-screen-xl flex-row items-center md:justify-between"
                    }
                >

                    <button
                        aria-label={"Scroll to the top"}
                        className={"flex flex-row grow md:grow-0 "}
                        onClick={() => {
                            props.scroller.scrollTo("top", {
                                duration: 1500,
                                delay: 100,
                                smooth: true,
                            });
                        }}
                    >

                        <div className={'pt-4 z-50 w-[200px] z-[50] lg:w-[280px] h-fit'}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlSpace="preserve"
                                id="Ebene_2"
                                x={0}
                                y={0}
                                viewBox="0 0 1218.9 425.2"
                                {...props}
                            >
                                <style>{".st0{fill:#00ffd9}.st1{fill:#ff00b5}"}</style>
                                <path
                                    d="m186.13 32.5-12.29-.23L104.91 152l-22.58 4.23-10.72 17.68-8.78 1.91-7.55 9.4 39.34-5.5-76.67 127.43 12.25-3.53 39.57-61.95 23.08-8.48 29.56-59.12 37.33-6.99-.08 32.74 8.56 8.4-.94 179.49 10.36 13.19.28-16.56 14.95-23.71 1.26-119.89-7.07-7.54.04-70.23 241.09-40.49 1.17-.21 14.93-14.94 21.42-4.94 5.47-5.02-285.07 45.06V32.5zm-26.38 44.44.16 68.31-25.12 3.14-6.12-13.19 31.08-58.26z"
                                    className="st0"
                                />
                                <path
                                    d="m324.24 252.01 51.69-48.96v-15.11l-17.47-12.34-131.09 22.01-1.07 19.32 13.65 14.13.19 169.83 10.64-8.91v-10.07l17.86-12.94v-69.73l35.31-31.91 70.6 77.96 17.68-.15 15.3 14.51 16.02.08-99.31-107.72zm-51.33-23.04-.03-.82c-.19-6.19.17-13.06.16-16.16l71.98-11.69v16.43l-76.66 65.67v-48.03l4.55-5.4z"
                                    className="st0"
                                />
                                <path
                                    d="m489.33 82.88-.33 24.35-17.38 17.64-.32 36.11-59.1 57.82v8.47l-29.22 29.75 27.16 31.32h8.74l55.44 56.08 6.84-5.94.16-11.78 15.07-11.78-.52-237.43-6.54 5.39zM469.22 187.8v114.24l-54.56-59.44 54.56-54.8zM633.47 164.58l-8.94 10.43-61.76 11.67-10.32 15.67.22 41.69 38.78-8.15 14.86 8.9 9.14-1.68 11.19 7.58-74.13 16.55v37.53l64.95-11.99 11.98 10.23 12.99-2.22 7.32 8.23-124.74 24.04.4-81.88 5.88-10.46.16-48.59 13.15-23.02 105.48-17.68-7.5 9.84z"
                                    className="st0"
                                />
                                <path
                                    d="m1200.94 120.75-6.9-4.4-11.6 1.41-14.79-8.32-126.56 21.98.63-45.38-6.29 5.39-.45 14.62-17.65 17.84-.43 11.93-38.11 8.33-10.82 12.26-22.06 4.86-8.78 7.84 79.72-15.73-.05 21.99-.05 21.36-.27 115.58-.18 75.64 10.34-11.71.94-14.05 14.52-15.63.59-62.89-.66-135.29zM813.04 135.22v12.61l-18.61 15.63-2.11 169.91-77.96-162.44-6.23-.98-20.63-39.24V95.69l-10.13-16.96-2.43 266.95h4.82l6.72-16.33v-19.16l18.25-27.7v-78.2l29.03 58.42 2.06 26.37 47.53 101.28 14.97-.31.14-7.27 16.42-18.94 1.15-98.26 7-13.03 1.67-124.89zM941.55 278.23v-30.32l-5.73-8-27.7 22.85v-45.44l-22.21-21.58v-11.17l-7.58-6.63v97.34l5.97 7.33v13.43l7.05 5.41 24.8-21.9 1.89 109.28 10.61-8.35V368.2l16.96-16.62v-69.25z"
                                    className="st1"
                                />
                                <path
                                    d="m1170.03 317.86-8.18-5.88-47.52 9.4-10.31-10.74.24-42.93 38.72-6.59 14.78-14.52 9.35-1.04 10.37-12.63-73.44 11.79v-37.54l64.87-13.73 7.3-13.82 7.15-1.25 7.85-10.37-115.55 22.01-.15 80.77 4.95 8.96.08 50.4 15.6 15.75 89.74-20.91 10.67-14.08zM927.63 111.41l-17.84.11-11.17 13.38-11.71-13.71-18.6.22-8.24 11.8.22 17.78 9.38 12.42 7.26-.08 17.18 16.61.16 5.4 4.26 4.26 38.55-38.49.25-18.61-9.7-11.09zm-13 39.33-5.68 5.68-10.47-10.47-10.47 10.47-5.68-5.68 10.47-10.47-10.47-10.47 5.68-5.68 10.47 10.47 10.47-10.47 5.68 5.68-10.47 10.47 10.47 10.47z"
                                    className="st1"
                                />
                            </svg>

                        </div>
                    </button>


                    <div className={"hidden  md:flex h-full h-full flex-row  items-center self-end"}>
                        <NavButton
                            borderColor={"border-transparent"}
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
                            ABOUT

                        </NavButton>

                        <NavButton
                            borderColor={"border-transparent"}
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
                            CONTACT
                        </NavButton>
                        <NavButton
                            borderColor={"border-transparent"}
                            floatingNavStatus={props.floatingNavStatus}
                            buttonType={FloatingNavStatus.NONE}
                            onClick={() => {
                                window.open ('https://shop.ardenite.net/', '_ blank');
                            }}
                        >
                            SHOP
                        </NavButton>
                    </div>
                </ContentContainer>

            </nav>
           {/* <div
                className={
                    " fixed top-[80px]  left-0 z-20  h-20  w-full flex-row justify-center bg-brand-black-transparent  text-white  md:flex"
                }
                >
                <ContentContainer
                    className={
                        " flex h-full  opacity-100 w-full max-w-screen-2xl max-w-screen-xl flex-row items-center justify-center "
                    }
                >

                        <a className={'md:text-lg tracking-wide  font-InterSans text-brand-turquoise' +
                            ' animate-pulse text-center'} href={'https://www.eventim-light.com/at/a/63979355e5a87f05a7362a37/e/64b4d9a05456d72ee17e1410'} target="_blank" rel="noopener noreferrer">


                            <br className={'md:hidden'}/>
                            <span className={'font-extrabold'}>Get Tickets to our next Live Show in Vienna</span>!
                                <br/>
                            <span className={'font-extrabold'}>CLICK HERE</span> to be part of it!
                        </a>
                </ContentContainer>
            </div>
*/}
        </>



    );

}

export default ArdeniteNavBar
