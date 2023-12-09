import CartContext from "./cartContext";
import { useContext } from "react";

export const cartProvide = ({ children }) => {
    return (
        <CartContext.Provider value={null}>
            {children}
        </CartContext.Provider>

    )

};


export default function usecart() {
    return useContext(CartContext)
}