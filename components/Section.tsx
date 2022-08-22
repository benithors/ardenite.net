import React from 'react'
import {useInView} from "react-intersection-observer";


interface IProps {
    title: string;
    subtitle: string;
    children: any;
}

const Section = (props: IProps) => {
    const aboutAnimationInView = useInView({
        triggerOnce: true,
        rootMargin: "-0px 0px",
    });
    return (
        <div ref={aboutAnimationInView.ref} className={' text-white flex flex-col transition-all duration-1000 items-center w-full space-y-8  h-full ' + (!aboutAnimationInView.inView ? " translate-y-52 opacity-0" : ' translate-y-0' +
            ' opacity-100 ')}>
            <h2 className={'opacity-70'}>
                {props.subtitle}
            </h2>

            <h1 className={'text-2xl md:text-4xl lg:text-6xl font-InterSans font-bold  '}>
                {props.title}
            </h1>

            <div className={'border-b-[12px] border-gray-300 w-1/3 opacity-40'}>

            </div>

            {props.children}


        </div>

    );
}

export default Section
