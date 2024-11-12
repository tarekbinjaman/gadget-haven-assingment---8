import React, { useContext } from 'react';
import { dataContext } from '../Root/Root';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const { cart, wishList } = useContext(dataContext);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={`/`}>Home</NavLink></li>
                    <li><NavLink to={`/stastics`}>Statistics</NavLink></li>
                    <li><NavLink to={`/dashboard`}>Dashboard</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex gap-4 items-center'>
                    <div className='flex'>
                        <img className='w-[40px]' src="https://img.icons8.com/?size=50&id=9671&format=png" alt="" />
                        <h2>{cart.length}</h2>
                    </div>
                    <div className='flex'>
                        <img className='w-[40px]' src="https://img.icons8.com/?size=80&id=HLkJG1mxr6Xj&format=png" alt="" />
                        <h2>{wishList.length}</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;