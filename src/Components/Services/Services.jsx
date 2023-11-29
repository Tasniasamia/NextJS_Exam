import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const Section_Header=dynamic(()=>import ('../Section_Header/Section_Header'));
import './Service.css';
 const serviceData=async()=>{
    const response=await fetch(process.env.BASE_URL+"/api/AllService");
    const data=await response.json();
    return {data:data}
 }
const Services = async() => {
    const dataAll=await serviceData();
    const data=dataAll['data'];
    return (
        <div className='lg:my-[67px] my-[20px] lg:mx-[105px] mx-2 '>
        <Section_Header work="Our All Services" text="We Provide BestWeb design services" />     
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-20'>
            {
                data.map((item,index)=>{
                    return (

            <div key={index} className='bg_custom lg:py-[40px] py-[20px] px-2 lg:px-[30px]'>
            <h1 className='lg:text-[26px] text-[14px] text-black lg:mb-[20px] mb-[10px] font-bold'>{item.title}</h1>
            <p className='lg:text-[16px] text-[12px] text-[#9D9D9D] lg:w-[500px]'>{item.des}</p>
            {/* for web view */}
            <div className='lg:flex hidden justify-center'>  
            <div>
           <div className='flex flex-row-reverse  gap-3 mb-3 mt-[54px]'>
            <Image src={item.image1} alt="data" width={220} height={20} className='rounded-lg'/>
            <Image src={item.image2} alt="data" width={320} height={20} className='rounded-lg'/>
            </div>
            <div className='flex flex-row-reverse  gap-3'>
            <Image src={item.image3} alt="data" width={320} height={20} className='rounded-lg'/>
            <Image src={item.image4} alt="data" width={220} height={20} className='rounded-lg'/>
            </div>
            </div>
           </div>
          {/* for mobile view */}
          <div className='lg:hidden grid grid-cols-1 gap-6 py-[20px] justify-items-center'>
    <Image src={item?.image1} alt="data" width={100} height={100} className='rounded-lg w-full h-[200px]'/>
    <Image src={item?.image2} alt="data" width={100} height={100} className='rounded-lg w-full h-[200px]'/>
    <Image src={item?.image3} alt="data" width={100} height={100} className='rounded-lg w-full h-[200px]'/>
    <Image src={item?.image4} alt="data" width={100} height={100} className='rounded-lg w-full h-[200px]'/>
</div>


            </div>
                    )
                  
                })
            }
       </div>       
        </div>
    );
};

export default Services;