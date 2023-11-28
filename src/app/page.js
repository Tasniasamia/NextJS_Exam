import Other from '@/Components/Other/Other';
import StatList from '@/Components/StatList/StatList';
import dynamic from 'next/dynamic';
import React from 'react';
const Banner=dynamic(()=>import ('@/Components/Banner/Banner'));
const WorkList=dynamic(()=>import ('@/Components/WorkList/WorkList'))
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