import React, {useEffect, useState} from 'react'
import CrossFadeImage from "./CrossFadeImage";

interface IProps {
    children?: any
}

const CrossFade = (props: IProps) => {


    enum animStatus {

        ONE,
        TWO,
        THREE,
        FOUR,
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
                setAnimStatusInstance(animStatus.FOUR);
            } else if (animStatusInstance === animStatus.FOUR) {
                setAnimStatusInstance(animStatus.ONE);
            }
        }, 7000);
    }, [animStatusInstance]);

    useEffect(() => {
        setAnimStatusInstance(animStatus.ONE);
    }, [])
    return (
        <div className={'w-screen  flex flex-col items-center h-[calc(100vh)] relative overflow-hidden  '}>
            {props.children}
            <CrossFadeImage animate={animStatusInstance === animStatus.ONE || animStatusInstance === animStatus.TWO} animateOpacity={animStatusInstance === animStatus.ONE} backgroundImage={("bg-[url('/static/images/sebowana.png')] ")}
                            animation={"translate-x-12"}/>
            <CrossFadeImage animate={animStatusInstance === animStatus.TWO || animStatusInstance === animStatus.THREE} animateOpacity={animStatusInstance === animStatus.TWO} backgroundImage={("bg-[url('/static/images/wana.png')] ")}
                            animation={"-translate-x-12"}/>
            <CrossFadeImage animate={animStatusInstance === animStatus.THREE || animStatusInstance === animStatus.FOUR} animateOpacity={animStatusInstance === animStatus.THREE} backgroundImage={("bg-[url('/static/images/seboguitar.png')] ")}
                            animation={"translate-y-12"}/>
            <CrossFadeImage animate={animStatusInstance === animStatus.FOUR || animStatusInstance === animStatus.ONE} animateOpacity={animStatusInstance === animStatus.FOUR} backgroundImage={("bg-[url('/static/images/mask.png')] ")}
                            animation={"-translate-y-12"}/>


        </div>


    );
}

export default CrossFade
