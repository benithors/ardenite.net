import React, {useEffect, useState} from 'react'
import SeboWana from "../public/static/images/SeboWana.png";
import SeboGuitar from "../public/static/images/SeboGuitar.png";


import Mask from "../public/static/images/mask.png";
import CrossFadeImage from "./CrossFadeImage";

interface IProps {
    children?: any
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
        setTimeout(function () {
            if (animStatusInstance === animStatus.ONE) {
                setAnimStatusInstance(animStatus.TWO);
            } else if (animStatusInstance === animStatus.TWO) {
                setAnimStatusInstance(animStatus.THREE);
            } else if (animStatusInstance === animStatus.THREE) {
                setAnimStatusInstance(animStatus.ONE);
            }
        }, 7000);
    }, [animStatusInstance]);

    useEffect(() => {
        setAnimStatusInstance(animStatus.ONE);
    }, [])
    return (
        <div className={' w-screen flex flex-col items-center h-[calc(100vh-100px)] relative overflow-hidden  '}>
            {props.children}
            <CrossFadeImage priority={true} offset={'-translate-x-[100px]'} animation={' translate-x-[100px] '} className={'absolute  '} animate={animStatusInstance === animStatus.ONE} image={SeboWana}/>
            <CrossFadeImage priority={false} offset={'-translate-x-[100px]'} animation={' translate-x-[100px] '} className={'absolute'} animate={animStatusInstance === animStatus.TWO} image={Mask}/>
            <CrossFadeImage priority={false} offset={ '-translate-y-[40px] '} animation={'translate-y-[40px] '} className={'absolute'} animate={animStatusInstance === animStatus.THREE} image={SeboGuitar}/>


        </div>


    );
}

export default CrossFade
