import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-12 my-10 mt-40 text-sm'>
                <div>
                    <img className='w-32 mb-5' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-700'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, ducimus numquam beatae nihil quidem adipisci expedita. Deserunt, laboriosam. Odio itaque dolorem placeat beatae repellendus ad assumenda, quibusdam porro quo dolore!
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-950'>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>DELIVERY</li>
                        <li>PRIVACY POLIOCY</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-4'>Get in Touch</p>
                    <ul className='flex flex-col gap-1 text-gray-950'>
                        <li>+92318-845242-6</li>
                        <li>danishicp99@gmail.com</li>
                    </ul>
                </div>

            </div>

            <div>
                <hr />
                <p className='my-5 text-center text-gray-800'>copyWrite 2024 all Right forever.com</p>
            </div>
        </div>
    )
}

export default Footer