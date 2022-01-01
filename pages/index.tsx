import Image from 'next/image'
import ardeniteDuo from "/public/static/images/ardenite-duo.png";


import Header from "../components/Header";
import ArdeniteOutlineButton from "../components/ArdeniteOutlineButton";

const IndexPage = () => (
    <div className={"flex justify-center min-w-full h-screen min-w-max "}>
        <div className={"flex flex-col px-8 sm:px-16  w-full max-w-screen-xl"}>
            <Header/>

            <div >

                <div className={"flex flex-col sm:flex-row "}
                    >
                    <div className={"absolute z-10  text-2xl md:text-2xl leading-6 px-4  "}>
                        <div className={"text-pink filter drop-shadow-xs font-semibold  whitespace-pre"}>
                            DARK SYNTH {'\n'}POP ROCK
                        </div>
                        <div className={"text-pink filter drop-shadow-xs font-semibold  whitespace-pre"}>
                            DUO FROM {'\n'}VIENNA
                        </div>
                    </div>
                    <div className={"pl-16 pt-7 sm:w-1/2 sm:order-2"}>

                        <Image
                            src={ardeniteDuo}
                            alt="Ardenite"
                            layout={"responsive"}
                            objectFit={"contain"}
                            objectPosition={"left"}
                        />

                    </div>

                    <div className={"flex flex-col sm:w-1/2 px-8 sm:px-0 sm:self-end sm:px-4"}
                    >

                        <ArdeniteOutlineButton title={"LISTEN NOW"}/>
                        <ArdeniteOutlineButton title={"WATCH NOW"}/>
                        <ArdeniteOutlineButton title={"BUY NOW"}/>


                    </div>

                </div>



            </div>

        </div>


    </div>
)

export default IndexPage

