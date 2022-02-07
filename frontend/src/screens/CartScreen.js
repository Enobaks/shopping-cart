import React, { useEffect } from "react";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import "./CartScreen.css";

const CartScreen = () => {
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const {cartItems} = cart


  return (
    <div className="cartscreen">
      <div className="cartscreen_left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to='/'>Go Back</Link>
          </div>
        ) : cartItems.map(item => (
          <CartItem />
        ))}
      </div>
      <div className="cartscreen_right">
        <div className="cartscreen_info">
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>
        <div>Proceed To Checkout</div>
      </div>
    </div>
  );
};

export default CartScreen;
