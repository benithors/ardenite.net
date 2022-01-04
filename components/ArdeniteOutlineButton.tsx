import Link from 'next/link'
import React from 'react'

interface IProps {
    link: string;

    title: string

}

const ArdeniteOutlineButton = (props: IProps) => {

    return (



            <button className={"lightBox text-center text-pink filter drop-shadow-xs font-semibold mt-8 p-5 text-3xl"}>
                <Link href={props.link}
                >
                <a className={"card"} target="_blank">{props.title}</a>
                </Link>
            </button>



    );
}

export default ArdeniteOutlineButton
