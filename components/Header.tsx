import React from 'react'
import ArdeniteText from "./ArdeniteText";
import ArdeniteMenu from "./ArdeniteMenu";
import MobileMenu from "./MobileMenu";


const Header = () => {

    return (


        <nav className={"flex flex-row items-center justify-between h-24 sm:h-36 sm:mt-8 md:mt-16 lg:mt:pt-72 mb-18 md:mb-12 px-8 sm:px-16 xl:px-0 max-w-screen-xl self-center w-full"}>
            <ArdeniteText/>
            <ArdeniteMenu/>

            <div className={"flex flex-row  h-full w-1/6 items-center"}>
                <MobileMenu/>

            </div>

        </nav>


    );
}

export default Header
