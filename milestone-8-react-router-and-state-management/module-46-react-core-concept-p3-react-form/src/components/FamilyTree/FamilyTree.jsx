//Prop dealing

import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'

export const AssetContex = createContext("")
export const MoneyContex = createContext(0)
const FamilyTree = () => {

    const [money, setMoney] = useState(0)

    const asset = "diamond"
    const newAsset = "gold"
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h4>Total Family money: {money}</h4>

            <MoneyContex value={[money, setMoney]}>
                <AssetContex.Provider value={newAsset}>
                    <Grandpa asset={asset}></Grandpa>
                </AssetContex.Provider>
            </MoneyContex>
        </div>
    );
};

export default FamilyTree;

/**
 * 1. create a contex using createContex with a default value
 * make sure you export the contex to be used in other file
 */