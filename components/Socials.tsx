import React from "react";
import {Globe, Linkedin, Mail, Twitter} from "react-feather";
import {getOpacityFromBottomTransition} from "../lib/Transitions";

interface IProps {
    inView: boolean;
    email?: string;
    youtube?: string;
    facebook?: string;
    instagram?: string;
    userName: string;
}

const Socials = (props: IProps) => {
    return (
        <>
            {props.email && (
                <a
                    target={"_blank"}
                    rel="noreferrer"
                    aria-label={"Write an email to " + props.userName}
                    href={"mailto:" + props.email}
                    className={"text-white hover:text-brand-pink"}
                >
                    <Mail
                        className={
                            "stroke-brand-pink hover:scale-110 " +
                            getOpacityFromBottomTransition(props.inView)
                        }
                    ></Mail>
                </a>
            )}
            {props.youtube && (
                <a
                    target={"_blank"}
                    rel="noreferrer"
                    aria-label={"Open youtube of " + props.userName}
                    href={props.youtube}
                    className={"text-white hover:text-brand-pink"}
                >

                    <svg className={
                        "stroke-brand-pink hover:scale-110 " +
                        getOpacityFromBottomTransition(props.inView)
                    } width="50" height="40" viewBox="0 -3 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_532_305)">
                            <path
                                d="M42.567 10.6993C42.369 9.90837 41.9658 9.18364 41.3981 8.59836C40.8303 8.01308 40.1182 7.58799 39.3336 7.36602C36.467 6.66602 25.0003 6.66602 25.0003 6.66602C25.0003 6.66602 13.5336 6.66602 10.667 7.43268C9.88238 7.65466 9.17026 8.07975 8.60255 8.66503C8.03483 9.2503 7.63162 9.97503 7.43364 10.766C6.90899 13.6753 6.65236 16.6265 6.66697 19.5827C6.64827 22.5611 6.90491 25.5348 7.43364 28.466C7.6519 29.2324 8.06415 29.9296 8.63054 30.4901C9.19694 31.0507 9.89834 31.4557 10.667 31.666C13.5336 32.4327 25.0003 32.4327 25.0003 32.4327C25.0003 32.4327 36.467 32.4327 39.3336 31.666C40.1182 31.444 40.8303 31.0189 41.3981 30.4337C41.9658 29.8484 42.369 29.1237 42.567 28.3327C43.0876 25.4453 43.3442 22.5166 43.3336 19.5827C43.3523 16.6043 43.0957 13.6305 42.567 10.6993V10.6993Z"
                                stroke="#80FFEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21.25 25.0328L30.8333 19.5828L21.25 14.1328V25.0328Z" stroke="#80FFEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_532_305" x="0" y="-5" width="50" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="2.5"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.205 0 0 0 0 0.933323 0 0 0 0 1 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_532_305"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_532_305" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </a>
            )}
            {props.facebook && (
                <a
                    target={"_blank"}
                    rel="noreferrer"
                    href={props.facebook}
                    aria-label={"Open facebook of " + props.userName}
                    className={"text-white hover:text-brand-pink"}
                >
                    <svg className={
                        "stroke-brand-pink hover:scale-110 " +
                        getOpacityFromBottomTransition(props.inView)
                    } width="40" height="46" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_532_309)">
                            <path
                                d="M29.9993 6.33398H24.9993C22.7892 6.33398 20.6696 7.21196 19.1068 8.77476C17.544 10.3376 16.666 12.4572 16.666 14.6673V19.6673H11.666V26.334H16.666V39.6673H23.3327V26.334H28.3327L29.9993 19.6673H23.3327V14.6673C23.3327 14.2253 23.5083 13.8014 23.8208 13.4888C24.1334 13.1762 24.5573 13.0007 24.9993 13.0007H29.9993V6.33398Z"
                                stroke="#80FFEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_532_309" x="-5" y="-2" width="50" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="2.5"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.205 0 0 0 0 0.933323 0 0 0 0 1 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_532_309"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_532_309" result="shape"/>
                            </filter>
                        </defs>
                    </svg>

                </a>
            )}
            {props.instagram && (
                <a
                    href={props.instagram}
                    target={"_blank"}
                    rel="noreferrer"
                    aria-label={"Open instagram of " + props.userName}
                    className={"text-white hover:text-brand-pink"}
                >
                    <svg className={
                        "stroke-brand-pink hover:scale-110 " +
                        getOpacityFromBottomTransition(props.inView)
                    } width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_532_311)">
                            <path
                                d="M31.334 6.33398H14.6673C10.0649 6.33398 6.33398 10.0649 6.33398 14.6673V31.334C6.33398 35.9364 10.0649 39.6673 14.6673 39.6673H31.334C35.9364 39.6673 39.6673 35.9364 39.6673 31.334V14.6673C39.6673 10.0649 35.9364 6.33398 31.334 6.33398Z"
                                stroke="#80FFEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M29.6655 21.9505C29.8712 23.3376 29.6343 24.7542 28.9885 25.9989C28.3426 27.2435 27.3208 28.2529 26.0682 28.8833C24.8157 29.5137 23.3963 29.7332 22.0118 29.5104C20.6274 29.2876 19.3485 28.634 18.3569 27.6424C17.3654 26.6509 16.7117 25.372 16.489 23.9875C16.2662 22.6031 16.4856 21.1837 17.1161 19.9311C17.7465 18.6786 18.7558 17.6567 20.0005 17.0109C21.2452 16.3651 22.6618 16.1281 24.0489 16.3338C25.4637 16.5436 26.7736 17.2029 27.785 18.2143C28.7964 19.2258 29.4557 20.5356 29.6655 21.9505Z"
                                stroke="#80FFEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M32.166 13.834H32.1827" stroke="#80FFEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>

                        <defs>
                            <filter id="filter0_d_532_311" x="-2" y="-2" width="50" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="2.5"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.205 0 0 0 0 0.933323 0 0 0 0 1 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_532_311"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_532_311" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </a>
            )}
        </>
    );
};

export default Socials;
