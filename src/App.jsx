import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Card from './pages/Card'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='px-4 w-full sm:px-[5vw] md:px-[7vw] lg:px-[10vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product/:productid' element={<Product/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/placeorder' element={<PlaceOrder/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App