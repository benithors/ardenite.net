import React from 'react'

import Image from "next/image";

interface IProps {
    animate: boolean;
    image: any
    className?: string;
    animation: string;
    offset:string
    priority:boolean
}
const CrossFadeImage = (props: IProps) => {
    return (
        <div className={' flex flex-col items-center w-screen h-full  bg-green-500  transition-opacity duration-[3000ms]  '+   props.offset + ' ' + props.className + ' ' + (props.animate ? ' opacity-100' : 'opacity-0')}>


            <div className={'w-[calc(150vw)] h-[calc(150vh)] bg-red-500'}>
                <Image priority={props.priority} src={props.image} layout={'fill'} className={'  transition-transform ease-linear    duration-[10000ms] '  + (props.animate ? props.animation + ' opacity-100  ' :  'delay-[10000ms] ' )
                } objectFit={'cover'}/>
            </div>


        </div>


    );
}

export default CrossFadeImage
