import React from 'react'

const NewsLatterBox = () => {

    const submitehandler =(e)=>{
        e.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-900'>Subscribe Now get 20% off</p>
        <p className='text-gray-600 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, recusandae?</p>

        <form onClick={submitehandler} className='w-full sm:w-1/2 item-center flex gap-4 mx-auto my-5 border pl-3 '>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Email ' required/>
            <button  className='bg-gray-900 text-white px-5 py-6' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLatterBox