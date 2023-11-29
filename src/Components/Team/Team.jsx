import React from 'react';
import Section_Header from '../Section_Header/Section_Header';
import Image from 'next/image';

const teamMember = async () => {
  const response = await fetch(process.env.BASE_URL + "/api/TeamList");
  const data = await response.json();
  return { data: data };
};

const Team = async () => {
  const data = await teamMember();
  const dataAll = data['data'];

  return (
    <div>
      <div className='lg:my-[67px] my-[20px] lg:mx-[105px] mx-2'>
        <Section_Header work="Our Team Member" text="Check our awesome team members" />
        {/* team member */}
        <div className='grid lg:grid-cols-3 grid-cols-1 justify-items-center'>
          {dataAll.map((item, index) => (
            <div key={index} className='relative rounded-lg'>
              <Image src={item.image} width={100} height={100} alt="img" className="h-[387px] w-[392px]" />
              <div className='absolute inset-0 flex items-center justify-center top-[30%]'>
                <div className='w-[145px] h-[50px] bg-white flex items-center justify-center rounded-full'>
                  <a href={item.facebook}><i className="fa-brands fa-facebook-f text-[#737588]"></i></a>
                  <a href={item.twitter}><i className="fa-brands fa-twitter text-[#737588] mx-[32px] "></i></a>
                  <a href={item.instagram}><i className="fa-brands fa-instagram text-[#737588]"></i></a>
                </div>
              </div>
              <h2 className='text-center pt-[30px] pb-[47px] text-[#101A29] font-bold lg:text-[30px] text-[18px]'>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
