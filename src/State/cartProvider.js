import CartProvider from cartProvide;

export const cartProvide = ({ children }) => {
    return (
        <CartProvider.provider value={null}>
            {children}
        </CartProvider.provider>

    )

};