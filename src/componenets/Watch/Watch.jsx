import React from 'react';
import './Watch.css';

const Watch = ({watch}) => {
    const {name, price} = watch;
    return (
        <div>
            <h2>Watches: </h2>
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
        </div>
    );
};

export default Watch;