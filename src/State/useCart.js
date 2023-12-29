import React, { useReducer } from "react";
import CartContext from "./cartContext";
import PropTypes from "prop-types";
import { useContext } from "react";


//cart reducer to manage the state 

let itemIdCounter = 0;

const cartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cartItems: [...state.cartItems, action.payload] }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload.id)
            };

        default:
            return state;

    }

}


export const CartProvider = ({ children }) => {

    //initial state using useReducer

    const [state, dispatch] = useReducer(cartReducer, { cartItems: [] })

    //action to dispatch

    const addToCart = (item) => {
        const uniqueId = itemIdCounter++;
        const itemWithId = { ...item, id: uniqueId };
        dispatch({ type: "ADD_TO_CART", payload: itemWithId });
    }

    const removeFromCart = (item) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: item })
    }

    return (
        <CartContext.Provider value={{
            cart: state.cartItems, addToCart, removeFromCart
        }}>
            {children}
        </CartContext.Provider>

    )

};


CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default function usecart() {
    const contextValue = useContext(CartContext);

    if (!contextValue) {
        throw new Error("useCart must be within a CartProvider");
    }


    return contextValue;

}

