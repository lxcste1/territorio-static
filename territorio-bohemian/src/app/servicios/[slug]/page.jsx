'use client'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'

export default function Service () {

    const pathName = usePathname();
    const searchParams = useSearchParams()

    const productId = searchParams.get('productId')

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('/db/mock.json').then((res) => {
            console.log(res.data.services)
            const productInfo = res.data.services.map((item) => {
                if (item.id == productId){
                    return item
                }
            })
            console.log(productInfo)
            setProduct(res.data)
        }).catch((err) => console.log(err));
    }, [])

    console.log(product)

    return <div></div>
}

