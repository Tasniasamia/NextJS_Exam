import dynamic from 'next/dynamic';
import React from 'react';
const Banner=dynamic(()=>import ('@/Components/Banner/Banner'));
const WorkList=dynamic(()=>import ('@/Components/WorkList/WorkList'));
const Other=dynamic(()=>import ('@/Components/Other/Other'));
const StatList=dynamic(()=>import ('@/Components/StatList/StatList'));
const Feature_Project = dynamic (()=> import ('@/Components/Feature_Project/Feature_Project'))
export const generateMetadata=async()=>{
   const response=await fetch(process.env.BASE_URL+"/api/SiteMeta/home");
   const data=await response.json();
   return {
    title: data[0].title,
    description:data[0].description,
    keywords:data[0].keywords,
    OpenGraph: {
      images:data[0].image
    }

   }
}
const page = () => {
 return (
    <div>
      <Banner/>
      <WorkList/>
      <StatList/>
      <Feature_Project/>
      <Other/>
    </div>
  );
};

export default page;