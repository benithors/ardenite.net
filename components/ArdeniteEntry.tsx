import React from 'react'
import {ArrowUpRight} from "react-feather";
import Image from "next/image";
import {useInView} from "react-intersection-observer";
import PopInButton from "./PopInButton";

export enum EntryPosition {
    left = 0,
    right = 1,

}

interface IProps {
    animation: EntryPosition;
    image: any
    subtitle: string;
    title: string;
    children: any
    className?: string;
    priority:boolean
    backgroundColor: string;
}


const ArdeniteEntry = (props: IProps) => {


    const entryInView = useInView({
        triggerOnce: true,
        rootMargin: "-400px 0px",
    });

    let animationDir = props.animation === EntryPosition.left ? " translate-x-12 " : " -translate-x-12 ";

    return (
        <div ref={entryInView.ref} className={props.className + (" overflow-x-hidden pb-12   w-full h-full flex flex-col-reverse  ") + (props.animation === EntryPosition.left ? " md:flex-row " : "  md:flex-row-reverse ")}>


            <div className={'text-white  w-full md:w-1/2  flex flex-col  px-12 py-12 md:py-32 lg:py-40  '+ props.backgroundColor }>

                <div className={' flex flex-col w-full md:w-[calc(100vw/3)]  justify-center transition-all duration-1000  items-center md:items-start space-y-8 ' + (entryInView.inView ? " opacity-100 translate-x-0 " +
                    " translate-y-0 " : " opacity-0 " + animationDir)}>

                    <h2 className={'opacity-70'}>
                        {props.subtitle}
                    </h2>

                    <h1 className={'text-2xl md:text-4xl lg:text-6xl font-InterSans font-bold '}>
                        {props.title}
                    </h1>

                    <div className={'border-b-[12px] border-gray-300 w-1/3 opacity-40'}>

                    </div>


                    <div>
                        {props.children}
                    </div>
                    <div className={'w-full flex flex-col md:items-start items-center h-12'}>

                                <PopInButton  className={'text-brand-black  '} ariaLabel={'wach the song on youtube'} type={'button'}>
                                     Watch It   <ArrowUpRight className={'translate-x-2 opacity-75'}/>
                                </PopInButton>

                    </div>


                </div>

            </div>
            <div className={' transition-all delay-150 duration-1000  w-full  min-h-[calc(100vh/2)] md:min-h-fit relative' + (entryInView.inView ? " opacity-100 translate-x-0 translate-y-0 " : " opacity-0 " + animationDir)}>


                <Image src={props.image} layout="fill"
                       priority={props.priority}
                       className="object-center object-cover pointer-events-none"
                       objectFit="cover">

                </Image>
            </div>
        </div>


    );
}

export default ArdeniteEntry
