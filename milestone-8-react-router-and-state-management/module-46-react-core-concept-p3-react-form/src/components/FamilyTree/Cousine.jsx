import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousine = ({name, asset}) => {
    return (
        <div>
            <h4>{name}</h4>
            {
                name === "Tom" && <Special asset={asset}></Special>
            }
            {
               name === "Jerry" && <Friend></Friend>
            }
        </div>
    );
};

export default Cousine;