import React from 'react';
import { Link } from 'react-router-dom';

const ProductsArea = ({data}) => {
    const {id} = data;
    return (
        <div>
           
            <div className='bg-gray-300 rounded-3xl border-2 border-blue-300 p-5'>
                <img className='w-full h-[200px] object-cover rounded-3xl' src={data.imageUrl} alt="" />
                <h2 className='font-bold mt-2'>{data.name}</h2>
                <p className='mt-2'>Price: {data.price}k</p>

               <Link to={`/details/${id}`}>  <button className='px-3 py-1 rounded-3xl bg-white border-2 border-blue-300 mt-2'>View details</button>  </Link>
            </div>
          
            
        </div>
    );
};

export default ProductsArea;