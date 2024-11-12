import React, { useContext } from 'react';
import { dataContext } from '../Root/Root';

const CartList = ({ product }) => {
    const { cart, setCart, price, setPrice } = useContext(dataContext);

    const removeItem = () => {
        const updateCart = cart.filter(item => item.id !== product.id);
        const newPrice = price - product.price;
        setPrice(newPrice);
        setCart(updateCart);
    }
    return (
        <div>
            <div className='flex bg-gray-200 p-6 mb-4 rounded-3xl justify-between items-center'>
                <div className='flex   ga-5  items-center'>
                    <div>
                        <img className='w-[200px] h-[120px] object-cover rounded-2xl' src={product.imageUrl} alt="" />
                    </div>
                    <div className='ml-8 flex flex-col gap-3'>
                        <h2 className='text-2xl font-bold '>{product.name}</h2>
                        <p className='text-base text-gray-500'>{product.description}</p>
                        <p className='font-bold'>${product.price}k</p>
                    </div>
                </div>
                <img onClick={removeItem} className='w-[50px] h-[40px] object-cover items-center cursor-pointer' src="https://img.icons8.com/?size=50&id=23537&format=png" alt="" />

            </div>
        

        </div>
    );
};

export default CartList;