import React from 'react'

import Image from "next/image";

interface IProps {
    animate: boolean;
    image: any
    className?: string;
    animation: string;
    counterAnimation:string;
}
/*








* */
const CrossFadeImage = (props: IProps) => {
    return (
        <div className={'w-full h-full overflow-hidden  transition-opacity duration-[2000ms] ' +' '+ props.className + ' ' + (props.animate ? ' opacity-100' : 'opacity-0')}>



                <Image src={props.image} layout={'responsive'} className={'overflow-hidden transition-transform ease-linear -translate-y-1/4   duration-[10000ms] scale-125   ' + ' '

                    + (props.animate ? props.animation + ' opacity-100  ' :  'delay-1000')
                } objectFit={'fill'}/>


        </div>


    );
}

export default CrossFadeImage
