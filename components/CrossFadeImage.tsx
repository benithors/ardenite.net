import React from 'react'

interface IProps {
    animate: boolean;
    className?: string;
    animation: string;
    backgroundImage: string;
    animateOpacity: boolean;
}

const CrossFadeImage = (props: IProps) => {
    return (

        <div className={('w-[200%] absolute h-full   duration-[3000ms] transition-opacity ') + (props.animateOpacity ? ' opacity-100 ' : ' opacity-0 ')}>
            <div className={(" w-full bg-no-repeat  transition-transform ease-linear duration-[10000ms]  bg-center  h-full  " + props.backgroundImage + " scale-125 " + (props.animate && ' ' + props.animation))}/>

        </div>

    );
}

export default CrossFadeImage
