import React from 'react';
import Cousine from './Cousine';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousine name='Rafsan'></Cousine>
                <Cousine name="Hafsa"></Cousine>
            </section>
        </div>
    );
};

export default Uncle;