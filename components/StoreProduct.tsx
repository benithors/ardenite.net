import React from 'react'
import Image from "next/image";


interface IProps {
    productName: string;
    price: string;
    sizes: string;
    image;

}

const StoreProduct = (props: IProps) => {

    return (
        <div id={"merch"} className="keen-slider__slide flex flex-col text-turquoise h-fit
        min-w-[50%]
        sm:min-w-[60%]
        md:min-w-[30%]
        l:md:min-w-[100%]
        xl:md:min-w-[15%]">
            <div className={"text-2xl md:text-2xl leading-6"}>
                {props.productName}
            </div>
            <div className={"lightBoxPinkShop bg-shopPink h-fit mt-8 flex flex-row justify-center"}>
                <Image
                    src={props.image}
                    alt="Merch"
                    layout='intrinsic'
                />

            </div>
            <div className={"flex flex-row justify-between text-1xl md:text-2xl leading-6 text-turquoise pt-3"}>
                <div className={"text-pink"}>
                    {props.sizes}
                </div>
                <div>
                    {props.price}
                </div>
            </div>

        </div>


    );
}

export default StoreProduct
