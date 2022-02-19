import React, {useState} from 'react'
import {KeenSliderPlugin, useKeenSlider} from "keen-slider/react";
import Image from 'next/image'
import imageOne from '/public/static/store/1.png'
import ArdeniteOutlineButton from "./ArdeniteOutlineButton";

interface IProps {

}

const AdaptiveHeight: KeenSliderPlugin = (slider) => {
    function updateHeight() {
        /*        slider.container.style.height =
                    slider.slides[slider.track.details.rel].offsetHeight + "px";*/
    }

    slider.on("created", updateHeight)
    slider.on("slideChanged", updateHeight)
}

const ArdeniteSlider = (props: IProps) => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
            initial: 5,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
            created() {
                setLoaded(true)
            },
            slides: {
                origin: "center",
                perView: "auto",
                spacing: 40,
            },
        loop:true,
        },

        [AdaptiveHeight]
    )


    return (

        <div className="relative w-full flex flex-col items-center overflow-x-hidden mt-14 lightBox">


            <div className="relative navigation-wrapper pt-8 pb-8 h-full w-screen overflow-clip ">
                <div ref={sliderRef} className="keen-slider flex flex-row h-full ">

                    {[...Array(15)].map((x, i) =>
                        <div key={i} className="keen-slider__slide flex flex-col text-turquoise  min-w-full h-fit md:min-w-[10%]">
                            <div className={"text-2xl md:text-2xl leading-6"}>
                                Ardenite Shirt
                            </div>
                            <div className={"lightBox bg-shopPink h-fit w-full mt-8"}>
                                <Image
                                    src={imageOne}
                                    alt="Ardenite"
                                    layout='responsive'
                                    objectFit='contain'
                                />

                            </div>
                            <div className={"flex flex-row justify-between text-2xl md:text-2xl leading-6 text-turquoise"}>
                                <div>
                                    S/M/L/XL
                                </div>
                                <div>
                                    €15.00
                                </div>
                            </div>

                        </div>
                    )}


                </div>


            </div>
            <div className={"w-2/4 md:w-1/4 mb-8"}>
                <ArdeniteOutlineButton link={"https://ardenite.bandcamp.com/"} title={"ORDER NOW"}/>
            </div>
            {loaded && instanceRef.current && (
                <>
                    <ArdeniteLeftArrow
                        left
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                        disabled={currentSlide === 0}
                    />

                    <ArdeniteRightArrow
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                        disabled={
                            currentSlide ===
                            instanceRef.current.track.details.slides.length - 1
                        }
                    />
                </>
            )}

        </div>

    );
}

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${
                props.left ? "arrow--left" : "arrow--right"
            } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
            )}
        </svg>


    )
}

function ArdeniteRightArrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <button className={"w-1/6 right-0 h-full absolute"}>
            <svg
                onClick={props.onClick}
                width={'100%'} height={'100%'} viewBox="0 0 157 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_ddd_234_549)">
                    <path
                        d="M54.533 138.756L68.4126 108.103C69.9178 104.779 69.9566 100.975 68.5194 97.621L53.9618 63.6446C50.8158 56.302 60.4466 50.2666 65.6826 56.2995L101.945 98.0801C104.277 100.768 104.222 104.777 101.817 107.4L66.0685 146.375C60.6882 152.241 51.2498 146.007 54.533 138.756Z"
                        stroke="#80FFEC" stroke-width="6"/>
                </g>
                <defs>
                    <filter id="filter0_ddd_234_549" x="0.321289" y="0.808594" width="156.337" height="200.916" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="25"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.501961 0 0 0 0 1 0 0 0 0 0.92549 0 0 0 0.54 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_234_549"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.205 0 0 0 0 0.933323 0 0 0 0 1 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="effect1_dropShadow_234_549" result="effect2_dropShadow_234_549"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="15"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.205 0 0 0 0 0.933323 0 0 0 0 1 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="effect2_dropShadow_234_549" result="effect3_dropShadow_234_549"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_234_549" result="shape"/>
                    </filter>
                </defs>
            </svg>

        </button>


    )
}

function ArdeniteLeftArrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <button className={"w-1/6 left-0  h-full absolute"}>
            <svg
                onClick={props.onClick}
                 width={'100%'} height={'100%'} viewBox="0 0 157 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_ddd_234_544)">
                    <path
                        d="M90.9901 56.1247C96.3703 50.2587 105.809 56.4925 102.526 63.7436L88.646 94.3969C87.1408 97.7211 87.102 101.525 88.5392 104.879L103.097 138.855C106.243 146.198 96.612 152.233 91.3759 146.201L55.1141 104.42C52.7816 101.732 52.8366 97.7226 55.2419 95.1001L90.9901 56.1247Z"
                        stroke="#80FFEC" stroke-width="6"/>
                </g>
                <defs>
                    <filter id="filter0_ddd_234_544" x="0.400391" y="0.775391" width="156.337" height="200.916" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="25"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.501961 0 0 0 0 1 0 0 0 0 0.92549 0 0 0 0.54 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_234_544"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.205 0 0 0 0 0.933323 0 0 0 0 1 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="effect1_dropShadow_234_544" result="effect2_dropShadow_234_544"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="15"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.205 0 0 0 0 0.933323 0 0 0 0 1 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="effect2_dropShadow_234_544" result="effect3_dropShadow_234_544"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_234_544" result="shape"/>
                    </filter>
                </defs>
            </svg>

        </button>


    )
}


export default ArdeniteSlider
