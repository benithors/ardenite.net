import Image from 'next/image'
import ardeniteDuo from "/public/static/images/ardenite-duo.png";


import Header from "../components/Header";
import ArdeniteOutlineButton from "../components/ArdeniteOutlineButton";

const IndexPage = () => (
    <div className={"flex  justify-center w-full  h-screen min-w-max"}>
        <div className={"flex flex-col px-8  w-full max-w-2xl  "}>
            <Header/>

            <div className={"px-3"}>
                <div className={"absolute z-10 md:text-2xl "}>
                    <div className={"text-pink leading-snug filter drop-shadow-md font-semibold whitespace-normal whitespace-pre "}>
                        DARK SYNTH {'\n'}POP ROCK
                    </div>
                    <div className={"text-pink leading-normal filter drop-shadow-md font-semibold whitespace-pre"}>
                        DUO FROM {'\n'}VIENNA
                    </div>
                </div>

                    <Image
                        src={ardeniteDuo}
                        alt="Ardenite"
                        layout={"responsive"}
                        objectFit={"contain"}
                        objectPosition={"left"}
                    />

                <div className={"flex flex-col px-8 "}
                    >
                    <ArdeniteOutlineButton title={"LISTEN NOW"}/>
                    <ArdeniteOutlineButton title={"WATCH NOW"}/>
                    <ArdeniteOutlineButton title={"BUY NOW"}/>


                </div>


            </div>

        </div>


    </div>
)

export default IndexPage

