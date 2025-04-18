import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const PricingFeature = ({feature}) => {
    return (
        <p className='text-blue-900 p-1 m-1  rounded-xl flex gap-2'><CircleCheckBig></CircleCheckBig>{feature}</p>
    );
};

export default PricingFeature;