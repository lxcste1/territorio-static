import Image from "next/image";
import Link from "next/link";

const ProductCard = (product) => {
    return (
        <>
            {
                product.attributes.map((e) => {
                    const productLink = e.slug;
                    const productImg = e.thumbnail[0].url;
                    const productDuration = e.variation;
                    const isProfesional = e.profesional;
                    const details = e.details;

                    return (
                        <Link href={`servicios/${productLink}`} key={productLink} className={`my-1`}>
                            <div className={`w-80 border-2 border-[#C1AC99]`}>
                                <Image src={`${productImg}`} alt="Logo del producto" width={400} height={400} priority={true}/>
                                <div>
                                    <h3 className={`flex items-center justify-center text-2xl font-bold text-center h-16 my-3 px-4`}>{e.name}</h3>
                                    <div className={`flex items-center justify-center`}>
                                        <p className={`font-bold px-2`}>${e.price} | </p>
                                        <div className={`flex items-center`}>
                                            <Image
                                                src="/assets/time.png"
                                                width={16}
                                                height={16}
                                                alt="Reloj"
                                                className={`w-fit`}
                                                priority={true}
                                            />
                                            <p className={`pl-2`}>{productDuration}</p>
                                        </div>
                                    </div>
                                    {isProfesional ?
                                        <p className={`pb-6 text-center`}>Profesional: {e.profesional}</p> :
                                        <hr className={`w-1/2 m-auto border-[0.5px] border-[#C1AC99] my-6`}></hr>
                                    }
                                    {details ?
                                        <div className={`flex justify-center items-center h-[72px] m-3`}>
                                            <p className={`text-center`}>{e.details}</p>
                                        </div> :
                                        ``
                                    }
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default ProductCard;
