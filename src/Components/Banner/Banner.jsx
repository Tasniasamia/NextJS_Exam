import Image from 'next/image';
import React from 'react';
const heroData=async()=>{
    const response=await fetch(process.env.BASE_URL+"/api/HeroList")
    const data=await response.json();
    return {data: data}
}
const brandlist=async()=>{
    const response=await fetch(process.env.BASE_URL+"/api/BrandList");
    const data=await response.json();
    return {brand: data}
}
const Banner = async() => {
    // for hero section
    const responseData=await heroData();
    const data=responseData['data']
    // for brand section
    const responseData2=await brandlist();
    const brandata=responseData2['brand']
    return (
        <div className='bg_gradient'>
        {/* first section of banner */}
         <div className='bg_gradient lg:pt-[69px] lg:pb-[80px] pb-[40px] pt-[30px] lg:px-[102px] px-2 lg:flex  flex-column justify-between items-center'>
            {/* section-left */}
            <div className='flex-1 flex'>
                <div>
                <h1 className='text-black lg:text-[50px] text-[22px] font-bold'>{data['title']}</h1>
                <p className='lg:text-[20px] text-[12px] mt-[10px]'>{data['description']}</p>
                <button className='bg-[#20B15A] lg:px-[30px] px-[15px] lg:py-[20px] py-[10px] text-white lg:mt-[50px] mt-[20px] rounded-lg lg:text-[20px] text-[12px]'>Get Started</button>
                </div>
            </div>
          
            {/* section-right for web */}
        <div className='lg:block hidden flex-1'>  
        <div className='flex flex-row-reverse  gap-3 mb-3'>
            <Image src={data?.image1} alt="data" width={200} height={20} className='rounded-lg'/>
            <Image src={data?.image2} alt="data" width={300} height={20} className='rounded-lg'/>
            </div>
            <div className='flex flex-row-reverse  gap-3'>
            <Image src={data?.image3} alt="data" width={300} height={20} className='rounded-lg'/>
            <Image src={data?.image4} alt="data" width={200} height={20} className='rounded-lg'/>
            </div>
        </div>
            {/* section-right for mobile */}
            </div>
            <div className='lg:hidden grid grid-cols-1 gap-6 py-[20px] justify-items-center'>
    <Image src={data?.image1} alt="data" width={100} height={100} className='rounded-lg w-full h-[200px]'/>
    <Image src={data?.image2} alt="data" width={100} height={100} className='rounded-lg w-full h-[200px]'/>
    <Image src={data?.image3} alt="data" width={100} height={100} className='rounded-lg w-full h-[200px]'/>
    <Image src={data?.image4} alt="data" width={100} height={100} className='rounded-lg w-full h-[200px]'/>
</div>

        {/* Second Section for banner */}
        <div className='pb-[34px]'>
        <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-3 bg-[#F8FFF9] justify-items-center py-4 text-center '>
{
    brandata.map((item,index)=>{
        return (
        <div key={index}>
     {/* <h1>{item.name}</h1> */}
     <div className='flex justify-center items-center'>
     <Image src={item.image} width={120} height={10} alt="image"className='w-full lg:h-[30px] h-[20px]'/>

    </div>

       </div>
        )
    })
}

</div>
</div>
        
        </div>
    );
};

export default Banner;


