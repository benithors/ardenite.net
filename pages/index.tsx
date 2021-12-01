import Image from 'next/image'
import ardeniteDuo from "/public/static/images/ardenite-duo.png";
import ArdeniteText from "../components/ArdeniteText";

const IndexPage = () => (
    <div className={"flex flex-col px-8 sm:px-14 md:px-36"}>

<div className={"w-3/6"}>
    <ArdeniteText/>

</div>

        <div>
            <div className={"absolute z-10 md:text-2xl"}>
                    <div className={"text-pink leading-snug filter drop-shadow-md font-semibold whitespace-normal md:whitespace-pre "}>
                        DARK SYNTH {'\n'}POP ROCK
                    </div>
                    <div className={"text-pink leading-normal filter drop-shadow-md font-semibold md:whitespace-pre"}>
                       DUO FROM {'\n'}VIENNA
                    </div>

            </div>


            <div className={"w-100 h-100 mt-5"}>

                <Image
                    src={ardeniteDuo}
                    alt="Ardenite"
                    objectFit={"cover"}
                />
            </div>


            <div className={"text-pink leading-normal filter drop-shadow-md font-semibold"}>
                WORK IN PROGRESS / SOON NEW WEBSITE
            </div>
        </div>

        {/*<div className={"text-pink leading-normal"}>*/}
        {/*    <Link href="https://instagram.com/ardeniteofficial" passHref={true}>*/}
        {/*        <Image*/}
        {/*            src={insta}*/}
        {/*            alt="Instagram"*/}
        {/*        />*/}
        {/*    </Link>*/}


        {/*</div>*/}
    </div>
)

export default IndexPage

