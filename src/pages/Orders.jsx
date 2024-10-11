import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const { products, currency } = useContext(ShopContext);
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"YOUR "} text2={"ORDER"} />
      </div>

      {
        products.slice(1, 4).map((item, index) => (
          <div key={index} className='py-4 border-b border-t flex flex-col sm:flex-row text-gray-700 md:items-center md:justify-between gap-4'>
            <div className='flex items-start gap-6'>
              <img className='w-16 md:w-20' src={item.image[0]} alt="" />

              <div>
                <p className='sm:text-base font-medu'>{item.name}</p>
                <div className='flex items-center gap-3 mt-3 text-gray-600'>
                  <p className='text-lg'>{currency}{item.price}</p>
                  <p>Quantity: 1</p>

                </div>
                <p className='mt-2'>Date : <span>28 july 2024</span></p>
              </div>
            </div>

            <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded bg-green-600'></p>
                <p className='text-sm md:text-base'>READY TO SHIP</p>
              </div>
              <button className='text-sm border px-5 py-3 font-medium'>Track Order</button>
            </div>
           

          </div>
        ))
      }

    </div>
  )
}

export default Orders