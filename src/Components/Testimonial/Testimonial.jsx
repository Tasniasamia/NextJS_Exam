import React from 'react';
import Section_Header from '../Section_Header/Section_Header';
import Image from 'next/image';
import './Testimonial.css';
const testimoinalData=async()=>{
    const response=await fetch( process.env.BASE_URL+'/api/TestimonialList');
    const data=await response.json();
    return {data: data}
}
const Testimonial = async() => {
    const dataAll=await testimoinalData();
    const data=dataAll['data'];
    return (
        <div className='lg:py-[67px] py-[20px] lg:px-[105px] px-2'>
            <Section_Header work="TESTIMONIAL LIST" text="Better Agency/SEO Solution At Your Fingertips" />
            <div className='lg:mt-[50px] mt-[20px] grid lg:grid-cols-3 grid-cols-1 justify-items-center gap-20'>
                {
                    data.map((item,index)=>{
                    return (
                        <div key={index} className='lg:py-[48px] py-[24px] lg:px-[23px] px-4 bg_custom rounded-lg'>
                        <div className='flex justify-center'><Image src={item.image} width={100} height={100} className="h-[100px] w-[100px] rounded-lg"/></div>
                        <p className='text-center text-[#9D9D9D] lg:text-[16px] text-[12px] lg:mt-[40px] mt-[20px] lg:mb-[26px] mb-[13px]'>{item.msg}</p>
                       <h1 className='font-bold text-center text-black lg:mt-[26px] mt-[14px] mb-[10px] lg:text-[26px] text-[14px]'>{item.name}</h1>
                       <h2 className='lg:text-[16px] text-[12px] text-black text-center'>{item.designation}</h2>
                       </div>
                    
                        )
                        })
                }
            </div>
        </div>
    );
};

export default Testimonial;
