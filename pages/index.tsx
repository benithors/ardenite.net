import React, {useState} from 'react'
import {NextPage} from "next";
import CrossFade from "../components/CrossFade";
import ArdeniteNavBar from "../components/ArdeniteNavBar";
import {FloatingNavStatus} from "../components/FloatingNav";
import ArdeniteOutlineButton from "../components/ArdeniteOutlineButton";
import ContentContainer from "../components/ContentContainer";
import ArdeniteHeading from "../components/ArdeniteHeading";
import Image from "next/image";
import Backstabber from '../public/static/images/backstabber.png';
import {ArrowUpRight} from "react-feather";
import ArdeniteEntry from "../components/ArdeniteEntry";

const Home: NextPage = () => {

    const Scroll = require("react-scroll");
    let scroller = Scroll.scroller;


    const [floatingNavStatus, setFloatingNavStatus] = useState<FloatingNavStatus>(
        FloatingNavStatus.TOP
    );
    return (
        <>

            <div className={"flex flex-col items-center w-screen h-full font-SourceSans "}>
                <ArdeniteNavBar floatingNavStatus={floatingNavStatus} scroller={scroller}/>
                <CrossFade>
                    <div className={"w-screen  flex flex-col items-center h-full absolute z-10 "}>

                        <ContentContainer className={"mt-24 h-full  flex flex-col-reverse   w-full"}>

                            <div className={'flex flex-row  items-center w-full h-1/3  justify-center h-full'}>
                                <ArdeniteHeading></ArdeniteHeading>
                            </div>
                        </ContentContainer>
                    </div>
                </CrossFade>
                <ContentContainer className={"h-full flex space-y-8 md:space-y-0  flex-col  md:flex-row items-center w-full  md:w-full lg:w-full  md:space-x-5 justify-center lg:space-x-7 pt-8  md:pt-0 md:-translate-y-[36px]"}>

                    <ArdeniteOutlineButton link={"mailto:office@ardenite.net?subject=Order"} title={"LISTEN NOW"} className={"lightBoxPink text-pink bg-brand-black "}/>
                    <ArdeniteOutlineButton link={"mailto:office@ardenite.net?subject=Order"} title={"WATCH NOW"} className={"lightBoxPink text-pink bg-brand-black "}/>
                    <ArdeniteOutlineButton link={"mailto:office@ardenite.net?subject=Order"} title={"BUY NOW"} className={"lightBoxPink text-pink bg-brand-black "}/>
                </ContentContainer>

                <ArdeniteEntry subtitle={'An explosion of emotions'} image={Backstabber} title={'Backstabber'} direction={''}>
                    Backstabber emerged in an explosion of emotions, caused by the betrayal of a very close person.
                    <br/>
                    As an anthem to the broken hearted, the dominant emotions of the single are rage and anger! <br/>
                    These are noticeable in the chorus and the ironically intonated rap parts. <br/>
                    The protagonist of the song however also struggles with feelings of helplessness & sorrow, while processing the void of an ending relationship.
                </ArdeniteEntry>
            </div>


        </>
    );
};

export default Home;
