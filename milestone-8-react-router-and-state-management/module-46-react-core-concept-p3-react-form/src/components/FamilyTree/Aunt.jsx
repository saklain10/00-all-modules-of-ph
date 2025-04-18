import React, { useContext } from 'react';
import Cousine from './Cousine';
import { MoneyContex } from './FamilyTree';

const Aunt = ({asset}) => {

    const [money, setMoney] = useContext(MoneyContex)
    const handleAddMoney = () =>{
        setMoney(money+5000)
    }
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousine asset={asset} name="Tom"> </Cousine>
                <Cousine name="Jerry"> </Cousine>
                <button onClick={handleAddMoney}>Add 5000 tk</button>
                
            </section>
        </div>
    );
};

export default Aunt;