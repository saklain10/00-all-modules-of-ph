// import React from 'react';

// const PricingOption = ({pricingPromise}) => {
//     const pricingData = use(pricingPromise);
//     console.log(pricingData);
//     return (
//         <div>

//         </div>
//     );
// };

// export default PricingOption;


import React, { useEffect, useState } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';
const PricingOption = ({ pricingPromise }) => {
    const [pricingData, setPricingData] = useState([]);

    useEffect(() => {
        pricingPromise.then(data => {
            setPricingData(data);
            // console.log(data); // ✅ This will show the data in the console
        });
    }, [pricingPromise]);
    // console.log(pricingData)

    return (
        <div>
             <h2 className='text-6xl m-10 text-center font-bold'>Get Our Membership</h2>
            <div className='grid md:grid-cols-3 gap-8 m-5'>
                {
                    pricingData.map(pricing =><PricingCard pricing={pricing} key={pricing.id}></PricingCard>)
                }
            </div>

            <div className='grid md:grid-cols-3 gap-8 m-5'>
                {
                    pricingData.map(pricing => <DaisyPricing pricing={pricing} key={pricing.id}></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOption;
