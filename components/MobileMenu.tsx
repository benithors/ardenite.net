import cn from 'classnames';
import Link from 'next/link';
import useDelayedRender from 'use-delayed-render';
import {useEffect, useState} from 'react';
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
                className={cn(styles.burger, 'visible md:hidden')}
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
                        'flex flex-col fixed  bg-black text-pink filter drop-shadow-xs font-semibold',
                        isMenuRendered && styles.menuRendered
                    )}
                >
                    <li className={"flex w-auto pb-4"} style={{transitionDelay: '150ms'}}>
                        <Link href="/">
                            <a className="flex ">HOME</a>
                        </Link>
                    </li>
                    <li style={{transitionDelay: '175ms'}}>
                        <Link href="/merch">
                            <a className="flex w-auto pb-4">MERCH</a>
                        </Link>
                    </li>
                    <li style={{transitionDelay: '200ms'}}>
                        <Link href="/contact">
                            <a className="flex w-auto pb-4">CONTACT</a>
                        </Link>
                    </li>
                    <li style={{transitionDelay: '250ms'}}>
                        <Link href="/privacy">
                            <a className="flex w-auto pb-4">PRIVACY POLICY</a>
                        </Link>
                    </li>
                    <li style={{transitionDelay: '275ms'}}>
                        <Link href="/imprint">
                            <a className="flex w-auto pb-4">IMPRINT</a>
                        </Link>
                    </li>
                </ul>
            )}
        </>
    );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
    return (
        <svg
            className="h-5 w-5 absolute text-pink"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                d="M2.5 7.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.5 12.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
    return (
        <svg
            className="h-10 w-10 absolute text-pink"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
            {...props}
        >
            <path d="M18 6L6 18"/>
            <path d="M6 6l12 12"/>
        </svg>
    );
}
