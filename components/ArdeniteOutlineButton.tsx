import Link from 'next/link'
import React from 'react'

interface IProps {
    link: string;
    title: string;
    className: string;
}

const ArdeniteOutlineButton = (props: IProps) => {

    return (
        <div className={('h-[50px] md:h-[70px] lg:h-[73px] w-[250px] md:w-[200px] lg:w-[262px]  ') + props.className}>
            <a  className={"block font-semibold text-xs md:text-xl lg:text-3xl w-full h-full flex flex-col items-center justify-center  "} rel="noreferrer" href={props.link}  target="_blank">
                {props.title}
            </a>
        </div>
    );
}

export default ArdeniteOutlineButton
