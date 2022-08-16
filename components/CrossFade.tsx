import React, {useEffect, useState} from 'react'
import Image from "next/image";
import SeboWana from "../public/static/images/SeboWana.png";

import Cyberpunk from "../public/static/images/ARDENITE-PHOTO.png";

import Mask from "../public/static/images/mask.png";
import {useTotalVisibilityTimer} from "../lib/useTotalVisibilityTimer";
import {usePageVisibility} from "../lib/usePageVisibility";
import CrossFadeImage from "./CrossFadeImage";

interface IProps {

}

const CrossFade = (props: IProps) => {


    enum animStatus {

        ONE,
        TWO,
        THREE,
        NONE
    }

    const [animStatusInstance, setAnimStatusInstance] = useState<animStatus>(
        animStatus.NONE
    );

    useEffect(() => {
        //set animStatusInstance to two after 4 seconds
        setTimeout(function () {
            if (animStatusInstance === animStatus.ONE) {
                setAnimStatusInstance(animStatus.TWO);
            } else if (animStatusInstance === animStatus.TWO) {
                setAnimStatusInstance(animStatus.THREE);
            } else if (animStatusInstance === animStatus.THREE) {
                setAnimStatusInstance(animStatus.ONE);
            }
        }, 5000);
    }, [animStatusInstance]);

    useEffect(() => {
        setAnimStatusInstance(animStatus.ONE);
    },[])
    return (
        <div className={'w-screen h-[calc(100vh-100px)]   overflow-hidden'}>
            <CrossFadeImage animation={'translate-x-32 '} counterAnimation={'-translate-x-32 '} className={'absolute'} animate={animStatusInstance === animStatus.ONE} image={SeboWana}/>
            <CrossFadeImage animation={'translate-x-32'} counterAnimation={'-translate-x-32'} className={'absolute'} animate={animStatusInstance === animStatus.TWO} image={Cyberpunk}/>
            <CrossFadeImage animation={'-translate-y-32'} counterAnimation={"translate-y-32"} className={''} animate={animStatusInstance === animStatus.THREE} image={Mask}/>


        </div>


    );
}

export default CrossFade
