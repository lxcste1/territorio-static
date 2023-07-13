"use client"
import Image from "next/image";
import BannerDesktop from '../../../public/assets/1920x600.png'
import BannerMobile from '../../../public/assets/415x200.png'

export default function Banner() {

    return (
        <div>
            <Image
                src={BannerDesktop}
                alt={`Banner principal desktop`}
                width={1920}
                height={600}
                className={`md:block hidden m-auto`}
            />
            <Image
                src={BannerMobile}
                alt={`Banner principal mobile`}
                width={415}
                height={200}
                className={`md:hidden`}
            />
        </div>
    )
}
