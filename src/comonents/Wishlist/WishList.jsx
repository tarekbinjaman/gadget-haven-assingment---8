import React, { useContext } from 'react';
import { dataContext } from '../Root/Root';

const WishList = ({ product }) => {
    const { cart, setCart, wishList, setWishList, price, setPrice } = useContext(dataContext);
    const handleClick = () => {
        if (cart.find(item => item.id === product.id)) {
            alert('already exist')
        }
        else {
            const newWishlist = wishList.filter(item => item.id !== product.id);
            setWishList(newWishlist);
            const newCart = [...cart, product]
            const newPrice = price + product.price;
            setPrice(newPrice);
            setCart(newCart);
        }
    }
    const removeItem = () => {
        const updateWishList = wishList.filter(item => item.id !== product.id);
        setWishList(updateWishList);
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
                        <div>
                            <button onClick={handleClick} className='bg-blue-600 px-3 py-1 rounded-2xl text-white hover:bg-blue-800'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <img onClick={removeItem} className='w-[50px] h-[40px] object-cover items-center' src="https://img.icons8.com/?size=50&id=23537&format=png" alt="" />


            </div>
        </div>
    );
};

export default WishList;