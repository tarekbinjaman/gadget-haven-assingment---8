import React, { useContext, useState } from 'react';
import { dataContext } from '../Root/Root';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CartList from '../CartList/CartList';
import WishList from '../Wishlist/WishList';
import group from '../assets/Group.png'
const DashBoard = () => {
  const { cart, setCart, wishList, setWishList, price, setPrice } = useContext(dataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchasePrice, setPurchasePrice] = useState(price);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const purchseHandler = () => {
    if (price === 0) {
      alert('Select product')
    }
    else {
      setPurchasePrice(price);
      openModal();
      setPrice(0);
      setCart([]);
    }

  }
  return (
    <div>
      <div className='bg-blue-600 w-full h-[230px] pt-10'>
        <div className='flex flex-col items-center gap-3'>
          <h2 className='text-4xl text-white font-bold'>Dashboard</h2>
          <p className='w-5/12 text-center text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        </div>

      </div>


      <Tabs>
        <TabList>
          <div className='flex justify-center items-center mt-[-50px] mb-[30px]'>
            <Tab><span className='border border-black px-5 py-1 bg-slate-100'>Cart</span></Tab>
            <Tab><span className='border border-black px-5 py-1 bg-slate-100'>Wishlist</span></Tab>
          </div>

        </TabList>

        <TabPanel>
          <div className='flex justify-between mb-10'>
            <div>
              <h2 className='text-2xl font-bold'>Cart</h2>
            </div>
            <div className='flex gap-10'>
              <h2 className='text-2xl font-bold'>Toatal cost: <span className='text-gray-600'>{price}</span> </h2>
              <button onClick={purchseHandler} className='bg-blue-600 px-3 py-1 rounded-2xl text-white hover:bg-blue-800'>Purchase</button>
            </div>
          </div>
          {
            cart.map(product => <CartList key={product.id} product={product}></CartList>)
          }
        </TabPanel>
        <TabPanel>
          <div className='mb-10'>
            <div>
              <h2 className='text-2xl font-bold'>Wishlist</h2>
            </div>
          </div>
          {
            wishList.map(product => <WishList key={product.id} product={product}></WishList>)
          }
        </TabPanel>
      </Tabs>

      {/* modl */}

      {isModalOpen && (
        <dialog className="modal modal-bottom sm:modal-middle" open>
          <div className="modal-box">
            <div className='flex flex-col justify-center items-center gap-2'>
              <h3 className="font-bold text-3xl">Payment Successfully</h3>
              <img className='w-[30px]' src={group} alt="" />
              <p className="py-4">Thanks for purchasing.</p>
              <p>${purchasePrice}</p>
              <div className="modal-action">
                <button className="btn text-base w-full" onClick={closeModal}>Close</button>
              </div>
            </div>

          </div>
        </dialog>
      )}

    </div>
  );
};

export default DashBoard;