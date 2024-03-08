import React from "react";
import PropTypes from "prop-types";
import Bottle from "../Bottle/Bottle";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h5>Cart: {cart.length}</h5>
      <div className="cart">
        {cart.map((bottle) => (
          <div  key={bottle.id}>
             <img src={bottle.img}></img>
             <button onClick={() => {handleRemoveFromCart(bottle.id)}}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
