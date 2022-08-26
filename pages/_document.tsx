import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>

                <link href="/static/favicons/favicon.ico" rel="shortcut icon"/>
                <link href="/static/favicons/site.webmanifest" rel="manifest"/>

                <link
                    href="/static/favicons/apple-touch-icon.png"
                    rel="apple-touch-icon"
                    sizes="180x180"
                />
                <link
                    href="/static/favicons/favicon-32x32.png"
                    rel="icon"
                    sizes="32x32"
                    type="image/png"
                />
                <link
                    href="/static/favicons/favicon-16x16.png"
                    rel="icon"
                    sizes="16x16"
                    type="image/png"
                />
                <link
                    color="#4a9885"
                    href="/static/favicons/safari-pinned-tab.svg"
                    rel="mask-icon"
                />
                <meta content="#ffffff" name="theme-color"/>
                <meta content="#ffffff" name="msapplication-TileColor"/>
                <meta
                    content="/static/favicons/browserconfig.xml"
                    name="msapplication-config"
                />
                <link
                    rel="preload"
                    href="/fonts/SourceSansPro-Regular.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />

                <link
                    rel="preload"
                    href="/fonts/Inter-Medium.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/Inter-Bold.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />

                <script async defer data-website-id="c8a469c6-ac0b-45bb-a716-8399f805bba3" src="https://kylo-analytics.vercel.app/umami.js"
                ></script>
            </Head>
            <body className="bg-brand-black min-w-full h-screen min-w-max overflow-x-hidden ">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
