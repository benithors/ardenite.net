import React, {useState} from "react";
import {ChevronUp} from "react-feather";
import ContentContainer from "./ContentContainer";
import GradientHeader from "./GradientHeader";
import {useInView} from "react-intersection-observer";

export const FooterBar = () => {
    const socialsInView = useInView({
        triggerOnce: true,
        rootMargin: "0px 0px",
    });
    const [isImprintOpen, setIsImprintOpen] = useState(false);
    return (
        <div
            ref={socialsInView.ref}
            className={"flex flex-col items-center  text-white"}
        >
            <ContentContainer>
                <div
                    className={
                        "flex h-full w-full  flex-col items-center text-center  justify-between py-8  pb-40 text-xs"
                    }
                >
                    <button
                        aria-label={"Show imprint"}
                        onClick={() => setIsImprintOpen((prevState) => !prevState)}
                        className={"flex  flex-row pt-8  pb-8"}
                    >
                        Imprint & Privacy Policy
                        <ChevronUp
                            className={
                                "-translate-y-1 transition-transform   duration-1000 " +
                                (!isImprintOpen && "rotate-180")
                            }
                        ></ChevronUp>
                    </button>

                    <div
                        className={
                            "flex flex-col items-center  overflow-hidden  transition-[height] transition-transform duration-1000 " +
                            (isImprintOpen ? "h-[600px]  " : " h-[0px] ")
                        }
                    >
                        <GradientHeader>ARDENITE</GradientHeader>
                        <div className={" "}>

                            Oana Moraru and Sebastian Grün Vienna
                        </div>

                        <GradientHeader>Contact</GradientHeader>
                        <div>+43 699 150 28996</div>
                        <a
                            href={"mailto:office@ardenite.net"}
                            className={"underline "}
                        >
                            office@ardenite.net
                        </a>
                        <GradientHeader>Disclosure</GradientHeader>
                        According to § 25 media law:
                        Owners of the site are ARDENITE (Oana Moraru and Sebastian Grün).
                        The homepage is for the presentation of the musicians and the sale of their products.

                        <GradientHeader>Legal responsibility</GradientHeader>
                        <div>
                            The contents of these pages are regularly created and maintained. For the correctness, completeness and topicality of the contents, as well as those of third party websites, that were linked on this page, no guarantee can be
                            given.
                            The content of the linked pages is always the responsibility of the respective provider or operator of the pages.
                        </div>
                    </div>
                    <div className={"pt-8 text-xs"}>
                        Copyright © {new Date().getFullYear()} Ardenite. All
                        rights reserved.
                    </div>
                </div>
            </ContentContainer>
        </div>
    );
};
