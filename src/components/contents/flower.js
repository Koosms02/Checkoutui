// Product.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


const FlowerProduct = (product, addToCart) => {

    const priceArray = Object.entries(product)
        .filter(([key]) => key.toLowerCase().includes('price'))
        .map(([key, value]) => ({ [key]: value }));

    const url = product.imageUrl != undefined ? product.imageUrl : require("../../assets/daw_icon/daw_icon.png")




    return (
        <div className=" bg-white flex flex-row h-[300px] overflow-x-auto-hidden mt-4 p-2 w-full flex-row rounded">
            {/* Image */}
            <div className="flex h-full w-1/2 bg-red-100">
                <img className="h-full w-full" src={url} alt="product" />
            </div>

            {/* Information */}
            <div className="flex flex-col h-full w-1/2 bg-white p-2">
                {/* Name */}
                <p className="font-bold">{product.name}</p>

                {/* Quantity and Prices */}
                <p className="font-bold text-[12px]">Quantity and Prices</p>
                <div className="flex flex-col h-full overflow-y-auto mt-2">
                    {priceArray.map((price, index) => (
                        <div key={index} className="flex flex-col w-full p-2">
                            {Object.keys(price).map((key) => (
                                price[key] !== undefined && (
                                    <div key={key} className="w-full flex flex-col justify-between items-end">
                                        <div className="flex flex-row w-full justify-between pr-2">
                                            <p>{`${key}: `}</p>
                                            <p className="font-bold">{price[key]}</p>
                                        </div>
                                        <div className="h-2" />
                                        <div onClick={() => addToCart({ "name": product.name, "category": "Flowers", "price": price[key], "quantity": key })}
                                            className=" hover:bg-blue-300 cursor-pointer bg-blue-700 w-full flex justify-center items-center h-[20px] rounded-md ">
                                            <FontAwesomeIcon icon={faShoppingBasket} color="black" size="3px" />
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
    product: PropTypes.object.isRequired,
    // prices: PropTypes.arrayOf(PropTypes.object).isRequired,
    addToCart: PropTypes.func.isRequired,
};


export default FlowerProduct;
