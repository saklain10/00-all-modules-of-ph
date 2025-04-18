import React from 'react';
import PricingFeature from './PricingFeature';


const PricingCard = ({pricing}) => {
    const {name,price,description,features} = pricing;
    console.log(pricing)
    return (
        <div className='border bg-amber-600 rounded-2xl p-4 flex flex-col'>
           <div>
            {/* card header */}
            <h1 className='text-5xl pb-1'>{name}</h1>
            <h4 className='text-3xl'>{price}</h4>
           </div>
           {/* card body */}
           <div className='bg-amber-200 rounded-2xl mt-5 flex-1'>
            <p className='p-3 text-black'>{description}</p>
            {
                features.map((feature,index) => <PricingFeature feature = {feature} key={index}></PricingFeature>)
            }
            
           </div>
           <button className="btn w-full rounded-xl mt-2">Subscribe</button>
        </div>
    );
};

export default PricingCard;