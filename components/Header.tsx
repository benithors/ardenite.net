import React from 'react'
import ArdeniteText from "./ArdeniteText";
import ArdeniteBurger from "./ArdeniteBurger";


interface IProps {

}

const Header = (props: IProps) => {

    return (
        <div className={"flex flex-row items-center h-24 sm:pt-8 md:pt-16 lg:pt:pt-24"}>
                <ArdeniteText/>
                <ArdeniteBurger/>




        </div>


    );
}

export default Header
