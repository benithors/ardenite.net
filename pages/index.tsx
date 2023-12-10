import React, {useEffect, useState} from 'react'
import {NextPage} from "next";
import CrossFade from "../components/CrossFade";
import ArdeniteNavBar from "../components/ArdeniteNavBar";
import FloatingNav, {FloatingNavStatus} from "../components/FloatingNav";
import ContentContainer from "../components/ContentContainer";
import Backstabber from '../public/static/images/backstabber.png';
import Flowers from '../public/static/images/flowersdontcare.png';
import Diamond from '../public/static/images/diamond.jpg';
import youresodumb from '../public/static/images/youresodumb.webp';
import dontwannastayfriends from '../public/static/images/dontwannastayfriends.webp';
import youretheoneiwant from '../public/static/images/youretheoneiwant.webp';
import darkesthour from '../public/static/images/darkesthour.webp';
import ardenite from '../public/static/images/ardenite.webp';


import WakeUp from '../public/static/images/wakeup.png';
import ArdeniteEntry, {EntryPosition} from "../components/ArdeniteEntry";
import PopInButton from "../components/PopInButton";
import {ArrowDown} from "react-feather";
import Socials from "../components/Socials";
import {FooterBar} from "../components/FooterBar";
import {useInView} from "react-intersection-observer";
import Section from "../components/Section";
import {NextSeo, SocialProfileJsonLd} from "next-seo";

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


    return (
        <>

            <FloatingNav floatingNavStatus={floatingNavStatus} scroller={scroller}/>
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

            <SocialProfileJsonLd
                type="Organization"
                name="Ardenite"
                url="https://ardenite.net/"
                sameAs={[
                    'https://www.facebook.com/ardenite',
                    'https://www.instagram.com/ardeniteofficial/',
                    'https://www.tiktok.com/@ardeniteofficial',
                    'https://twitter.com/weareARDENITE',
                    'https://www.youtube.com/c/ARDENITE',
                    'https://open.spotify.com/artist/3GXo8euWCGsniO8H7MrU9B',
                    'https://music.apple.com/at/artist/ardenite/1454820051',
                    'https://soundcloud.com/ardenite-band'

                ]}
            />
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
                            }} className={'py-24  px-16  '}>
                                <ArrowDown size={'40'} className={'stroke-2 stroke-white size  animate-bounce '}/>
                            </button>

                        </div>
                    </CrossFade>
                </TopSection>

                <AboutSection name={'about'}>
                    <div ref={aboutInView.ref}>
                        <ContentContainer className={" h-full  flex flex-col-reverse   w-full py-20 md:py-32 lg:py-40"}>

                            <Section subtitle={'New Single "You\'re The One I Want" Watch It NOW!'} title={'CYBER POP ROCK'}>
                                <div className={'text-center opacity-70'}>
                                    We are ARDENITE, a Cyber Pop Rock band from Vienna, Austria, and we are not afraid to get our hands dirty!
                                    <br/>
                                    <br/>
                                    What can you expect from ARDENITE?
                                    <br/>
                                    Pink-turquoise Cyberpunk aesthetics, surprising new sounds, heavily distorted synthesisers, the badass 7 string guitar & 5 string bass of Sebo and the deep mezzo-soprano signature voice of Wana combined with extreme
                                    vocals. Our emotional lyrics aim to establish a direct heart-to-heart connection - disarming through vulnerability & empowering through honesty!
                                    <div className={'mt-4'}>

                                        Our goal is to unite as many people & hearts as possible around the globe through our music! We invite everyone to take part in our journey, by doing Instagram story vlogs & actively interacting with our growing
                                        community of ARDENITEs! We believe that there is enough success for everybody and aim to inspire and motivate many others to follow their dreams!
                                    </div>

                                </div>


                                <div className={'bg-brand-black   flex space-y-4 pb-4 pt-2 md:space-y-0  flex-col  md:flex-row items-start w-full  md:w-full lg:w-full  md:space-x-5 justify-center lg:space-x-7   '}>


                                        <div className={'w-full flex flex-col items-center h-12'}>
                                        <PopInButton className={' text-brand-black'} ariaLabel={'Link to youtube'} type={'button'} href={'https://www.youtube.com/c/ARDENITE/featured'}>
                                            WATCH NOW
                                        </PopInButton>
                                        </div>
                                        <div className={'w-full flex flex-col items-center h-12'}>

                                            <PopInButton className={'text-brand-black'} ariaLabel={'Link to ardenite shop'} type={'button'} href={'https://shop.ardenite.net/'}>
                                                BUY NOW
                                            </PopInButton>
                                        </div>
                                        <div className={'w-full flex flex-col items-center h-12'}>
                                            <PopInButton className={'text-brand-black'} ariaLabel={'Link to spotify'} type={'button'} href={'https://open.spotify.com/artist/3GXo8euWCGsniO8H7MrU9B?si=vdrvFbwoT8ewY92OVtPNRg'}>
                                                LISTEN NOW
                                            </PopInButton>
                                        </div>

                                    <div className={'w-full flex flex-col items-center h-12 '}>
                                        <PopInButton className={'  text-brand-black'} ariaLabel={'Link to patreon'} type={'button'}
                                                     backgroundColor={'bg-brand-turquoise2'} href={'https://www.patreon.com/ardenite/'}>
                                            Become a Patron 💖
                                        </PopInButton>
                                    </div>


                                </div>


                            </Section>


                        </ContentContainer>

                    </div>

                </AboutSection>


                <ArdeniteEntry linkText={'Listen Now'} linkUrl={'https://open.spotify.com/track/6xg6GqGi3Pr2kbcEHo2x8e?si=e60e3407f19f47c9'} backgroundColor={''} priority={true} subtitle={'Our New Self-Titled Single "ARDENITE" Listen To It Now!'}
                               image={ardenite}
                               title={"Ardenite"} animation={EntryPosition.right}>
                    ARDENITE&rsquo;s self-titled single is a powerful anthem of unity, community, and support. With a message of togetherness and overcoming challenges, this track resonates with a wide audience.
                    <div className={'pt-2'}>
                        We believe it would be a perfect fit for playlists that celebrate unity, motivation, and positive vibes.
                        <br/>
                        We dedicate this Rock Anthem of unity, positive vibes and inspiration to our incredible ARDENITE Community!
                        <br/>
                        Help us share the ARDENITE philosophy with the world!
                    </div>
                </ArdeniteEntry>


                <ArdeniteEntry linkText={'Watch Now'} linkUrl={'https://www.youtube.com/watch?v=5DXs0_BrKUc'} backgroundColor={''} priority={false} subtitle={'New Collab "Darkest Hour" Watch It Now!'}
                               image={darkesthour}
                               title={"Darkest Hour"} animation={EntryPosition.left}>
                    &quot;Darkest Hour&quot; a relentless industrial masterpiece & sonic voyage through the dystopian world of cyberpunk, featuring unforgiving harsh vocals & vengeful lyrics. If you crave the dark and edgy, this is your anthem.

                    <div className={'pt-2'}>
                        If you&rsquo;re a curator seeking the boldest and most cutting-edge industrial sounds for your playlist, &quot;Darkest Hour&quot; demands your attention.
                    </div>

                    <div className={'pt-2'}>
                        It&rsquo;s not just a song, but a visceral experience transporting your audience to the heart of a cyberpunk revolution.
                    </div>
                </ArdeniteEntry>

                <ArdeniteEntry linkText={'Watch Now'} linkUrl={'https://youtu.be/N7EXHiPlQUY'} backgroundColor={''} priority={false} subtitle={'New Single "You\'re The One I Want" Watch It Now!'}
                               image={youretheoneiwant}
                               title={"You\'re The One I Want"} animation={EntryPosition.right}>
                    ARDENITE & VALKIRIA Synth bring you &quot;You&rsquo;re The One I Want&quot;! This song is a must-have for every Pop, Dance, Party, and Workout/Fitness Playlist!
                    <div className={'pt-2'}>
                        With its pulsating beats and catchy melodies, &quot;You&rsquo;re The One I Want&quot; captures the essence of a carefree summer filled with love and excitement. It will transport you to the era of 80s nostalgia, while keeping you in the present moment.

                    </div>

                    <div className={'pt-2'}>
                        If you enjoy songs like Lady Gaga&rsquo;s &quot;Just Dance&quot; or &quot;Bad Romance&quot;, Dua Lipa&rsquo;s &quot;Levitating&quot;, or Cascada&rsquo;s &quot;Everytime We Touch&quot;, then &quot;You&rsquo;re The One I Want&quot; is right up your alley.
                    </div>

                    <div className={'pt-2'}>
                        So get ready to immerse yourself in a world of joy, love, and energetic vibes. Enjoy the song and let it be the soundtrack of your unforgettable summer moments! ❤️
                    </div>


                </ArdeniteEntry>

                <ArdeniteEntry linkText={'Watch Now'} linkUrl={'https://youtu.be/6qS6x5dVDbw'} backgroundColor={''} priority={false} subtitle={'An Empowering Anthem of Growth and Freedom!'}
                               image={dontwannastayfriends}
                               title={"Don't Wanna Stay Friends"} animation={EntryPosition.left}>
                    The refreshing take on breakups, make it an anthem for anyone who&rsquo;s ever felt trapped in an unfulfilling relationship.
                    while navigating conflicts with unfair and ignorant people around them.
                    <div className={'pt-2'}>
                        With its Avril Lavigne style infectious chorus & raw lyrics, this song is a celebration of growth & self-discovery for anyone who&rsquo;s ready to move on.

                    </div>

                    <div className={'pt-2'}>
                        Turn up the volume, sing along, & embrace the freedom of a happy breakup!

                    </div>
                    <div className={'pt-2'}>
                        Official Music Video out on our Youtube channel @ARDENITE on Valentine&rsquo;s Day 2023!
                    </div>


                </ArdeniteEntry>

                <ArdeniteEntry linkText={'Watch Now'} linkUrl={'https://www.youtube.com/watch?v=VzuVsN0veQ4&feature=youtu.be'} backgroundColor={''} priority={false} subtitle={'Push your self-confidence and muster up the courage to Stand Up for Yourself!'}
                               image={youresodumb}
                               title={'You’re So Dumb'} animation={EntryPosition.right}>
                    &quot;You’re So Dumb&quot; portrays the inner world of somebody, who’s had enough of being the nice person,
                    while navigating conflicts with unfair and ignorant people around them.
                    <div className={'pt-2'}>
                        A song for those fed up with staying nice & small, keeping their mouths shut for the sake of peace & harmony.
                    </div>

                    <div className={'pt-2'}>
                        Take in the badass vibe of the song to push your self-confidence and muster up the courage to Stand Up for Yourself!
                    </div>
                </ArdeniteEntry>


                <ArdeniteEntry linkText={'Watch Now'} linkUrl={'https://youtu.be/JILBJIJ146Y'} backgroundColor={''} priority={false} subtitle={'The harsh reality of mental health issues'} image={Diamond}
                               title={'Diamond'} animation={EntryPosition.left}>
                    An Anthem of Vulnerability and Courage! - “When I was a teen, I thought about killing myself, a lot. The thoughts in
                    my head, of not belonging and never being enough, no matter what I did, were almost unbearable. I wrote this song as
                    the embrace I needed to feel back then. Hope this helps somebody out there. You are not alone.” (Wana White, singer
                    of ARDENITE)
                    <div className={'pt-2'}>
                        Diamond” is a collaboration between the Uruguayan Lo-Fi Producer Claudia Blackstar and the Cyber Pop Rock Band
                        ARDENITE from Vienna, Austria. While each of us faces our own demons on a daily basis, “Diamond” aims to reach
                        through to the listener&apos;s heart. The soothing Lo-Fi beats combined with the heartfelt singing convey a sense of
                        reassurance and relief.
                    </div>

                    <div className={'pt-2'}>
                        The band invites their listeners to share this song with anyone dealing with the harsh reality of mental health issues.
                        Together we can break the silence and the barriers between us!
                    </div>
                </ArdeniteEntry>

                <ArdeniteEntry linkText={'Watch Now'} linkUrl={'https://youtu.be/nHP_EexOfO4'} backgroundColor={''} priority={false} subtitle={'A song as a form of protest and contribution!'} image={WakeUp}

                               title={'Wake Up'} animation={EntryPosition.right}>
                    With everything that is going on in the world right now, we felt like it was our duty to write this song as a form of protest and contribution!
                    We stand with all of the ones who are suffering right now, because of decisions they didn&apos;t make themselves, yet still have to bear the horrible consequences! We see you and we feel your pain!
                    You are not alone and what is happening is not ok!
                    <div className={'pt-2'}>
                        Right now more than ever we should stand united like the brothers and sisters that we are! Right now more than ever we need each other to face the challenges lying ahead of us!
                    </div>

                </ArdeniteEntry>

                <ArdeniteEntry linkText={'Watch Now'} linkUrl={'https://youtu.be/1muIRKbC5bo'} backgroundColor={' '} priority={false} subtitle={'We enjoy surprising you!'} image={Flowers} title={'Flowers Don´t Care'} animation={EntryPosition.left}>
                    Flowers Don&apos;t Care may seem like --- and probably is --- your new favourite summer party song! However this is just the bitter sweet package (which hopefully compels you to dance!) of its deeper meaning about life,
                    death
                    and dealing with the loss of a close soul.
                    <br/>
                    Bittersweet, addictive and liberating all at once! What more could one ask for?
                </ArdeniteEntry>


                <ArdeniteEntry linkText={'Watch Now'} linkUrl={'https://youtu.be/y9bczIoB9lw'} backgroundColor={''} priority={false} subtitle={'An explosion of emotions'} image={Backstabber} title={'Backstabber'} animation={EntryPosition.right}>
                    Backstabber emerged in an explosion of emotions, caused by the betrayal of a very close person.
                    As an anthem to the broken hearted, the dominant emotions of the single are rage and anger! <br/>
                    These are noticeable in the chorus and the ironically intonated rap parts.
                    <div className={'pt-2'}>

                        The protagonist of the song however also struggles with feelings of helplessness & sorrow, while processing the void of an ending relationship.
                    </div>
                </ArdeniteEntry>


                <ContactSection name={'contact'}>
                    <div ref={contactInView.ref}>
                        <ContentContainer className={" h-full w-full  flex flex-col-reverse   w-full py-20 md:py-32 lg:py-40"}>

                            <Section subtitle={'We want to meet YOU !'} title={'CONTACT'}>
                                <p className={'text-center opacity-70'}>
                                    Would you like to reach out or book us for your event?
                                </p>

                                <div className={'w-full h-12 flex flex-col items-center'}>

                                    <PopInButton className={'text-brand-black'}
                                                 href={"mailto:office@ardenite.net"}
                                                 type={"mail"}
                                                 ariaLabel={"Write an email to us"}>
                                        GET IN TOUCH
                                    </PopInButton>

                                </div>
                                <div className={'w-full h-12 flex flex-col items-center'}>

                                    <PopInButton className={'text-brand-black'}
                                                 href={"https://drive.google.com/drive/folders/1uQt_QMQhYIH8qBP1Zhi2MhjmqLygqhHF"}
                                                 type={'download'}
                                                 ariaLabel={"Presskit"}
                                    >
                                        Download Press Kit
                                    </PopInButton>



                                </div>

                                <div className={'w-full hidden flex items-center justify-center h-12'}>
                                    <PopInButton
                                        backgroundColor={'bg-brand-turquoise2'}
                                        className={'text-brand-black'} ariaLabel={'Link to newsletter'} type={'button'} href={'https://ardenite.substack.com/'}>
                                        Subscribe to Newsletter
                                    </PopInButton>
                                </div>
                                <div className={'flex flex-wrap items-center justify-center space-x-4 pt-32 '}>
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
