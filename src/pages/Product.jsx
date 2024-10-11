import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import RealativeProduct from '../components/RealativeProduct';

const Product = () => {

  // using hook to get id 
  const { productid } = useParams();
  const { products, currency , addToCart } = useContext(ShopContext);
  const [productsData, SetProductData] = useState(false);
  const [image, setimage] = useState('');
  const [size, setsize] = useState('');
  


  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productid) {
        SetProductData(item)
        setimage(item.image[0]);

        return null
      }
    });
  }

  useEffect(() => {
    fetchProductData()
  }, [productid, products])


  return productsData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*------------------- product data ---------------*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*------------------ product images--------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productsData.image.map((item, index) => (
                <img onClick={() => setimage(item)} src={item} key={index} className='w-[28%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>
        {/*---------------- product info---------- */}

        <div className='flex-1'>
          <p className='font-medium text-2xl mt-3'>{productsData.name}</p>
          <div className='flex items-center gap-2 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productsData.price}</p>
          <p className='mt-3 text-gray-500 md:w-4/5'> {productsData.description}</p>

          <div className='flex flex-col gap-2 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productsData.sizes.map((item, index) => (
                <button onClick={() => setsize(item)} className={`border px-4 py-3 bg-gray-200 ${item === size ? "border-orange-700" : ""}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productsData._id, size)} className='px-8 py-3 bg-black text-white active:bg-gray-700 text-sm '>Add to Cart</button>
          <hr className='mt-8 sm:w-3/4' />

          <div className='flex flex-col gap-1 text-gray-400 mt-3'>
            <p>100% orignal product</p>
            <p>Cash on delevery is avaliable on this product</p>
            <p>Easy exchange poloicy</p>
          </div>
        </div>
      </div>

      {/* review and description box */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-4 p-2 text-sm'>Description</b>
          <p className='border px-4 py-2 text-sm'>(122)</p>
        </div>
        <div className='flex flex-col border text-sm gap-6 px-6 py-6 text-gray-400'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias quos, consequuntur facere ex nostrum quibusdam magni modi aliquam veritatis similique veniam perferendis expedita dolorum numquam illo. Expedita sint, beatae asperiores porro quisquam voluptates dolorem ipsa sapiente nobis omnis quidem doloribus nesciunt, praesentium qui distinctio libero! Iure accusamus beatae odit!</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores nemo nisi repudiandae non vel eius atque necessitatibus deleniti cupiditate, possimus earum ducimus, ipsum sunt excepturi commodi tempore perspiciatis soluta!
              </p>
        </div>
      </div>

      {/* related products */}
<RealativeProduct category={productsData.category} subCategory={productsData.subCategory}/>
     

    </div>
  ) : <div className='opacity-0'>

  </div>
}

export default Product