import dynamic from 'next/dynamic';
import React from 'react';

const Common = dynamic(() => import('@/Components/Common/Common'));
const Testimonial = dynamic(() => import('@/Components/Testimonial/Testimonial'));
const Other = dynamic (() => import ('@/Components/Other/Other'))
const Page = () => {
    return (
        <div>
            <Common routeName={"Testimonial List"} />
            <Testimonial />
            <Other/>
        </div>
    );
};

export default Page;
