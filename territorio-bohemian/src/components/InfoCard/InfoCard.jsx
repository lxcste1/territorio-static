import Image from "next/image";
import mobileImage from '../../../public/assets/500x300.png'
import desktopImage from '../../../public/assets/600x400.png'

export default function InfoCard(attribute) {

    return (
        <div>
            <div className={`flex items-center md:flex-nowrap flex-wrap border-2 border-[#C1AC99]`}>
                <Image
                    src={mobileImage}
                    alt={`Imagen de información - Mobile`}
                    width={500}
                    height={300}
                    className={`md:hidden`}
                />
                <Image
                    src={desktopImage}
                    alt={`Imagen de información - Desktop`}
                    width={600}
                    height={400}
                    className={`md:block hidden`}
                />
                <div className={`md:p-20 p-8 text-center md:text-left`}>
                    <p>
                        {attribute.text.text}
                    </p>
                </div>
            </div>
        </div>
    )
}
