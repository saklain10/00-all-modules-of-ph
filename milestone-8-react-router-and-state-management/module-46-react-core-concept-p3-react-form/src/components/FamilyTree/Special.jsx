import React, { useContext } from 'react';
import { AssetContex } from './FamilyTree';

const Special = ({name, asset}) => {
    const newAsset = useContext(AssetContex)

console.log("newAsset", newAsset)

    return (
        <div>
            <h4>Special: {name}</h4>
            <p>Asset: {asset}</p>
            <p>NewAsset: {newAsset}</p>
        </div>
    );
};

export default Special;