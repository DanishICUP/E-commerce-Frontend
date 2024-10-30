import React, { useContext, useEffect, useState } from 'react';
import {ShopContext} from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'


const LatestCollection = () => {
  const {products} = useContext(ShopContext);
  const [lastestproduct , setlatestproduct] = useState([]);

  useEffect(()=>{
    setlatestproduct(products.slice(0,10));
  },[products])
  
  return (
    <div className='my-12'>
      <div className='text-center py-3 text-3xl'>
          <Title text1={"LATEST"} text2={"COLLECTION"}/>
          <p className='text-xs sm:text-sm w-3/4 mx-auto md:text-base text-gray-700'>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, deserunt.
        </p>
      </div>

      {/* rendrening products */}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-6'>
          {
            lastestproduct.map((item,index)=>(
              <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
          }
      </div>
    </div>
  );
}

export default LatestCollection;
