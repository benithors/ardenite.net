import React from 'react'
import ArdeniteText from "./ArdeniteText";
import ArdeniteBurger from "./ArdeniteBurger";
import ArdeniteMenu from "./ArdeniteMenu";


interface IProps {

}

const Header = (props: IProps) => {

    return (


            <nav  className={"flex flex-row items-center justify-between h-24 sm:mt-8 md:mt-16 lg:mt:pt-72 mb-18 md:mb-12 "}>
                <ArdeniteText/>
                <ArdeniteBurger/>
                <ArdeniteMenu/>

            </nav >





    );
}

export default Header
