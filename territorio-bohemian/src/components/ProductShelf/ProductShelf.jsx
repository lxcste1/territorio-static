import ProductCard from "../ProductCard/ProductCard";
import GetSize from '../../hooks/GetSize'
import mock from '@/api/servicios.js'

export default function ProductShelf({ type, id }) {

    const size = GetSize();

    const data = mock();

    return (
        <>  
            <h2>{type}</h2>
                <div>
                    {
                    data?.map((product)=> {
                        return (
                        <>  
                        {console.log(product)}
                        {`${size.width}` > 767 && <ProductCard attributes={product}></ProductCard>}
                        {`${size.width}` < 767 && <ProductCard attributes={product}></ProductCard>}
                        </>
                        )
                    })
                    }
                </div>
      </>
    )
}
