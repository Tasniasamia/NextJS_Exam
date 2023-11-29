import Image from 'next/image';
import React from 'react';
const Section_Header=dynamic(()=>import ('../Section_Header/Section_Header'))
import './Project.css';
import dynamic from 'next/dynamic';
const projects=async()=>{
    const response=await fetch(process.env.BASE_URL+"/api/AllProject");
    const data=await response.json();
    return {data:data}
}
const Project =async() => {
    const data=await projects();
    const dataAll=data['data'];
    return (

        <div className='lg:py-[67px] py-[20px] lg:px-[105px] px-2'>
        <Section_Header work="ALL PROJECT"text="Better Agency/SEO Solution At Your Fingertips"/>
        <div className='lg:pt-[50px] pt-[20px] grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-6 justify-items-center lg:justify-items-start '>
            {
                dataAll.map((item,index)=>{
               return (
                <div key={index} className='p-[30px] bg_custom rounded-lg '>
               <div className='flex justify-center'> <Image src={item.image} width={100} height={100} className='lg:w-[544px] lg:h-[472px] h-[250px] w-[400px] rounded-lg'/></div>
                <h1 className='lg:text-[26px] text-[14px] mt-[30px] text-black'>{item.title}</h1>
                </div>
               )

                })
            }
        </div>
        </div>
    );
};

export default Project;