import React from 'react';
import Section_Header from '../Section_Header/Section_Header';
import Image from 'next/image';

const feature=async()=>{
    const response=await fetch(process.env.BASE_URL+"/api/FeaturedProject");
    const data=await response.json();
    return { data : data }
}
const Feature_Project = async () => {
    const dataAll=await feature();
    const data=dataAll['data'];
    return (
        <div className='lg:py-[67px] py-[20px] lg:px-[105px] px-2 bg-[#F0FDF4]  '>
        <Section_Header work="Featured Project" text="We provide the Perfect Solution to your business growth " />  

        <div className='lg:pt-[72px] pt-[36px] ]'>
            {/* for web view */}
            <div className='lg:flex hidden gap-6'>
            <div>
                <Image src={data[0].image} width={100} height={100} className="lg:w-[603px] lg:h-[531px] rounded-lg"/>
                <h1 className='text-[14px] mt-[15px] secondary-color opacity-[0.8]'>App Design - {`${new Date(data[0].created_at).toDateString()} `}</h1>
                <h1 className='mt-[10px] text-[24px] text-[#1E1F4B] font-bold'>{data[0].title}</h1>
            </div>
            <div>
            <div className='grid grid-cols-2 gap-6'>
            {
                data.slice(0,4).map((item,index)=>{
            return (
                <div key={index} className='w-[287px] h-auto'>
                <Image src={item.image} width={100} height={100} className="lg:w-[287px] lg:h-[188px] rounded-lg"/>
                <h1 className='text-[14px] mt-[15px] secondary-color opacity-[0.8]'>App Design - {`${new Date(item.created_at).toDateString()} `}</h1>
                <h1 className='mt-[10px] text-[24px] text-[#1E1F4B] font-bold'>{item.title}</h1>
            </div>




                 ) })
            }
            </div>
            </div>
            





            </div>
         {/* for mobile view */}
         <div className='lg:hidden grid grid-cols-1 gap-6 justify-items-center'>
            {
                data.slice(0,4).map((item,index)=>{
            return (
                <div key={index} className='w-[287px] h-auto'>
                <Image src={item.image} width={100} height={100} className="lg:w-[287px] lg:h-[188px] h-[188px] w-full rounded-lg"/>
                <h1 className='text-[14px] mt-[15px] secondary-color opacity-[0.8]'>App Design - {`${new Date(item.created_at).toDateString()} `}</h1>
                <h1 className='mt-[10px] text-[16px] text-[#1E1F4B] font-bold'>{item.title}</h1>
            </div>




                 ) })
            }
            </div>

            </div>           
        </div>
    );
};

export default Feature_Project;