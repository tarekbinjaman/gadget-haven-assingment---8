import React, { useContext, useEffect } from 'react';
import { dataContext } from '../Root/Root';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { cart, setCart, wishList, setWishList, price, setPrice } = useContext(dataContext);
    const { productId } = useParams();
    const id = parseInt(productId);
    const data = useLoaderData();
    const product = data.find(product => product.id === id);


    const buttonHandler = () => {
        if (cart.find(item => item.id === product.id)) {
            alert('already exist')
        }
        else {
            const newCart = [...cart, product]
            const newPrice = price + product.price;
            setPrice(newPrice);
            setCart(newCart);
            console.log(cart);
            console.log(product)
        }

    }

    const iconHandler = () => {
        if (wishList.find(item => item.id === product.id)) {
            alert('already exist')
        }
        else if (cart.find(item => item.id === product.id)) {
            alert('Already exist in cart!')
        }
        else {
            const newWishList = [...wishList, product];
            setWishList(newWishList);
        }

    }

    return (
        <div className='relative'>
            <div className='bg-blue-600 h-[300px] z-10 pt-[20px] mb-[300px]'>
                <h2 className='text-center text-3xl font-bold text-white'>Product Details</h2>
                <p className='text-center text-white w-[650px] mx-auto mt-4 mb-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='grid grid-cols-2 w-6/12 ml-[25%] rounded-3xl border border-black absolute mt-[-430px] bg-white'>
                <div className='p-6'><img className='h-[350px] object-cover rounded-2xl' src={product.imageUrl} alt="" /></div>
                <div className='items-start p-6 flex flex-col gap-2'>
                    <h2 className='text-3xl font-bold'>{product.name}</h2>
                    <h2 className='text-2xl font-medium'>Price: $ {product.price}</h2>
                    <p className='bg-yellow-100 text-sm inline-block px-6 py-1 rounded-md border border-green-600'>In Stock</p>
                    <p className='text-gray-500'>{product.description}</p>
                    <h3 className='text-base font-bold'>Specification:</h3>
                    <p className='w-[200px] text-gray-500'>{product.specification}</p>
                    <div>
                        <h2 className='font-bold'>Rating:</h2>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div><button onClick={buttonHandler} className='bg-blue-600 px-3 py-2 rounded-3xl text-white hover:bg-blue-800'>Add to cart</button></div>
                        <div><img onClick={iconHandler} className='cursor-pointer w-[40px] hover:shadow-xl' src="https://img.icons8.com/?size=80&id=HLkJG1mxr6Xj&format=png" alt="" /></div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ProductDetails;