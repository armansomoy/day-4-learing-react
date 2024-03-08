import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, []) 

    const handleAddToCart = bottle => {
        console.log(bottle)
        const newCart = [...cart, bottle]
        setCart(newCart)
    }


    return (
        <div>
            <h2>Bottles: {bottles.length}</h2>
            <div>
                <h4> Cart: {cart.length}</h4>
                <ul>
                    {/* {bottle && <li>{bottle.name}</li>} */}
                </ul>
            </div>
           <div className='bottles'>
           {
                bottles.map(bottle => <Bottle handleAddToCart={handleAddToCart} key={bottle.id} bottle={bottle}></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;