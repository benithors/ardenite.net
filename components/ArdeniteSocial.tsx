import React from 'react'
import Link from 'next/link';

interface IProps {

}

const ArdeniteSocial = (props: IProps) => {

    return (
        <div className={"flex flex-row self-center mt-16 justify-around w-1/3"}>

            <Link href="https://www.instagram.com/ardeniteofficial">

            </Link>
            <Link href="https://www.facebook.com/ardenite">

            </Link>
            <Link href="https://www.youtube.com/c/ARDENITE">

            </Link>

        </div>


    );
}

export default ArdeniteSocial
