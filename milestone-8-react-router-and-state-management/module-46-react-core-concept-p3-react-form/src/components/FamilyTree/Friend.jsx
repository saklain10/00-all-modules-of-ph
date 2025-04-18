import React, { useContext } from 'react';
import { MoneyContex } from './FamilyTree';

const Friend = () => {

    const[money, setMoney] = useContext(MoneyContex)
    return (
        <div>
            <h4>Friend</h4>
            <p>Family Got: {money}</p>
        </div>
    );
};

export default Friend;