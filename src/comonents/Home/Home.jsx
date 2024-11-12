import React from 'react';
import mainimg from '../assets/banner.jpg'
import Products from '../products/Products';

const Home = () => {
    return (
        <div>
           <div className='bg-blue-600 flex flex-col items-center gap-5 pt-[50px]  pb-[250px]'>
            <h2 className='text-5xl text-center text-white font-bold w-2/4'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
            <p className='text-center w-2/5 text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className='text-black bg-white px-3 py-1 rounded-md hover:bg-gray-200'>Shop Now</button>
           </div>
           <div className=' mx-auto p-2  mb-[100px]'>
            <img className='w-4/6 h-[550px] object-cover mt-[-205px] mx-auto rounded-3xl border-2 border-gray p-4' src={mainimg} alt="" />
           </div>
           <Products></Products>
        </div>
        
    );
};

export default Home;