import Image from 'next/image'
import ardeniteDuo from "/public/static/images/ardenite-duo.png";


import Header from "../components/Header";

const IndexPage = () => (
    <div className={"flex  justify-center w-full  h-screen"}>
        <div className={"flex flex-col px-8 xl:px-64  w-full max-w-2xl  "}>
            <Header/>

            <div className={"px-3"}>
                <div className={"absolute z-10 md:text-2xl  xl:text-xl"}>
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


            </div>

        </div>


    </div>
)

export default IndexPage

