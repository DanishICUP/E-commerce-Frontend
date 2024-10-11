import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLatterBox from '../components/NewsLatterBox'
const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl border-t pt-4 '>
        <Title text1={"CONTACT"} text2={"US"}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-6 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='text-xl font-semibold text-gray-800'>OUR SHOP</p>
          <p className='text-gray-500'>Peshawae paksitan <br /> Darra adam khel Bazar Kohat</p>
          <p>Email: danishicp99@gmail.com</p>
          <p>Contact No: 03319191636</p>
          <p>SHOP Address: Dara Adam khel</p>
          <p>FREE DEV:IVERY </p>

          <button className='px-8 py-3 border border-gray-800 hover:bg-black hover:text-white transition-all duration-500'>Explore Bussniess</button>
        </div>
      </div>

      <NewsLatterBox/>
    </div>
  )
}

export default Contact