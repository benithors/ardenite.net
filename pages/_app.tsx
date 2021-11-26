import '/styles/global.css'
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
       <>
            <Head>
                <title>Ardenite</title>
                <meta name="viewport" content="width=device-width, height=device-height"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
