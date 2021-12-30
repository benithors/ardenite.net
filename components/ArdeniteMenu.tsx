import React from 'react'


interface IProps {

}

const ArdeniteMenu = (props: IProps) => {

    return (
        <div className={"hidden  md:flex flex-row md:text-lg xl:text-3xl"}>

            <div className={"text-pink leading-normal filter drop-shadow-md font-semibold "}>
             Home
            </div>
            <div className={"text-pink leading-normal filter drop-shadow-md font-semibold pl-8 xl:pl-16"}>
             Merch
            </div>
            <div className={"text-pink leading-normal filter drop-shadow-md font-semibold pl-8  xl:pl-16"}>
                Contact
            </div>
        </div>


    );
}

export default ArdeniteMenu
