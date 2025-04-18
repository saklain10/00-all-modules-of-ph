import React, { useContext } from 'react';
import { MoneyContex } from './FamilyTree';

const Brother = () => {

    const [money, setMoney] = useContext(MoneyContex)

    return (
        <div>
            <h4>Brother</h4>
            <button onClick={() => setMoney(money+1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Brother;