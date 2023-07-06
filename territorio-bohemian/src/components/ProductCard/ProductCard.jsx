import Image from "next/image";
import Link from "next/link";

const ProductCard = ( product ) => {

    const productLink = product.attributes.id;
    const productImg = product.attributes.attributes.thumbnail.data.attributes.url;
    const productDuration = product.attributes.attributes.variation[0].variations;

    console.log(productImg)
    
    return (
        <>
            <Link href={`servicios/${productLink}`}>
                <div style={{ width: '20rem' }}>
                    <Image src={`${productImg}`} alt="Logo del producto" width={400} height={400} />
                    <div>
                        <h3>{product.attributes.attributes.title}</h3>
                        <div>
                            <p>${product.attributes.attributes.price}</p>
                            <div>
                                <Image 
                                src="/img/time.png"
                                width={16}
                                height={16}
                                alt="Reloj"></Image>
                                <p>{productDuration}</p>
                            </div>
                        </div>
                        <p>{product.attributes.attributes.profesional}</p>
                        <hr></hr>
                        <div>
                            <p>{product.attributes.attributes.details}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductCard;
