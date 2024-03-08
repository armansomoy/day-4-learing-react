import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
    console.log(bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);

    addToLS(bottle.id);
  };

  // load cart from localstorage
  useEffect(() => {
    console.log(bottles.length)
    if(bottles.length > 0){
        const storedCart = getStoredCart();
        console.log(storedCart, bottles);

        const savedCart = [];
        for ( const id of storedCart) {
            console.log(id);
            const bottle = bottles.find( bottle => bottle.id === id)
            if(bottle){
                savedCart.push(bottle)
            }
        }
        console.log(savedCart);
        setCart(savedCart);
    }


  }, [bottles]);

  return (
    <div>
      <h2>Bottles: {bottles.length}</h2>
      <div>
        <Cart cart={cart}></Cart>
        <ul>{/* {bottle && <li>{bottle.name}</li>} */}</ul>
      </div>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            handleAddToCart={handleAddToCart}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
