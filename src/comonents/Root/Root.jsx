import React, { useState, createContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export const dataContext = createContext();

const Root = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState(0);
    const [wishList, setWishList] = useState([]); 
    return (
        <dataContext.Provider value={{data, setData, filteredData, setFilteredData, cart, setCart, wishList, setWishList, price, setPrice}}>
                    <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </dataContext.Provider>

    );
};

export default Root;