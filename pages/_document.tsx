import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="preload"
                    href="/fonts/raleway-v22-latin-regular.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
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
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet"/>
            </Head>
            <body className="bg-black min-w-full h-screen min-w-max overflow-x-hidden ">
            <Main/>
            <NextScript/>
            </body>
        </Html>
);
}
