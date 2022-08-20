import React from 'react'
import {ArrowUpRight} from "react-feather";
import Image from "next/image";

interface IProps {
    direction: string;
    image: any
    subtitle: string;
    title: string;
    children:any
}

const ArdeniteEntry = (props: IProps) => {

    return (
        <div className={'bg-white w-full h-full flex flex-col-reverse md:flex-row'}>

            <div className={'text-white bg-teal-900 w-full md:w-1/2 flex flex-col  p-12 '}>

                <div className={' flex flex-col  justify-center items-center md:items-start space-y-8'}>

                    <h2 className={'opacity-70'}>
                        {props.subtitle}
                    </h2>

                    <h1 className={'text-6xl font-InterSans font-bold '}>
                        {props.title}
                    </h1>

                    <div className={'border-b-[12px] border-gray-300 w-1/3 opacity-40'}>

                    </div>


                  <div>
                      {props.children}
                  </div>
                    <div className={'w-full flex flex-col md:items-start items-center'}>
                        <button className={'bg-white w-2/3 rounded-full text-black text-2xl font-InterSans p-4'}>
                            <div className={'flex flex-row  justify-center opacity-70 '}>

                                Watch It <ArrowUpRight className={'translate-x-2 translate-y-1 opacity-50'}/>
                            </div>
                        </button>
                    </div>


                </div>

            </div>
            <div className={'bg-red-100  w-full  min-h-[calc(100vh/2)] md:min-h-fit relative'}>


                <Image src={props.image} layout="fill"
                       className="object-center object-cover pointer-events-none"
                       objectFit="cover">

                </Image>
            </div>
        </div>


    );
}

export default ArdeniteEntry
