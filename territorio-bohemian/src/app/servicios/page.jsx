"use client"
import React, { useEffect, useState } from 'react'
import mock from '@/api/servicios.js'
import ProductShelf from '../../components/ProductShelf/ProductShelf.jsx'

export default function Servicios() {

    const data = mock();

    const [info, setInfo] = useState([
        {
        attributes: {
            category: {
                name: "",
            }
        },
        id: null,
        },
      ]);
    
    const [filters, setFilters] = useState([
        {
        attributes: {
            category: {
                name: "",
            }
        },
        id: null,
        },
    ]);

    useEffect(()=> {
        const getCategory = () => {
            data.map((item)=>{
                const category = item.attributes.category.name;
                setInfo(category)
                setFilters(category)
            })
        }
        getCategory();
    })

    const changeCategoryHandle = (category) => {
        /* Seteo el estado, para que luego en la linea de abajo pueda filtrar */
        setInfo(filters);
    
        /* Hago un filtrado de las categorias que hay, para que muestre en el 
        info, solamente las categorias que coincidan con el boton elegido */
        const filterValue = filters.filter(
          (item) => item.attributes.category.name === category
        );
    
        // Seteo en el estado solamente los items que coincidan con el filtro elegido
        setInfo(filterValue);
      };

    return (
        <>
            {data.map((item)=>{
                const typeFilter = item.attributes.category.name;
                const typeId = item.attributes.category.name;

                return (
                    <div>
                        <p key={item.id}>{item.id}</p>
                        <ProductShelf type={typeFilter} typeId={typeId} />
                    </div>
                )
                })}
        </>
    )
}
