import dynamic from 'next/dynamic';
import React from 'react';
const Banner=dynamic(()=>import ('@/Components/Banner/Banner'));
const WorkList=dynamic(()=>import ('@/Components/WorkList/WorkList'));
const Other=dynamic(()=>import ('@/Components/Other/Other'));
const StatList=dynamic(()=>import ('@/Components/StatList/StatList'))
const page = () => {
  return (
    <div>
      <Banner/>
      <WorkList/>
      <StatList/>
      <Other/>
    </div>
  );
};

export default page;