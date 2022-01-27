import React from 'react';
import Cross from "../assets/cross.svg"
import { useGlobalContext } from '../context';

const Cart = ({ cartIsOpen, cartToggle }) => {

    const { amount } = useGlobalContext();

    return (
        <div className={cartIsOpen ? "cart_toggle" : "hidden"}>
            <div className="cart-close flex justify-between items-center h-20 " onClick={cartToggle}>
                <h1>Shopping Cart ({amount}) </h1>
                <img className="w-4" src={Cross} alt="" />
            </div>
            <div className="cart-items-list">
                
            </div>
        </div>
    )
};

export default Cart;
