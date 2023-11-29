import React from 'react';

const Common = ({routeName}) => {
    return (
        <div className='lg:pt-[99px] pt-[40px] lg:pb-[80px] pb-[40px] lg:px-[100px] px-2 bg-[#F8F9FC]'>
         <h1 className='lg:text-[40px] text-[18px] mb-[20px]'>{routeName}</h1>  
         <p className='lg:text-[16px] text-[12px]'>Home <i className="mx-1 fa-solid fa-angle-right"></i> <span className='text-[#20B15A]'>{routeName}</span></p> 
        </div>
    );
};

export default Common;