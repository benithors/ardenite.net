import React from 'react'


interface IProps {

}

const ArdeniteMenu = (props: IProps) => {

    return (
        <div className={"hidden sm:flex flex-row md:text-lg justify-between"}>

            <div className={"text-pink leading-normal filter drop-shadow-md font-semibold"}>
             Home
            </div>
            <div className={"text-pink leading-normal filter drop-shadow-md font-semibold pl-8 "}>
             Merch
            </div>
            <div className={"text-pink leading-normal filter drop-shadow-md font-semibold pl-8 "}>
                Contact
            </div>
        </div>


    );
}

export default ArdeniteMenu
