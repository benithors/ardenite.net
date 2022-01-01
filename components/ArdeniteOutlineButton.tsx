import React from 'react'


interface IProps {

    title: string
}

const ArdeniteOutlineButton = (props: IProps) => {

    return (


        <div className={"lightBox text-center text-pink filter drop-shadow-xs font-semibold mt-8 p-5 text-3xl"}>

            <h1 className={"card"}>{props.title}</h1>

        </div>


    );
}

export default ArdeniteOutlineButton
