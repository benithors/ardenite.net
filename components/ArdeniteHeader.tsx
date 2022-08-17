import React from 'react'
import ArdeniteText from "./ArdeniteText";
import ContentContainer from "./ContentContainer";
import NavButton from "./NavButton";
import {FloatingNavStatus} from "./FloatingNav";
import ArdeniteBurger from "./ArdeniteBurger";


interface IProps {
    floatingNavStatus: FloatingNavStatus;
    scroller: any
}

const ArdeniteHeader = (props: IProps) => {

    const [menuOpen, setMenuOpen] = React.useState(true);
    return (
        <nav
            className={
                " fixed top-0 left-0 z-20  h-20 w-full flex-row justify-center bg-brand-black-transparent  text-white  md:flex"
            }
        >
            <ContentContainer
                className={
                    " flex h-full opacity-100 w-full max-w-screen-2xl max-w-screen-xl flex-row items-center justify-between"
                }
            >

                <button
                    aria-label={"Scroll to the top"}
                    className={"flex flex-row  text-left"}
                    onClick={() => {
                        props.scroller.scrollTo("topScrollToElement", {
                            duration: 1500,
                            delay: 100,
                            smooth: true,
                        });
                    }}
                >
                    <ArdeniteText/>
                </button>

                <button className={'flex w-1/4 h-full p-2 z-50 md:hidden'} onClick={() => setMenuOpen(prevState => !prevState)}>
                    <ArdeniteBurger></ArdeniteBurger>
                </button>
                <div className={'fixed top-0 left-0 pointer-events-none   w-full h-full  '}>
                    <div className={(menuOpen ? " translate-x-full " : " translate-x-0 ") + "h-full w-1/2 bg-brand-black absolute right-0 z-50 transition-transform duration-500 "}>

                        <div className={'flex flex-col items-center pt-32 space-y-4 h-full w-full bg- text-xl '}>
                            <div>
                                HOME
                            </div>
                            <div>
                                Merch
                            </div>
                            <div>
                                CONTACT
                            </div>


                        </div>
                    </div>
                </div>

                <div className={"hidden  md:flex h-full h-full flex-row  items-center self-end"}>
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
                        HOME

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
                        MERCH
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
                        CONTACT
                    </NavButton>
                </div>
            </ContentContainer>
        </nav>

    );

}

export default ArdeniteHeader
