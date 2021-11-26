import Link from 'next/link'
import Image from 'next/image'
import insta from "/public/static/images/insta.png";
const IndexPage = () => (
    <div className={"flex flex-col justify-center items-center"}>
        <div className={"text-turquoise text-7xl"}>
            ARDENITE
        </div>

        <div className={"text-pink leading-normal"}>
            Dark synth Pop Rock Duo from Vienna
        </div>

        <div className={"text-pink leading-normal"}>
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
