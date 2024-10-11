import React from 'react'

const Title = ({text1 , text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-2'>
        <p className='text-gray-500'>{text1}<span className='text-gray-600 font-medium'>{text2}</span></p>
        <p className='w-8 sm:w-12 h-1 p-0.5 sm:h-[1px] bg-gray-950'></p>      
    </div>
  )
}

export default Title