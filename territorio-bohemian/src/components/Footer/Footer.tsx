import Image from "next/image";
import wpIcon from '../../../public/assets/wp-icon.png'
import igIcon from '../../../public/assets/ig-icon.png'
import gmailIcon from '../../../public/assets/gmail-icon.png'

export default function Footer() {

    const Links = [
        { name: "Sobre nosotros", link: "/sobre-nosotros" }
    ]

    return (
        <div>
            <div className={`max-w-6xl px-4 md:px-0 h-12 mx-auto flex justify-between items-center`}>
                <div className={`flex items-center`}>
                    <Image
                        src={wpIcon}
                        width={32}
                        height={32}
                        alt="Icono de Whatsapp"
                        priority={true}
                        className={`mx-1`} />
                    <Image
                        src={igIcon}
                        width={32}
                        height={32}
                        alt="Icono de Instagram"
                        className={`mx-1`} />
                    <Image
                        src={gmailIcon}
                        width={32}
                        height={32}
                        alt="Icono de Gmail"
                        className={`mx-1`} />
                </div>
                <div className={`md:block hidden`}>
                    ® Territorio Bohemian. Todos los derechos reservados
                </div>
                <div>
                    <ul className={`md:flex md:items-center`}>
                        {
                            Links.map((link) => (
                                <li key={link.name} className={`px-1`}>
                                    <a href={link.link} className={`hover:text-amber-950`}>{link.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
