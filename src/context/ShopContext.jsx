import { createContext, useEffect, useState } from 'react';
import { products } from '../assets/assets'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const currency = "$";
const delivery_fee = "$5";


const ShopContextProvider = (props) => {
    const [Search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState({});
    const navigate = useNavigate();




    const addToCart = async (itemid, size) => {

        if (!size) {
            toast.error("please select Size...")
            return;
        }
         else {
            toast.success("item add ...")
        }

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



    //deleting any item or updating
    const UpdateQuatity = async (itemid, size, quantity) => {
        let cartData = structuredClone(cartItem);
        cartData[itemid][size] = quantity;

        setCartItem(cartData);
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
        navigate

    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
