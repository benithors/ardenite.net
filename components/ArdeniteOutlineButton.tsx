import Link from 'next/link'
import React from 'react'

interface IProps {
    link: string;
    title: string;
    className: string;
}

const ArdeniteOutlineButton = (props: IProps) => {

    return (



            <button className={"text-center font-semibold mt-8 p-5 text-3xl w-full " + props.className}>
                <Link href={props.link}
                >
                <a className={"card"} target="_blank">{props.title}</a>
                </Link>
            </button>



    );
}

export default ArdeniteOutlineButton
