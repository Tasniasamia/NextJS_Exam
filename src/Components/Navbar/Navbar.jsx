"use client"
import Link from 'next/link';
import React from 'react';
import './Navbar.css'
import { useRouter } from 'next/navigation';
const Navbar = () => {
  const router=useRouter()
    return (
        <div className={`lg:px-[100px] bg_gradient  `}>
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content z-[1] p-2  rounded-box w-52">
      <ul className="menu menu-sm   z-[1] p-2 shadow bg_gradient rounded-box w-52">
      <li><Link href="/" className=' p-[10px] text-[16px] text-black font-medium'>Home</Link></li>
      <li><Link href="/Team"className=' p-[10px] text-[16px] text-black font-medium'>Team</Link></li>
      <li><Link href="/Service"className=' p-[10px] text-[16px] text-black font-medium'>Services</Link></li>
      <li><Link href="/Project"className=' p-[10px] text-[16px] text-black font-medium'>Projects</Link></li>
      <li><Link href="/Testimonial"className=' p-[10px] text-[16px] text-black font-medium'>Testimonials</Link></li>
      <li><Link href="/Login"className='rounded-lg p-[10px] text-center text-[16px] text-black font-medium border border-[#20B15A] border-1 '>Login</Link></li>
      <li><Link href="/Resister"className='rounded-lg text-center p-[10px] text-[16px] text-white font-medium bg-[#20B15A]  mt-[10px]'>Resister</Link></li>
      </ul>
      </ul>
    </div>
    <a className="text-[20px] text-[#000000] font-bold">Design<span className='text-[#F55F1D]'>AGENCY</span></a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="flex">
      
      <li><Link href="/" className=' p-[10px] text-[16px] text-black font-medium'>Home</Link></li>
      <li><Link href="/Team"className='ms-[40px] p-[10px] text-[16px] text-black font-medium'>Team</Link></li>
      <li><Link href="/Service"className='ms-[40px] p-[10px] text-[16px] text-black font-medium'>Services</Link></li>
      <li><Link href="/Project"className='ms-[40px] p-[10px] text-[16px] text-black font-medium'>Projects</Link></li>
      <li><Link href="/Testimonial"className='ms-[40px] p-[10px] text-[16px] text-black font-medium'>Testimonials</Link></li>
      <li><Link href="/Login"className='rounded-lg ms-[40px] p-[10px] text-[16px] text-black font-medium border border-1 border-[#20B15A] '>Login</Link></li>
      <li><Link href="/Resister"className='rounded-lg ms-[40px] p-[10px] text-[16px] text-white font-medium bg-[#20B15A] '>Resister</Link></li>

    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;