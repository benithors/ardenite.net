import React, {useEffect, useState} from 'react'
import {NextPage} from "next";
import CrossFade from "../components/CrossFade";
import ArdeniteNavBar from "../components/ArdeniteNavBar";
import FloatingNav, {FloatingNavStatus} from "../components/FloatingNav";
import ContentContainer from "../components/ContentContainer";
import Backstabber from '../public/static/images/backstabber.png';
import Flowers from '../public/static/images/flowersdontcare.png';

import WakeUp from '../public/static/images/wakeup.jpg';
import ArdeniteEntry, {EntryPosition} from "../components/ArdeniteEntry";
import PopInButton from "../components/PopInButton";
import {ArrowDown, ArrowDownCircle} from "react-feather";
import Socials from "../components/Socials";
import {FooterBar} from "../components/FooterBar";
import {useInView} from "react-intersection-observer";

const Home: NextPage = () => {

    const Scroll = require("react-scroll");
    let scroller = Scroll.scroller;

    const AboutSection = Scroll.Element;

    const TopSection = Scroll.Element;

    const aboutInView = useInView({
        triggerOnce: false,
        rootMargin: "-200px 0px",
    });

    const aboutAnimationInView = useInView({

        triggerOnce: true,
        rootMargin: "-0px 0px",
    });
    const [floatingNavStatus, setFloatingNavStatus] = useState<FloatingNavStatus>(
        FloatingNavStatus.TOP
    );


    useEffect(() => {


        if (aboutInView.inView) {
            setFloatingNavStatus(FloatingNavStatus.ABOUT);
        } else if (floatingNavStatus === FloatingNavStatus.ABOUT) {
            setFloatingNavStatus(FloatingNavStatus.TOP);
        }

    }, [aboutInView.inView, floatingNavStatus]);
    return (
        <>
            <FloatingNav floatingNavStatus={floatingNavStatus} scroller={scroller}/>

            <div className={"flex flex-col items-center w-screen h-full font-SourceSans "}>
                <ArdeniteNavBar floatingNavStatus={floatingNavStatus} scroller={scroller}/>
                <TopSection name="top">
                    <CrossFade>
                        <div className={"w-screen  flex flex-col items-center justify-end h-full absolute z-10 "}>

                            <button onClick={() => {
                                scroller.scrollTo("about", {
                                    duration: 1500,
                                    delay: 100,
                                    smooth: true,
                                });
                            }} className={'py-8  px-16  '}>
                                <ArrowDown size={'40'} className={'stroke-2 stroke-white size  animate-bounce '}/>
                            </button>

                        </div>
                    </CrossFade>
                </TopSection>

                <AboutSection name={'about'}>
                    <div ref={aboutInView.ref}>
                        <ContentContainer className={" h-full  flex flex-col-reverse   w-full py-20 md:py-32 lg:py-40"}>

                            <div ref={aboutAnimationInView.ref} className={' text-white flex flex-col transition-all duration-1000 items-center w-full space-y-8  h-full ' + (!aboutAnimationInView.inView ? " translate-y-52 opacity-0" : ' translate-y-0' +
                                ' opacity-100 ')}>
                                <h2 className={'opacity-70'}>
                                   Vienese Band
                                </h2>

                                <h1 className={'text-2xl md:text-4xl lg:text-6xl font-InterSans font-bold  '}>
                                   CYBER POP ROCK
                                </h1>

                                <div className={'border-b-[12px] border-gray-300 w-1/3 opacity-40'}>

                                </div>


                                <p className={'text-center opacity-70'}>
                                    This Cyber Pop Rock band from Vienna, composed out of Wana White & Sebo Green, is about to revolutionize the Austrian music scene!
                                    <br/>
                                    While they could not be any more different, they are united by their common sheer passion for music & the all around creativity, which comes with its production & marketing!
                                </p>
                                <div className={'bg-brand-black   flex space-y-4 pb-4 md:space-y-0  flex-col  md:flex-row items-center w-full  md:w-full lg:w-full  md:space-x-5 justify-center lg:space-x-7   '}>

                                    <div className={'w-full h-12'}>

                                        <PopInButton className={'text-brand-black'} ariaLabel={'Link to spotify'} type={'button'} href={'https://www.youtube.com/c/ARDENITE/featured'}>
                                            WATCH NOW
                                        </PopInButton>
                                    </div>
                                    <div className={'w-full h-12'}>

                                        <PopInButton className={'text-brand-black'} ariaLabel={'Link to spotify'} type={'button'} href={'shop.ardenite.net'}>
                                            BUY NOW
                                        </PopInButton>
                                    </div>
                                    <div className={'w-full h-12'}>

                                        <PopInButton className={'text-brand-black'} ariaLabel={'Link to spotify'} type={'button'} href={'https://open.spotify.com/artist/3GXo8euWCGsniO8H7MrU9B?si=vdrvFbwoT8ewY92OVtPNRg'}>
                                            LISTEN NOW
                                        </PopInButton>
                                    </div>

                                </div>

                            </div>

                        </ContentContainer>
                    </div>

                </AboutSection>


                <ArdeniteEntry backgroundColor={''} priority={true} subtitle={'We enjoy surprising you'} image={WakeUp} title={'Wake Up'} animation={EntryPosition.right} >
                    In that sense “Flowers Don&apos;t Care” may seem like --- and probably is --- your new favourite summer party song! However this is just the bitter sweet package (which hopefully compels you to dance!) of its deeper meaning about life,
                    death
                    and dealing with the loss of a close soul.
                    <br/>
                    Bittersweet, addictive and liberating all at once! What more could one ask for?
                </ArdeniteEntry>

                <ArdeniteEntry backgroundColor={' '} priority={true} subtitle={'We enjoy surprising you'} image={Flowers} title={'Flowers Don´t Care'} animation={EntryPosition.left} >
                    In that sense “Flowers Don&apos;t Care” may seem like --- and probably is --- your new favourite summer party song! However this is just the bitter sweet package (which hopefully compels you to dance!) of its deeper meaning about life,
                    death
                    and dealing with the loss of a close soul.
                    <br/>
                    Bittersweet, addictive and liberating all at once! What more could one ask for?
                </ArdeniteEntry>


                <ArdeniteEntry backgroundColor={''} priority={false} subtitle={'An explosion of emotions'} image={Backstabber}  title={'Backstabber'} animation={EntryPosition.right}>
                    Backstabber emerged in an explosion of emotions, caused by the betrayal of a very close person.
                    <br/>
                    As an anthem to the broken hearted, the dominant emotions of the single are rage and anger! <br/>
                    These are noticeable in the chorus and the ironically intonated rap parts. <br/>
                    The protagonist of the song however also struggles with feelings of helplessness & sorrow, while processing the void of an ending relationship.
                </ArdeniteEntry>

                <ContentContainer className={" h-full  flex flex-col   w-full py-8 md:py-32 lg:py-40"}>

                    <div className={' text-white flex flex-col  items-center w-full space-y-8  h-full '}>

                        <div className={'flex flex-row w-full items-center justify-center space-x-4'}>
                            <Socials inView={true} userName={'ardenite'} youtube={"https://www.youtube.com/c/ARDENITE"} facebook={"https://www.facebook.com/ardenite"} instagram={"https://www.instagram.com/ardeniteofficial"}/>
                        </div>
                        <FooterBar/>
                    </div>
                </ContentContainer>

            </div>


        </>
    );
};

export default Home;
