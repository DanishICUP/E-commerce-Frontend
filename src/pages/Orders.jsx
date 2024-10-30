import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';
import { useEffect } from 'react';

const Orders = () => {
  // products
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/userorder', {}, { headers: { token } })
      console.log(response.data);
      if (response.data.success) {

        let allOrderItem = []

        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item['status'] = order.status; 
            item['payment'] = order.payment; 
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;

            allOrderItem.push(item);
          });
        });
        // console.log(allOrderItem);
        setOrderData(allOrderItem.reverse())

      }


    } catch (error) {

    }
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"YOUR "} text2={"ORDER"} />
      </div>

      {
        orderData.map((item, index) => (
          <div key={index} className='py-4 border-b border-t flex flex-col sm:flex-row text-gray-700 md:items-center md:justify-between gap-4'>
            <div className='flex items-start gap-6'>
              <img className='w-16 md:w-20' src={item.image[0]} alt="" />

              <div>
                <p className='sm:text-base font-medu'>{item.name}</p>
                <div className='flex items-center gap-3 mt-1 text-gray-600'>
                  <p >{currency}{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Sizes: {item.size}</p>

                </div>
                <p className='mt-1'>Date : <span>{new Date(item.date).toDateString()}</span></p>
                <p className='mt-1'>PaymentMethod : <span>{item.paymentMethod}</span></p>

              </div>
            </div>

            <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded bg-green-600'></p>
                <p className='text-sm md:text-base'>{item.status}</p>
              </div>
              <button onClick={loadOrderData} className='text-sm border px-5 py-3 font-medium'>Track Order</button>
            </div>


          </div>
        ))
      }

    </div>
  )
}

export default Orders