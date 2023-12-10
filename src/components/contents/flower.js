// Product.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const FlowerProduct = (name, prices, addToCart) => {

    // addToCart()
    return (
        <div className=" bg-white flex flex-row h-[300px] overflow-x-auto-hidden mt-4 p-2 w-full flex-row rounded">
            {/* Image */}
            <div className="flex h-full w-1/2 bg-red-100">
                <img className="h-full w-full" src="https://images.unsplash.com/photo-1656841331595-aa7d15483eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VlZCUyMHN0cmFpbnxlbnwwfHwwfHx8MA%3D%3D" alt="product" />
            </div>

            {/* Information */}
            <div className="flex flex-col h-full w-1/2 bg-white p-2">
                {/* Name */}
                <p className="font-bold">{name}</p>

                {/* Quantity and Prices */}
                <p className="font-bold text-[12px]">Quantity and Prices</p>
                <div className="flex flex-col h-full overflow-y-auto mt-2">
                    {prices.map((price, index) => (
                        <div key={index} className="flex flex-col w-full p-2">
                            {Object.keys(price).map((key) => (
                                price[key] !== undefined && (
                                    <div key={key} className="w-full flex flex-col justify-between items-center">
                                        <div className="flex flex-row w-full justify-between pr-2">
                                            <p>{`${key}: `}</p>
                                            <p className="font-bold">{price[key]}</p>
                                        </div>
                                        <div className="h-2" />
                                        <div onClick={() => addToCart({ "product": name, "category": "Flowers", "price": price[key], "quantity": key })}
                                            className=" hover:bg-blue-300 cursor-pointer bg-blue-700 w-full flex justify-center items-center h-[20px] rounded-md ">
                                            <FontAwesomeIcon icon={faShoppingBasket} color="black" size="5px" />
                                            <div className="w-2" />
                                            <p className="text-white font-bold text-[10px]">add to cart</p>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

FlowerProduct.propTypes = {
    name: PropTypes.string.isRequired,
    prices: PropTypes.arrayOf(PropTypes.object).isRequired,
    addToCart: PropTypes.func.isRequired,
};


export default FlowerProduct;
