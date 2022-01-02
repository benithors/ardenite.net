import Image from 'next/image'
import ardeniteDuo from "/public/static/images/ardenite-duo.png";


import Header from "../components/Header";
import ArdeniteOutlineButton from "../components/ArdeniteOutlineButton";
import ArdeniteHeading from "../components/ArdeniteHeading";

const IndexPage = () => (
    <div className={"flex justify-center min-w-full h-screen min-w-max "}>
        <div className={"flex flex-col px-8 sm:px-16  w-full max-w-screen-xl"}>
            <Header/>

            <div>

                <div className={"flex flex-col sm:flex-row "}
                >


                    <div className={"absolute z-10 px-4 sm:invisible"}>
                        <ArdeniteHeading/>
                    </div>
                    <div className={"pl-16 pt-7 sm:pl-5 sm:basis-1/2 sm:order-2 flex flex-col-reverse "}>

                        <Image
                            src={ardeniteDuo}
                            alt="Ardenite"
                            layout={"responsive"}
                            objectFit={"contain"}
                        />

                    </div>



                    <div className={"flex flex-col justify-between sm:basis-2/5 px-8 sm:px-0  sm:px-4 "}
                    >
                        <div className={"hidden sm:flex"}>
                            <ArdeniteHeading/>
                        </div>

                        <div className={""}>
                            <ArdeniteOutlineButton title={"LISTEN NOW"}/>
                            <ArdeniteOutlineButton title={"WATCH NOW"}/>
                            <ArdeniteOutlineButton title={"BUY NOW"}/>
                        </div>


                    </div>

                </div>


            </div>

        </div>


    </div>
)

export default IndexPage

