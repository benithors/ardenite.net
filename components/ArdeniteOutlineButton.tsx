import React from 'react'


interface IProps {

    title:string
}

const ArdeniteOutlineButton = (props: IProps) => {

    return (
        <div className={"pt-7 text-pink leading-normal filter drop-shadow-md font-semibold whitespace-pre"}>
            <h1>{props.title}</h1>


        </div>


    );
}

export default ArdeniteOutlineButton
