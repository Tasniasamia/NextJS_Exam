import React from 'react';

const Other = () => {
    return (
        <div className='lg:mx-[422px] mx-2 lg:mt-[91px] mt-[40px] lg:mb-[137px] mb-[20px]'>
            <h1 className='lg:text-[20px] text-[12px] text-center text-[#20B15A] font-bold'>SUBSCRIBE</h1>
            <h2 className='text-black lg:text-[30px] text-[14px] font-bold text-center lg:mt-[22px] mt-[11px] mb-2'>Subscribe to get the latest news about us</h2>
            <p className='lg:mb-[40px] mb-[20px] text-[#8B8B8B] lg:text-[16px] text-[10px] text-center'>Please drop your email below to get daily update about what we do</p>
            <div className='lg:w-[596px] w-full mx-2 relative flex justify-center items-center mx-auto '>
                <input type="text"placeholder='Enter Your Email Adress'className='w-full p-1 lg:p-2 rounded-lg border border-1 block text-[#8B8B8B] lg:text-[16px] text-[12px]'/>
                <button className='lg:text-[16.21px] absolute right-0 lg:rounded-xl rounded-lg text-[12px] bg-[#F55F1D] text-white lg:px-[24px] px-[12px] lg:py-[8px] py-[5px]'>Subscribe</button>
            </div>
        </div>
    );
};

export default Other;