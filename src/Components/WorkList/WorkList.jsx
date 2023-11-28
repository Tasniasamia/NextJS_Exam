import React from 'react';
const workList=async()=>{
    const response=await fetch(process.env.BASE_URL+"/api/WorkList")
    const data=await response.json();

    return { data:data}
}
const WorkList = async() => {
    const dataAll=await workList();
    const data=dataAll['data']
    return (
        <div className='lg:py-[67px] py-[30px] lg:px-[105px] px-[52px]'>
        <h3 className='lg:text-[20px] text-[12px] text-[#20B15A] text-start'>Work List</h3>
        <p className='lg:pt-[15px] pt-[10px] lg:pb-[90px] pb-[40px] lg:text-start text-center font-bold lg:w-[495px] lg:text-[30px] text-[18px]'>We provide the Perfect Solution to your business growth</p>
       <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 justify-items-center lg:justify-items-start'>
      {
        data.map((item,index)=>{
            return (
                <div key={index} className='lg:w-[380px]'>
                 <h1 className='text-black lg:text-[24px] text-[12px] font-bold  text-center lg:text-start lg:mb-[15px] mb-[8px]'>{item.title}</h1>
                 <p className='lg:text-[18px] text-[10px] lg:text-start text-center '>{item.des}</p>
                 <div className='lg:mt-[40px] mt-[20px] lg:text-[18px] text-[12px] flex lg:justify-start justify-center items-center'>Learn More<i className=" text-black ms-2 fa-solid fa-arrow-right"></i></div>
                </div>
                
            )
        })
      }

       </div>
     


        </div>

        
    );
};

export default WorkList;