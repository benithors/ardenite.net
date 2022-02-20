import Link from 'next/link';
import React from 'react'


const ArdeniteMenu = () => {

    return (
        <div className={"hidden xl:flex flex-row md:text-lg xl:text-2xl justify-between"}>
            <Link href="#home">
            <a className={"text-pink leading-normal filter drop-shadow-md font-semibold"}>
                HOME
            </a>
            </Link>
            <Link href="#merch">
                <a className={"text-pink leading-normal filter drop-shadow-md font-semibold pl-8 "}>
                    MERCH
                </a>
            </Link>
            <Link href="#contact">
            <a className={"text-pink leading-normal filter drop-shadow-md font-semibold pl-8 "}>
                CONTACT
            </a>
            </Link>
        </div>


    );
}

export default ArdeniteMenu
