import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router'; // Ensure correct import

const Root = () => {
    return (
        <div>
            <Header></Header>
            <h1>Saklain</h1>
              <Outlet /> 
        </div>
    );
};

export default Root;