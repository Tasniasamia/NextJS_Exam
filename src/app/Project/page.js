import Other from '@/Components/Other/Other';
import dynamic from 'next/dynamic';
import React from 'react';
const Common=dynamic(()=>import ('@/Components/Common/Common'));
const Project=dynamic(()=>import ('@/Components/Project/Project'))
const page = () => {
    return (
        <div>
        <Common routeName={"All Project"}/>
        <Project/>
        <Other/>
        </div>
    );
};

export default page;