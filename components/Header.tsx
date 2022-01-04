import React from 'react'
import ArdeniteText from "./ArdeniteText";
import ArdeniteMenu from "./ArdeniteMenu";
import MobileMenu from "./MobileMenu";


const Header = () => {

    return (


        <nav className={"flex flex-row items-center justify-between h-24 sm:h-36 sm:mt-8 md:mt-16 lg:mt:pt-72 mb-18 md:mb-12 "}>
            <ArdeniteText/>
            <ArdeniteMenu/>

            <div >
                <MobileMenu/>

            </div>

        </nav>


    );
}

export default Header
