import React from 'react'
import ArdeniteText from "./ArdeniteText";
import ContentContainer from "./ContentContainer";
import NavButton from "./NavButton";
import {FloatingNavStatus} from "./FloatingNav";


interface IProps {
    floatingNavStatus: FloatingNavStatus;
    scroller: any
    showShop:any;
}

const ArdeniteNavBar = (props: IProps) => {

    return (
        <nav
            className={
                " fixed top-0 left-0 z-20  h-20 w-full flex-row justify-center bg-brand-black-transparent  text-white  md:flex"
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
                    <ArdeniteText/>
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
                        props.showShop()
                        }}
                    >
                        SHOP
                    </NavButton>
                </div>
            </ContentContainer>
        </nav>

    );

}

export default ArdeniteNavBar
