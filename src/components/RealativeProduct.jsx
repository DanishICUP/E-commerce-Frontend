import React, { useContext, useState , useEffect } from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'



const RealativeProduct = ({category , subcategory}) => {

    const {products} = useContext(ShopContext);
    const [realated , setRelated] = useState([]);
    

    useEffect(() => {
        if (products.length > 0) {
            let productCopy = products.slice();
            productCopy = productCopy.filter((item) => category === item.category);
            productCopy = productCopy.filter((item) => subcategory === item.subcategory);
            setRelated(productCopy.slice(0, 5));  
            // console.log("filter products" , products);
             
                
        }
    }, [products,category,subcategory]);

    


  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2 '>
            <Title text1={"RELATED"} text2={"PRODUCTS"}/>
        </div>
    
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-5'>
           
                {realated.map((item ,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    
                ))}
           
        </div>

    </div>
  )
}

export default RealativeProduct