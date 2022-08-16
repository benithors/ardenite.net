import React from 'react'
import {NextPage} from "next";
import CrossFade from "../components/CrossFade";
import Header from "../components/Header";




const Home: NextPage = () => {


    return (
        <>

        <div className={"flex flex-col overflow-x-hidden"}>
            <Header></Header>
            <CrossFade />
<p className={'text-white text-6xl'}>



</p>

        </div>



    </>
    );
};

export default Home;
