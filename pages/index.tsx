import Image from 'next/image'
import ardeniteDuo from "/public/static/images/ardenite-duo.png";


import Header from "../components/Header";

const IndexPage = () => (
    <div className={"flex flex-col px-8"}>
            <Header/>

{/*            <div className={"absolute z-10 md:text-2xl  xl:text-xl"}>
                <div className={"text-pink leading-snug filter drop-shadow-md font-semibold whitespace-normal md:whitespace-pre "}>
                    DARK SYNTH {'\n'}POP ROCK
                </div>
                <div className={"text-pink leading-normal filter drop-shadow-md font-semibold md:whitespace-pre"}>
                    DUO FROM {'\n'}VIENNA
                </div>
            </div>

            <div className={"relative w-full h-full "}>
                <Image
                    src={ardeniteDuo}
                    alt="Ardenite"
                    layout={"fill"}
                    objectFit={"contain"}
                    objectPosition={"left"}
                />
            </div>*/}
    </div>
)

export default IndexPage

