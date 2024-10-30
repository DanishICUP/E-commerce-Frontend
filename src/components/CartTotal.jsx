import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const CartTotal = () => {
    const { delivery_fee, currency, getCartTotal } = useContext(ShopContext);

    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={"TOTAL"} text2={"AMOUNT"} />
            </div>

            <div className='flex flex-col gap-2 mt-3 text-sm'>
                <div className='flex justify-between'>
                    <p>SubTotal</p>
                    <p>{currency}{getCartTotal()}.00</p>
                </div>

                <hr />

                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{delivery_fee}.00</p>
                </div>

                <hr />

                <div className='flex justify-between'>
                    <b>TOTAL</b>
                    <b> {currency}{getCartTotal() === 0 ? 0 : getCartTotal() + delivery_fee}.00</b>
                </div>
            </div>
        </div>
    )
}

export default CartTotal