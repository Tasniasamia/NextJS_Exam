import dynamic from 'next/dynamic';
import React from 'react';
const Common=dynamic(()=>import ('@/Components/Common/Common'));
const Team=dynamic(()=>import ('@/Components/Team/Team'));
const Other=dynamic(()=>import ('@/Components/Other/Other'))
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