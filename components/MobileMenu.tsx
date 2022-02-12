import cn from 'classnames';
import Link from 'next/link';
import useDelayedRender from 'use-delayed-render';
import React, {useEffect, useState} from 'react';
import styles from 'styles/mobile-menu.module.css';

export default function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {mounted: isMenuMounted, rendered: isMenuRendered} = useDelayedRender(
        isMenuOpen,
        {
            enterDelay: 20,
            exitDelay: 300
        }
    );

    function toggleMenu() {
        if (isMenuOpen) {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
        } else {
            setIsMenuOpen(true);
            document.body.style.overflow = 'hidden';
        }
    }

    useEffect(() => {
        return function cleanup() {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <>
            <button
                className={cn(styles.burger, 'visible xl:hidden')}
                aria-label="Toggle menu"
                type="button"
                onClick={toggleMenu}
            >
                <MenuIcon data-hide={isMenuOpen}/>
                <CrossIcon data-hide={!isMenuOpen}/>
            </button>
            {isMenuMounted && (
                <ul
                    className={cn(
                        styles.menu,
                        'flex flex-col fixed bg-black text-pink filter drop-shadow-xs font-semibold ',
                        isMenuRendered && styles.menuRendered
                    )}
                >
                    <li  style={{transitionDelay: '0ms'}}>
                        <Link href="/">
                            <a className="flex w-auto pb-4 pl-4 mt-48 mr-6">HOME</a>
                        </Link>
                    </li>
                    <li style={{transitionDelay: '175ms'}}>
                        <Link href="/merch">
                            <a className="flex w-auto pb-4 pl-4 mr-6">MERCH</a>
                        </Link>
                    </li>
                    <li style={{transitionDelay: '200ms'}}>
                        <Link href="/contact">
                            <a className="flex w-auto pb-4 pl-4 mr-6">CONTACT</a>
                        </Link>
                    </li>
                    <li style={{transitionDelay: '250ms'}}>
                        <Link href="/privacy">
                            <a className="flex w-auto pb-4 pl-4 mr-6">PRIVACY POLICY</a>
                        </Link>
                    </li>
                    <li style={{transitionDelay: '275ms'}}>
                        <Link href="/imprint">
                            <a className="flex w-auto pb-4 pl-4 mr-6">IMPRINT</a>
                        </Link>
                    </li>
                </ul>
            )}
        </>
    );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
    return (
    <svg className={"absolute w-full h-full"} width="100%" height="100%"  viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg"  {...props}>
        <g filter="url(#filter0_d_532_380)">
            <rect x="4" y="4" width="35.1724" height="3" rx="1.5" fill="#FDC4F0"/>
            <rect x="4" y="4" width="35.1724" height="3" rx="1.5" fill="#FDC4F0"/>
        </g>
        <g filter="url(#filter1_d_532_380)">
            <rect x="4" y="17.5" width="35.1724" height="3" rx="1.5" fill="#FDC4F0"/>
            <rect x="4" y="17.5" width="35.1724" height="3" rx="1.5" fill="#FDC4F0"/>
        </g>
        <g filter="url(#filter2_d_532_380)">
            <rect x="4" y="31" width="35.1724" height="3" rx="1.5" fill="#FDC4F0"/>
            <rect x="4" y="31" width="35.1724" height="3" rx="1.5" fill="#FDC4F0"/>
        </g>
        <defs>
            <filter id="filter0_d_532_380" x="0" y="0" width="43.1719" height="11" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.72 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_532_380"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_532_380" result="shape"/>
            </filter>
            <filter id="filter1_d_532_380" x="0" y="13.5" width="43.1719" height="11" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.72 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_532_380"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_532_380" result="shape"/>
            </filter>
            <filter id="filter2_d_532_380" x="0" y="27" width="43.1719" height="11" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.72 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_532_380"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_532_380" result="shape"/>
            </filter>
        </defs>
    </svg>
    );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
    return (
        <svg className={"absolute w-full h-full"} width="100%" height="100%"  viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g filter="url(#filter0_d_1_143)">
                <rect x="4.91046" y="33.3814" width="45.0341" height="3" rx="1.5" transform="rotate(-40.7247 4.91046 33.3814)" fill="#FDC4F0"/>
                <rect x="4.91046" y="33.3814" width="45.0341" height="3" rx="1.5" transform="rotate(-40.7247 4.91046 33.3814)" fill="#FDC4F0"/>
            </g>
            <g filter="url(#filter1_d_1_143)">
                <rect x="5.92356" y="4.22772" width="45.4631" height="3" rx="1.5" transform="rotate(39.8804 5.92356 4.22772)" fill="#FDC4F0"/>
                <rect x="5.92356" y="4.22772" width="45.4631" height="3" rx="1.5" transform="rotate(39.8804 5.92356 4.22772)" fill="#FDC4F0"/>
            </g>
            <defs>
                <filter id="filter0_d_1_143" x="1.52586" y="0.615417" width="42.8557" height="38.4241" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.72 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_143"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_143" result="shape"/>
                </filter>
                <filter id="filter1_d_1_143" x="0.612816" y="0.840515" width="43.5855" height="38.2269" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.72 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_143"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_143" result="shape"/>
                </filter>
            </defs>
        </svg>


    );
}
