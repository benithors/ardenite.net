import Link from 'next/link'
import React from 'react'


interface IProps {
    link: string;

    title: string

}

const ArdeniteOutlineButton = (props: IProps) => {

    return (


        <Link href={props.link} passHref={true}
        >
            <button className={"lightBox text-center text-pink filter drop-shadow-xs font-semibold mt-8 p-5 text-3xl"}>

                <h1 className={"card"}>{props.title}</h1>

            </button>
        </Link>


    );
}

export default ArdeniteOutlineButton
