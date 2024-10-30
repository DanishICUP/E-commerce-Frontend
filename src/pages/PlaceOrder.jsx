import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const [method, setmethod] = useState("cod")
  const { navigate, backendUrl, token, cartItem, setCartItem, products, getCartTotal, delivery_fee } = useContext(ShopContext)

  const [formData, setformData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  })

  const onChnageHandler = (event) => {
    const name = event.target.name
    const value = event.target.value

    setformData(data => ({ ...data, [name]: value }))
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItem = [];

      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            const ItemInfo = structuredClone(products.find(product => product._id === items));
            if (ItemInfo) {
              ItemInfo.size = item;
              ItemInfo.quantity = cartItem[items][item];
              orderItem.push(ItemInfo);
            }
          }
        }
      }
      // console.log(orderItem);

      if (orderItem.length === 0) {
        toast.error("Your cart is empty");
        return;
      }
  
      if (!token) {
        console.error("Token is missing or invalid");
        return;
      }

      let orderData = {
        address: formData,
        items: orderItem,
        amount: getCartTotal() + delivery_fee
      }

      switch (method) {
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
          console.log(response);
          
          if (response.data.success) {
            setCartItem({})
            navigate('/orders')
          } else{
            toast.error(response.data.message)
          }


          break;
        default:
          break;
      }



    } catch (error) {
      console.error("An error occurred:", error);
    }
  };



  return (
    <form onSubmit={submitHandler} className='flex flex-col justify-between sm:flex-row gap-4 pt-4 sm:pt-14 min-h-[80vh] border-t'>
      {/* --------------left side------------------ */}
      <div className='flex flex-col w-full gap-4 sm:w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChnageHandler} name='firstName' value={formData.firstName} className='border border-gray-600 px-3.5 py-2 w-full ' type="text" placeholder='Enter first Name' />

          <input required onChange={onChnageHandler} name='lastName' value={formData.lastName} className='border border-gray-600 px-3.5 py-2 w-full ' type="text" placeholder='Last Name' />
        </div>

        <input required onChange={onChnageHandler} name='email' value={formData.email} className='border border-gray-600 px-3.5 py-2 w-full ' type="text" placeholder='Email Address' />

        <input required onChange={onChnageHandler} name='street' value={formData.street} className='border border-gray-600 px-3.5 py-2 w-full ' type="text" placeholder='Street No' />

        <div className='flex gap-3'>
          <input required onChange={onChnageHandler} name='city' value={formData.city} className='border border-gray-600 px-3.5 py-2 w-full ' type="text" placeholder='City' />

          <input required onChange={onChnageHandler} name='state' value={formData.state} className='border border-gray-600 px-3.5 py-2 w-full ' type="text" placeholder='State' />
        </div>

        <div className='flex gap-3'>
          <input required onChange={onChnageHandler} name='zipCode' value={formData.zipCode} className='border border-gray-600 px-3.5 py-2 w-full ' type="number" placeholder='ZipCode' />

          <input required onChange={onChnageHandler} name='country' value={formData.country} className='border border-gray-600 px-3.5 py-2 w-full ' type="text" placeholder='Country' />
        </div>
        <input required onChange={onChnageHandler} name='phone' value={formData.phone} className='border border-gray-600 px-3.5 py-2 w-full ' type="number" placeholder='Phone' />
      </div>

      {/*--------------------------- right side--------------------- */}

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/*------------------------ payment method---------------------- */}
          <div className='flex flex-col gap-3 lg:flex-row'>

            <div onClick={() => setmethod("stripe")} className='flex items-center gap-3 cursor-pointer p-4 px-3 '>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`}></p>
              <img className='h-5 mx-3' src={assets.stripe_logo} alt="" />
            </div>

            <div onClick={() => setmethod('razorpay')} className='flex items-center gap-3 cursor-pointer p-4 px-3 '>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`}></p>
              <img className='h-5 mx-3' src={assets.razorpay_logo} alt="" />
            </div>

            <div onClick={() => setmethod("cod")} className='flex items-center gap-3 cursor-pointer p-4 px-3 '>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></p>
              <p className='text-gray-700 text-sm font-medium mx-3'>CASH ON DELIVERY</p>
            </div>

          </div>
        </div>

        <div className='w-full text-end mt-4'>
          <button type='submit' className='bg-black text-white px-8 py-3 cursor-pointer font-medium'>PLACE ORDER</button>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder