import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method , setmethod] = useState("cod")
  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col justify-between sm:flex-row gap-4 pt-4 sm:pt-14 min-h-[80vh] border-t'>
      {/* --------------left side------------------ */}
      <div className='flex flex-col w-full gap-4 sm:w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
            <Title text1={"DELIVERY"}text2={"INFORMATION"}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-600 px-3.5 py-2 w-full ' type="text" placeholder='Enter Name' />
          <input className='border border-gray-600 px-3.5 py-2 w-full ' type="text" placeholder='Last Name' />
        </div>

        <input className='border border-gray-600 px-3.5 py-2 w-full ' type="text" placeholder='Email Address' />
        <input className='border border-gray-600 px-3.5 py-2 w-full ' type="text" placeholder='Street No' />

        <div className='flex gap-3'>
          <input className='border border-gray-600 px-3.5 py-2 w-full ' type="text" placeholder='City' />
          <input className='border border-gray-600 px-3.5 py-2 w-full ' type="text" placeholder='State' />
        </div>

        <div className='flex gap-3'>
          <input className='border border-gray-600 px-3.5 py-2 w-full ' type="number" placeholder='ZipCode' />
          <input className='border border-gray-600 px-3.5 py-2 w-full ' type="text" placeholder='Country' />
        </div>
        <input className='border border-gray-600 px-3.5 py-2 w-full ' type="number" placeholder='Phone' />
      </div>

      {/*--------------------------- right side--------------------- */}

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
            <CartTotal/>
        </div>

        <div className='mt-12'>
          <Title text1={"PAYMENT"}text2={"METHOD"}/>
        {/*------------------------ payment method---------------------- */}
          <div className='flex flex-col gap-3 lg:flex-row'>

            <div onClick={()=> setmethod("stripe")} className='flex items-center gap-3 cursor-pointer p-4 px-3 '>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`}></p>
              <img className='h-5 mx-3' src={assets.stripe_logo} alt="" />
            </div>

            <div onClick={()=> setmethod('razorpay')} className='flex items-center gap-3 cursor-pointer p-4 px-3 '>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`}></p>
              <img className='h-5 mx-3' src={assets.razorpay_logo} alt="" />
            </div>

            <div onClick={()=> setmethod("cod")} className='flex items-center gap-3 cursor-pointer p-4 px-3 '>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></p>
              <p className='text-gray-700 text-sm font-medium mx-3'>CASH ON DELIVERY</p>
            </div>

          </div>
        </div>

        <div className='w-full text-end mt-4'>
            <button onClick={()=> navigate('/orders')} className='bg-black text-white px-8 py-3 cursor-pointer font-medium'>PLACE ORDER</button>
        </div>
      </div>
       
    </div>
  )
}

export default PlaceOrder