import React, {useEffect, useState} from 'react'
import {NextPage} from "next";
import CrossFade from "../components/CrossFade";
import ArdeniteNavBar from "../components/ArdeniteNavBar";
import FloatingNav, {FloatingNavStatus} from "../components/FloatingNav";
import ContentContainer from "../components/ContentContainer";
import Backstabber from '../public/static/images/backstabber.png';
import Flowers from '../public/static/images/flowersdontcare.png';

import WakeUp from '../public/static/images/wakeup.png';
import ArdeniteEntry, {EntryPosition} from "../components/ArdeniteEntry";
import PopInButton from "../components/PopInButton";
import {ArrowDown} from "react-feather";
import Socials from "../components/Socials";
import {FooterBar} from "../components/FooterBar";
import {useInView} from "react-intersection-observer";
import Section from "../components/Section";
import {NextSeo} from "next-seo";

const Home: NextPage = () => {

    const Scroll = require("react-scroll");
    let scroller = Scroll.scroller;

    const AboutSection = Scroll.Element;
    const ContactSection = Scroll.Element;


    const TopSection = Scroll.Element;

    const aboutInView = useInView({
        triggerOnce: false,
        rootMargin: "-200px 0px",
    });

    const contactInView = useInView({
        triggerOnce: false,
        rootMargin: "-200px 0px",
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

        if (contactInView.inView) {
            setFloatingNavStatus(FloatingNavStatus.CONTACT);
        } else if (floatingNavStatus === FloatingNavStatus.CONTACT) {
            setFloatingNavStatus(FloatingNavStatus.TOP);
        }


    }, [contactInView.inView, aboutInView.inView, floatingNavStatus]);

    const [showShopInfo, setShowShopInfo] = useState(false);


    function showShopInfoHandler() {

        setShowShopInfo(true);

        setTimeout(function () {
            setShowShopInfo(false);
        }, 2000);
    }

    return (
        <>
            <div className={(!showShopInfo && ' opacity-0 ') + (' transition-opacity duration-1000 bg-brand-black-transparent flex flex-col items-center text-4xl z-50 text-white  justify-center fixed pointer-events-none w-screen h-screen ')}>
                <ContentContainer>

                    <div className={'text-center uppercase font-extrabold'}>
                        SHOP is coming soon stay tuned
                    </div>

                </ContentContainer>
            </div>
            <FloatingNav showShopInfo={showShopInfoHandler} floatingNavStatus={floatingNavStatus} scroller={scroller}/>
            <NextSeo
                title="Ardenite"
                description="CYBER POP ROCK BAND FROM VIENNA"
                openGraph={{
                    url: "https://ardenite.net/",
                    title: "Ardenite",
                    description: "CYBER POP ROCK BAND FROM VIENNA",
                    images: [
                        {
                            url: "https://asset.cloudinary.com/socialpoll/6c19417a869f269d45bef5d2ae96be6c",
                            width: 1024,
                            height: 682,
                            alt: "Ardenite",
                            type: "image/png",
                        },
                    ],
                    site_name: "Ardenite",

                }}

            />
            <div className={"flex flex-col items-center w-screen h-full font-SourceSans "}>
                <ArdeniteNavBar showShop={showShopInfoHandler} floatingNavStatus={floatingNavStatus} scroller={scroller}/>
                <TopSection name="top">
                    <CrossFade>
                        <div className={"w-screen  flex flex-col items-center justify-end h-full absolute z-10 "}>

                            <button onClick={() => {
                                scroller.scrollTo("about", {
                                    duration: 1500,
                                    delay: 100,
                                    smooth: true,
                                });
                            }} className={'py-24  px-16  '}>
                                <ArrowDown size={'40'} className={'stroke-2 stroke-white size  animate-bounce '}/>
                            </button>

                        </div>
                    </CrossFade>
                </TopSection>

                <AboutSection name={'about'}>
                    <div ref={aboutInView.ref}>
                        <ContentContainer className={" h-full  flex flex-col-reverse   w-full py-20 md:py-32 lg:py-40"}>

                            <Section subtitle={'Vienese Band'} title={'CYBER POP ROCK'}>
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

                                        <PopInButton className={'text-brand-black'} ariaLabel={'Link to spotify'} type={'button'} onClick={showShopInfoHandler}>
                                            BUY NOW
                                        </PopInButton>
                                    </div>
                                    <div className={'w-full h-12'}>

                                        <PopInButton className={'text-brand-black'} ariaLabel={'Link to spotify'} type={'button'} href={'https://open.spotify.com/artist/3GXo8euWCGsniO8H7MrU9B?si=vdrvFbwoT8ewY92OVtPNRg'}>
                                            LISTEN NOW
                                        </PopInButton>
                                    </div>

                                </div>
                            </Section>

                        </ContentContainer>
                    </div>

                </AboutSection>


                <ArdeniteEntry linkText={'Pre-Save Release'} linkUrl={'https://share.amuse.io/track/chypriann-wake-up'} backgroundColor={''} priority={true} subtitle={'New Single "WAKE UP" will be OUT on August 26th 2022 !'} image={WakeUp}
                               title={'Wake Up'} animation={EntryPosition.right}>
                    We can&apos;t wait to share this song with you, in the meantime make sure to pre-save the release!
                </ArdeniteEntry>

                <ArdeniteEntry linkText={'Watch It'} linkUrl={'https://youtu.be/1muIRKbC5bo'} backgroundColor={' '} priority={true} subtitle={'We enjoy surprising you'} image={Flowers} title={'Flowers Don´t Care'} animation={EntryPosition.left}>
                    In that sense “Flowers Don&apos;t Care” may seem like --- and probably is --- your new favourite summer party song! However this is just the bitter sweet package (which hopefully compels you to dance!) of its deeper meaning about life,
                    death
                    and dealing with the loss of a close soul.
                    <br/>
                    Bittersweet, addictive and liberating all at once! What more could one ask for?
                </ArdeniteEntry>


                <ArdeniteEntry linkText={'Watch It'} linkUrl={'https://youtu.be/y9bczIoB9lw'} backgroundColor={''} priority={false} subtitle={'An explosion of emotions'} image={Backstabber} title={'Backstabber'} animation={EntryPosition.right}>
                    Backstabber emerged in an explosion of emotions, caused by the betrayal of a very close person.
                    <br/>
                    As an anthem to the broken hearted, the dominant emotions of the single are rage and anger! <br/>
                    These are noticeable in the chorus and the ironically intonated rap parts. <br/>
                    The protagonist of the song however also struggles with feelings of helplessness & sorrow, while processing the void of an ending relationship.
                </ArdeniteEntry>


                <ContactSection name={'contact'}>
                    <div ref={contactInView.ref}>
                        <ContentContainer className={" h-full w-full  flex flex-col-reverse   w-full py-20 md:py-32 lg:py-40"}>

                            <Section subtitle={'Do you want to meet us?'} title={'CONTACT'}>
                                <p className={'text-center opacity-70'}>
                                    This Cyber Pop Rock band from Vienna, composed out of Wana White & Sebo Green, is about to revolutionize the Austrian music scene!
                                    <br/>
                                    While they could not be any more different, they are united by their common sheer passion for music & the all around creativity, which comes with its production & marketing!
                                </p>
                                <div className={'w-full h-12'}>

                                    <PopInButton className={'text-brand-black'}
                                                 href={"mailto:mailto:office@ardenite.net"}
                                                 type={"mail"}
                                                 ariaLabel={"Write an email to us"}>
                                        Write us
                                    </PopInButton>
                                </div>
                                <div className={'flex flex-wrap space-x-4'}>
                                    <Socials userName={'ardenite'} youtube={"https://www.youtube.com/c/ARDENITE"} facebook={"https://www.facebook.com/ardenite"} instagram={"https://www.instagram.com/ardeniteofficial"}
                                             bandcamp={'https://ardenite.bandcamp.com/'} paypal={'https://www.paypal.com/paypalme/ardeniteofficial'} tiktok={'https://www.tiktok.com/@ardeniteofficial'}
                                             spotify={'https://open.spotify.com/artist/3GXo8euWCGsniO8H7MrU9B?si=WgztQFU7SBW79PH41C-Uwg'} appleMusic={'https://music.apple.com/at/artist/ardenite/1454820051'}
                                             soundcloud={'https://soundcloud.com/ardenite-band'}/>
                                </div>
                            </Section>

                        </ContentContainer>
                    </div>

                </ContactSection>

                <ContentContainer className={" h-full  flex flex-col   w-full py-8 md:py-32 lg:py-40"}>

                    <div className={' text-white flex flex-col  items-center w-full space-y-8  h-full '}>


                        <FooterBar/>
                    </div>
                </ContentContainer>

            </div>


        </>
    );
};

export default Home;
