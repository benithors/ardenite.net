import Link from 'next/link';
import React from 'react'


const ArdeniteMenu = () => {

    return (
        <div className={"hidden xl:flex flex-row md:text-lg xl:text-2xl justify-between"}>

            <button className={"text-pink leading-normal filter drop-shadow-md font-semibold"}>
                HOME
            </button>
            <Link href="/merch">
                <button className={"text-pink leading-normal filter drop-shadow-md font-semibold pl-8 "}>
                    MERCH
                </button>
            </Link>
            <button className={"text-pink leading-normal filter drop-shadow-md font-semibold pl-8 "}>
                CONTACT
            </button>
        </div>


    );
}

export default ArdeniteMenu
