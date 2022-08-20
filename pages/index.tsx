import React, {useState} from 'react'
import {NextPage} from "next";
import CrossFade from "../components/CrossFade";
import ArdeniteNavBar from "../components/ArdeniteNavBar";
import {FloatingNavStatus} from "../components/FloatingNav";
import ArdeniteOutlineButton from "../components/ArdeniteOutlineButton";
import ContentContainer from "../components/ContentContainer";
import ArdeniteHeading from "../components/ArdeniteHeading";
import Backstabber from '../public/static/images/backstabber.png';
import Flowers from '../public/static/images/flowersdontcare.png';
import ArdeniteEntry, {EntryPosition} from "../components/ArdeniteEntry";

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
                            <div className={'  flex space-y-4 pb-4 md:space-y-0  flex-col  md:flex-row items-center w-full  md:w-full lg:w-full  md:space-x-5 justify-center lg:space-x-7 pt-8  md:pt-0'}>
                                <ArdeniteOutlineButton link={"mailto:office@ardenite.net?subject=Order"} title={"LISTEN NOW"} className={"lightBoxPink text-pink bg-brand-black "}/>
                                <ArdeniteOutlineButton link={"mailto:office@ardenite.net?subject=Order"} title={"WATCH NOW"} className={"lightBoxPink text-pink bg-brand-black "}/>
                                <ArdeniteOutlineButton link={"mailto:office@ardenite.net?subject=Order"} title={"BUY NOW"} className={"lightBoxPink text-pink bg-brand-black "}/>
                            </div>
                            <div className={'flex flex-row  items-end w-full  justify-center h-full'}>
                                <div className={"text-2xl  text-center md:text-2xl leading-6 text-white drop-shadow-xs font-bold font-InterSans  "}>
                                    CYBER POP ROCK
                                    <br/>
                                    BAND FROM VIENNA
                                </div>

                            </div>

                        </ContentContainer>
                    </div>
                </CrossFade>


                <ArdeniteEntry priority={true} subtitle={'We enjoy surprising you'} image={Flowers} title={'Flowers Don´t Care'} animation={EntryPosition.left} className={'bg-teal-900'}>
                    In that sense “Flowers Don&apos;t Care” may seem like --- and probably is --- your new favourite summer party song! However this is just the bitter sweet package (which hopefully compels you to dance!) of its deeper meaning about life,
                    death
                    and dealing with the loss of a close soul.
                    <br/>
                    Bittersweet, addictive and liberating all at once! What more could one ask for?
                </ArdeniteEntry>


                <ArdeniteEntry priority={false} subtitle={'An explosion of emotions'} image={Backstabber} className={'bg-[#423058]'} title={'Backstabber'} animation={EntryPosition.right}>
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
