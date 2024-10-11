import React from 'react'
import {assets} from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 text-xs sm:gap-2 text-center py-20 sm:text-sm md:text-base text-gray-700 '>
        <div>
            <img className='w-16 m-auto mb-4' src={assets.exchange_icon} alt="" />
            <p className='font-semibold'>easy exchange poliocy</p>
            <p className='text-gray-400'>our offer hassel exchange poliocy</p>
        </div>
        <div>
            <img className='w-16 m-auto mb-4' src={assets.quality_icon} alt="" />
            <p className='font-semibold'>7 day return poliocy</p>
            <p className='text-gray-400'>We offer 7 day free return poliocy  .</p>
        </div>
        <div>
            <img className='w-16 m-auto mb-4' src={assets.support_img} alt="" />
            <p className='font-semibold'>Customer support poliocy</p>
            <p>We provide 24/7 customer support poliocy </p>
        </div>
    </div>
  )
}

export default OurPolicy