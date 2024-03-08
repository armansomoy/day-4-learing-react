import React from 'react';
import './Bottle.css';

const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price} = bottle;
    return (
        <div className='bootle'>
            <img src={img} alt="" />
            <h3>Name: {name} </h3>
            <p>Price: ${price} </p>
            <button onClick={() => {handleAddToCart(bottle)}}> Purchase</button>
        </div>
    );
};

export default Bottle;