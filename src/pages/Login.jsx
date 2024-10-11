import React, { useState } from 'react'

const Login = () => {

  const [CurrentState , setCurrentState] = useState("Login")


  const onsubmithandler = async (e)=>{
      e.preventDefault();
  }
  return (
    <form onSubmit={onsubmithandler} className='flex flex-col items-center w-[90%] m-auto sm:mx-w-96 mt-14 gap-3 text-gray-800'>
      <div className='inline-flex mt-10 mb-2 items-center gap-3'>
          <p className='parata-regular text-3xl'>{CurrentState}</p>
          <p className='border-none w-8 h-1 bg-gray-900'></p> 
      </div>

      {CurrentState === "Login" ? "" : <input type="text" className='w-full max-w-96 px-3 py-2 border border-gray-500 ' placeholder='Name' required/>}
      <input type="email" className='w-full max-w-96 px-3 py-2 border border-gray-500 ' placeholder='Email' required/>
      <input type="password" className='w-full max-w-96 px-3 py-2 border border-gray-500 ' placeholder='password' required/>

      <div className='w-full flex justify-between mt-1 max-w-96'>
        <p className='cursor-pointer'>Forgot Your Password ?</p>
          {
            CurrentState === "Login"
            ? <p onClick={()=> setCurrentState("signup")} className='cursor-pointer'>Create an account ?</p>
            : <p onClick={()=> setCurrentState("Login")} className='cursor-pointer'>Login</p>
          }
      </div>
      <button  className='bg-black text-white px-8 py-3 cursor-pointer mt-3'>{CurrentState=== "Login" ? "Sign-In": "Sign-Up"}</button>

    </form>
  )
}

export default Login