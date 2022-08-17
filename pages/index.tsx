import React, {useState} from 'react'
import {NextPage} from "next";
import CrossFade from "../components/CrossFade";
import ArdeniteHeader from "../components/ArdeniteHeader";
import {FloatingNavStatus} from "../components/FloatingNav";
import ArdeniteOutlineButton from "../components/ArdeniteOutlineButton";
import ContentContainer from "../components/ContentContainer";
import ArdeniteHeading from "../components/ArdeniteHeading";


const Home: NextPage = () => {

    const Scroll = require("react-scroll");
    let scroller = Scroll.scroller;


    const [floatingNavStatus, setFloatingNavStatus] = useState<FloatingNavStatus>(
        FloatingNavStatus.TOP
    );
    return (
        <>

            <div className={"flex flex-col items-center w-screen h-full "}>
                <ArdeniteHeader floatingNavStatus={floatingNavStatus} scroller={scroller}/>
                <CrossFade>
                    <div className={"w-screen  flex flex-col items-center h-full absolute z-10 "}>

                        <ContentContainer className={"mt-24 h-full  flex flex-col-reverse   w-full"}>

                            <div className={'flex flex-row  items-center w-full h-1/3  justify-center h-full'}>
                                <ArdeniteHeading></ArdeniteHeading>
                            </div>
                        </ContentContainer>
                    </div>
                </CrossFade>
                <ContentContainer className={"h-full flex space-y-8 md:space-y-0  flex-col  md:flex-row items-center w-full  md:w-full lg:w-full   space-x-5 justify-center lg:space-x-7 pt-8  md:pt-0 md:-translate-y-[36px]"}>

                    <ArdeniteOutlineButton link={"mailto:office@ardenite.net?subject=Order"} title={"LISTEN NOW"} className={"lightBoxPink text-pink bg-brand-black "}/>
                    <ArdeniteOutlineButton link={"mailto:office@ardenite.net?subject=Order"} title={"WATCH NOW"} className={"lightBoxPink text-pink bg-brand-black "}/>
                    <ArdeniteOutlineButton link={"mailto:office@ardenite.net?subject=Order"} title={"BUY NOW"} className={"lightBoxPink text-pink bg-brand-black "}/>
                </ContentContainer>


            </div>


        </>
    );
};

export default Home;
