import React from 'react'
import ArdeniteMenu from "./ArdeniteMenu";


const Header = () => {

    return (


        <nav className={"fixed top-0 left-0 h-full flex flex-row items-center justify-between h-24 sm:h-36 sm:mt-8 md:mt-16 lg:mt:pt-72 mb-18 md:mb-12 px-8 sm:px-16 xl:px-0 max-w-screen-xl self-center w-full "}>


            <ArdeniteMenu/>


        </nav>


    );
}

export default Header
