import Link from 'next/link'
import Image from 'next/image'
import insta from "/public/static/images/insta.png";
const IndexPage = () => (
    <div className={"flex flex-col justify-center items-center"}>
        <div className={"text-turquoise text-7xl filter drop-shadow-xl font-semibold"}>
            ARDENITE
        </div>

        <div className={"text-pink leading-normal filter drop-shadow-md font-semibold"}>
            DARK SYNTH POP ROCK DUO FROM VIENNA
        </div>

        <div className={"text-pink leading-normal filter drop-shadow-md font-semibold"}>
            WORK IN PROGRESS / SOON NEW WEBSITE
        </div>
        <div className={"text-pink leading-normal"}>
            <Link href="https://instagram.com/ardeniteofficial" passHref={true}>
                <Image
                    src={insta}
                    alt="Instagram"
                />
            </Link>


        </div>
    </div>
)

export default IndexPage

