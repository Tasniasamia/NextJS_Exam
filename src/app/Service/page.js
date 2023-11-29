import dynamic from 'next/dynamic';
import React from 'react';
const Common=dynamic(()=>import ('@/Components/Common/Common'));
const Services=dynamic(()=>import ('@/Components/Services/Services'));
const Other=dynamic(()=>import ('@/Components/Other/Other'))
const page = () => {
    return (
        <div>
            <Common routeName={"Our Services"}/>
            <Services/>
            <Other/>
        </div>
    );
};

export default page;