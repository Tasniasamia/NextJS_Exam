import React from 'react';

const Section_Header = ({work,text}) => {
    return (
        <div>
              <h3 className='lg:text-[20px] text-[12px] text-[#20B15A] text-start'>{work}</h3>
        <p className='lg:pt-[15px] pt-[10px] lg:pb-[90px] pb-[40px] lg:text-start text-center font-bold lg:w-[495px] lg:text-[30px] text-[18px]'>{text}</p>
        </div>
    );
};

export default Section_Header;