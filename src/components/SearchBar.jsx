import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {Search , setSearch ,  showSearch ,  setShowSearch} = useContext(ShopContext);
    const location = useLocation();
    const [visible , setvisible] = useState(false);

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setvisible(true);
        } else {
            setvisible(false);
        }
    }, [location]);
    

    
  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-6 mx-3 rounded-full w-3/4 sm:w-2/4'>
            <input value={Search} onChange={(e)=> setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
            <img className='w-4' src={assets.search_icon} alt="" />
        </div>
        <img  onClick={()=>setShowSearch(false)} className='inline w-4 cursor-pointer' src={assets.cross_icon} alt="" />
      
    </div>
  ):""
}

export default SearchBar