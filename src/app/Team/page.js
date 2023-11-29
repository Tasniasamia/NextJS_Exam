import dynamic from 'next/dynamic';
import React from 'react';
const Common=dynamic(()=>import ('@/Components/Common/Common'));
const Team=dynamic(()=>import ('@/Components/Team/Team'));
const Other=dynamic(()=>import ('@/Components/Other/Other'))
export const generateMetadata=async()=>{
    const response=await fetch(process.env.BASE_URL+"/api/SiteMeta/team");
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
            <Common routeName={"Team"}/>
            <Team/>
            <Other/>
            
        </div>
    );
};

export default page;