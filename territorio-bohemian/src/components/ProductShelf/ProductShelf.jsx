import ProductCard from "../ProductCard/ProductCard";
import GetSize from '../../hooks/GetSize'
import services from '@/api/api.js'

export default function ProductShelf() {
    const size = GetSize();
    const data = services();

    return (
        <>
            <div>
                {
                    data.services?.map((product) => {
                        return (
                            <div key={product.id}>
                                {`${size.width}` > 767 &&
                                    <div className={`flex flex-wrap justify-between md:w-9/12 m-auto`}>
                                        <h1 className={`text-3xl font-bold w-full text-center my-8`}>
                                            {product.category}
                                        </h1>
                                        <ProductCard attributes={product.items} key={product.id} />
                                    </div>}
                                {`${size.width}` < 767 &&
                                    <div className={`flex flex-wrap justify-center`}>
                                        <h1 className={`text-3xl font-bold text-center w-full my-8`}>
                                            {product.category}
                                        </h1>
                                        <ProductCard attributes={product.items} key={product.id} />
                                    </div>}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
