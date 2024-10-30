import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    // menu bar for small screen 
    const [visible , setvisible] = useState(false);
    const [color , setcolor] = useState(false);

    const {setShowSearch , getCartCount , navigate , settoken , token , setCartItem} = useContext(ShopContext);

    const logout = () => {
        localStorage.removeItem('token');
        settoken('');
        setCartItem({});
        setTimeout(() => navigate('/login'), 0);
    }
    

    const changeTheme =()=>{
        setcolor(!color);
        document.body.style.backgroundColor=color?"black":"white";
        document.body.style.color = color?"white":"black";
    }
    
    return (
        <div className='flex stickey justify-between text-center py-5 font-medium '>

            <img className='w-36' src={assets.logo} alt="" />

            <ul className='hidden sm:flex gap-5 py-5 text-gray-800 text-sm'>
                <NavLink to="/" className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-1/2 border-none h-[2px] bg-gray-600 hidden' />
                </NavLink>
                <NavLink to="/collection" className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className='w-1/2 border-none h-[2px] bg-gray-600 hidden' />
                </NavLink>
                <NavLink to="/about" className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-1/2 border-none h-[2px] bg-gray-600 hidden' />
                </NavLink>
                <NavLink to="/contact" className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-1/2 border-none h-[2px] bg-gray-600 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>

            <img onClick={() => setShowSearch(true)} className='w-6 cursor-pointer' src={assets.search_icon} alt="" />

                <div className='group relative'>
                    {/* <Link to={"/login"}></Link> */}
                    <img onClick={()=> token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                    {/* drop down */}

                   {
                    token &&  
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col w-36 gap-2 py-2 px-5 bg-slate-200 text-gray-500 '>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p onClick={()=> navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:text-black'>LogOut</p>
                    </div>
                </div>       
                   } 
                </div>

                <Link to="/card" className='relative'>
                        <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                        <p className='absolute right-[-5px] bottom-[-5px] w-5 text-center leading-4 bg-black text-white rounded-full'>{getCartCount()}</p>
                </Link>
                {/* <button onClick={changeTheme}>Change Theme</button> */}
                    {/* hamberger btn */}
                    <img onClick={()=> setvisible(true)} src={assets.menu_icon} className='w-6 cursor-pointer sm:hidden' alt="" />
            </div>

            {/* menu for small screen */}
            <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all overflow-hidden ${visible ? "w-full" : "w-0"}`} >
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=> setvisible(false)} className='flex items-center gap=3 p-3'>
                        <img className='h-5 cursor-pointer rotate-180 w-5' src={assets.dropdown_icon} alt="" />
                            <p className='text-black w-5 cursor-pointer'>Back</p>
                    </div>
                    <div className='flex flex-col '> {/*text-start*/}
                    <NavLink onClick={()=> setvisible(false)} className='py-5 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={()=> setvisible(false)} className='py-5 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={()=> setvisible(false)} className='py-5 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=> setvisible(false)} className='py-5 pl-6 border' to='/contact'>CONTACT</NavLink>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar