import { createContext, useEffect, useState } from 'react';
// import { products } from '../assets/assets'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const backendUrl = import.meta.env.VITE_BACKEND_URL
const currency = "$";
const delivery_fee = 5;


const ShopContextProvider = (props) => {
    const [Search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState({});
    const [products, setproducts] = useState([])
    const [token, settoken] = useState('')
    const navigate = useNavigate();




    const addToCart = async (itemid, size) => {

        if (!size) {
            toast.error("please select Size...")
            return;
        }
        //  else {
        //     toast.success("item add ...")
        // }

        let CartData = structuredClone(cartItem);
        if (CartData[itemid]) {
            if (CartData[itemid][size]) {
                CartData[itemid][size] += 1;
            } else {
                CartData[itemid][size] = 1;
            }
        } else {
            CartData[itemid] = {};
            CartData[itemid][size] = 1;
        }
        setCartItem(CartData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', { itemid, size }, { headers: { token } })

            } catch (error) {
                console.log(error);
                toast.error(error.message)

            }
        }
    };



    const getCartCount = () => {
        let totalCount = 0;
        for (const key in cartItem) {
            for (const innerKey in cartItem[key]) {
                try {
                    if (cartItem[key][innerKey] > 0) {
                        totalCount += cartItem[key][innerKey];
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        return totalCount;
    };

    const getCartTotal = () => {
        let TotalAmount = 0;
        for (let items in cartItem) {
            let iteminfo = products.find((product) => product._id === items);
            for (let item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {

                        TotalAmount += iteminfo.price * cartItem[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return TotalAmount;
    }

    const GetProductData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setproducts(response.data.product);
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } })
            console.log(response);
            if (response.data.success) {
                setCartItem(response.data.cartData)
            }
            
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        GetProductData()
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            settoken(localStorage.getItem('token'))
        }
    },[])

    useEffect(() => {
      if (token) {
        getUserCart(token)
      }
    }, [token])
    



    //deleting any item or updating
    const UpdateQuatity = async (itemid, size, quantity) => {
        let cartData = structuredClone(cartItem);
        cartData[itemid][size] = quantity;

        setCartItem(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/update', { itemid, size, quantity }, { headers: { token } })
            } catch (error) {

            }
        }
    }


    const value = {
        products,
        currency,
        delivery_fee,
        Search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItem,
        addToCart,
        getCartCount,
        UpdateQuatity,
        getCartTotal,
        navigate,
        backendUrl,
        token,
        settoken,
        setCartItem
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
