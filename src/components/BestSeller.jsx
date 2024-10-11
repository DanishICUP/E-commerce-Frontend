import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestseller, setbestseller] = useState([]);

    useEffect(() => {
        const bestproduct = products.filter((item) => (item.bestseller));
        setbestseller(bestproduct.slice(0, 5));

    }, [])

    return (
        <div className='py-8'>
            <div className='text-center text-3xl py-8'>
                <Title text1={"BEST"} text2={"SELLER"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nihil!
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-5'>
                {
                    bestseller.map((item,index)=>(
                        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                    ))
                }

            </div>

        </div>
    )
}

export default BestSeller