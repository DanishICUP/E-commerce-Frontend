import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLatterBox from '../components/NewsLatterBox'
const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-4 border-t'>
          <Title text1={"ABOUT "} text2={"US"}/>
      </div>

      <div className='flex flex-col md:flex-row my-10 gap-6'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center md:w-1/2 gap-6 text-gray-500'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quis at eum saepe consequatur quas architecto, maxime officia cumque aliquid deserunt quaerat soluta ratione quod sapiente omnis cum porro dolorum.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea omnis praesentium itaque earum eligendi porro dolore, debitis odio explicabo architecto maiores, quo eaque quaerat natus. Ad voluptatibus voluptates eum aliquam.</p>

              <b className='text-gray-800'>OUR MISSION</b>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa omnis harum dolore. Temporibus ut culpa, saepe, corporis ad sit doloribus ea delectus, quam quis tempore nostrum. Labore vitae quasi asperiores.</p>
          </div>
      </div>

      <div className='mt-10 text-2xl'>
      <Title  text1={"OUR "} text2={"QUALITY"}/> 
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-10 py-8 md:py-16 flex flex-col gap-5'>
            <b>OUR QUALITY:</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequuntur, tempore hic soluta aperiam numquam accusamus dignissimos provident corporis doloremque?</p>
          </div>

          <div className='border px-10 md:px-10 py-8 md:py-16 flex flex-col gap-5'>
            <b>OUR QUALITY:</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequuntur, tempore hic soluta aperiam numquam accusamus dignissimos provident corporis doloremque?</p>
          </div>

          <div className='border px-10 md:px-10 py-8 md:py-16 flex flex-col gap-5'>
            <b>OUR QUALITY:</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequuntur, tempore hic soluta aperiam numquam accusamus dignissimos provident corporis doloremque?</p>
          </div>
      </div>

      <NewsLatterBox/>
    </div>
  )
}

export default About