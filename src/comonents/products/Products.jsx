
import React, { useContext, useEffect, useState } from 'react';
import { dataContext } from '../Root/Root';
import ProductsArea from '../ProductsArea/ProductsArea';
import '../Button/Button.css'
import { Link } from 'react-router-dom';



const Products = () => {
    const { data, setData, filteredData, setFilteredData } = useContext(dataContext);

    const [activeCategory, setActiveCategory] = useState("All")
    const handleFilter = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setFilteredData(data);
        }
        else {
            setFilteredData(data.filter(item => item.category === category))
        }
    }
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
               setData(data);
               setFilteredData(data); 
            } );
    }, [setData, setFilteredData])

    return (
        <div className=''>
            <h2 className='text-3xl font-bold text-center'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex justify-between'>
                <div>
                    <div className='grid grid-cols-1 gap-4 mt-10 bg-slate-100 px-5 py-5 rounded-3xl'>
                        {['All', 'Laptops', 'Phones', 'Accessories', 'Smart Watches', 'MacBook', 'Iphone'].map((cat) => (
                            <button
                                key={cat}
                                className={`px-3 py-1 rounded-3xl ${activeCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
                                onClick={() => handleFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}


                    </div>
                </div>
                <div className='grid grid-cols-3 gap-10 mt-10 mx-auto'>
                    {
                        filteredData.map(data => <ProductsArea key={data.id} data={data}></ProductsArea>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Products;