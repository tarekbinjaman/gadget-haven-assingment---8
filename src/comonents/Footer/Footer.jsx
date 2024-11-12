import React from 'react';

const Footer = () => {
  return (
    <footer className="footer flex flex-col justify-center items-center bg-white text-neutral-content p-10 mt-[350px] border-t border-black">
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl text-black font-bold'>Gadget Heaven</h2>
        <p className='text-center text-black'>Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className='flex gap-[300px]'>
        <nav className='flex flex-col items-center text-black'>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className='flex flex-col items-center text-black'>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className='flex flex-col justify-center items-center text-black'>
          <h6 className="footer-title text-end">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>

    </footer>
  );
};

export default Footer;