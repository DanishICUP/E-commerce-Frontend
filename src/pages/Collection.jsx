import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from "../context/ShopContext"
import { assets } from '../assets/assets';
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products, Search, showSearch } = useContext(ShopContext);
  const [showfilter, setshowfilter] = useState(false);
  const [filterproducts, setfilterproducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);
  const [sortType, setsortType] = useState("realevent");

  // filter category product

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setcategory(prev => [...prev, e.target.value]);
    }
  }

  // end her

  // filter subcategory product

  const togglesubCategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setsubcategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setsubcategory(prev => [...prev, e.target.value]);
    }
  }

  // end her

  // applying filter on data

  const filterCopy = () => {
    let productCopy = products.slice();

    // forsearching this method

    if (showSearch && Search) {
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(Search.toLowerCase()))
    } else {
      <div>sorry no search found</div>
    }
    //end

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category.toLowerCase()));
    }
    if (subcategory.length > 0) {
      productCopy = productCopy.filter(item => subcategory.includes(item.subcategory));
    }


    setfilterproducts(productCopy);
  }

  // filter product by its price

  const filterProductbyprice = () => {
    let fpPrice = filterproducts.slice();

    switch (sortType) {
      case "low-high":
        setfilterproducts(fpPrice.sort((a, b) => (a.price - b.price)));
        break;

      case "high-low":
        setfilterproducts(fpPrice.sort((a, b) => (b.price - a.price)));
        break;

      default:
        filterCopy();
        break;
    }
  }

  useEffect(() => {
    filterCopy();
  }, [category, subcategory, Search, showSearch]);

  useEffect(() => {
    filterProductbyprice();
  }, [sortType])










  // useEffect(()=>{
  //   setfilterproducts(products);
  // },[])





  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter section */}
      <div className='min-w-60'>
        <p onClick={() => setshowfilter(!showfilter)} className='my-2 text-2xl flex items-center cursor-pointer gap-2'>
          FILTER
          <img className={`w-4 h-4 text-gray-800 sm:hidden  ${showfilter ? "rotate-90" : ""}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* category filter */}

        <div className={`border border-gray-500 mt-6 py-3 pl-5 ${showfilter ? "" : "hidden"} sm:block `}>
          <p className='mb-3 text-sm font-medium'>CATERGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-500'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"men"} onChange={toggleCategory} />Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"women"} onChange={toggleCategory} />Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"kids"} onChange={toggleCategory} />kids
            </p>
          </div>
        </div>

        {/* sub CATERGORY */}

        <div className={`border border-gray-500 mt-6 py-3 pl-5 ${showfilter ? "" : "hidden"} sm:block `}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-500'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Topwear"} onChange={togglesubCategory} />Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Bottomwear"} onChange={togglesubCategory} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Winterwear"} onChange={togglesubCategory} />WinterWear
            </p>
          </div>
        </div>
      </div>

      {/* right side  */}

      <div className='flex-1'>
        <div className='flex justify-between sm:text-2x text-base mb-4'>
          <Title text1={"ALL"} text2={"COLLECTION"} />

          {/* product sorting */}

          <select onChange={(e) => setsortType(e.target.value)} className='border-2 border-gray-100 px-5 text-sm'>
            <option value="realevent">Relevent</option>
            <option value="low-high">Low-High</option>
            <option value="high-low">High-Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

          {filterproducts.length > 0 ? (
            filterproducts.map((item, index) => (
              <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
          ) : (
            <div>Sorry, no search results found</div>
          )}


        </div>


      </div>

    </div>
  )
}

export default Collection