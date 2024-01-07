// Product.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const psychedelicsProduct = (productInfo, addToCart) => {
    console.log(productInfo)
    // addToCart()
    return (
        <div className=" bg-white  flex flex-row h-[150px] overflow-x-auto-hidden   w-full flex-row rounded">
            {/* Information */}
            <div className="flex flex-col justify-start items-start h-full w-full bg-white p-2">

                <div className="flex flex-col w-full h-20 items-start justify-between ">
                    <p className="font-bold">{productInfo.name}</p>
                    {Object.entries(productInfo).map(([key, value]) => (key != "type") ? (
                        key != "name" ? (
                            <div key={key} className="flex flex-col w-full items-start justify-between">
                                <div className="flex flex-row h-full w-full justify-between items-end">
                                    <p className="font-bold">{key}</p>
                                    <p>{value}</p>
                                </div>
                                <div onClick={() => addToCart({ "name": productInfo.name, "categories": productInfo.type, "price": value, "quantity": key })}
                                    className=" hover:bg-blue-300 cursor-pointer bg-blue-700 w-full flex justify-center items-center h-[20px] rounded-md ">
                                    <FontAwesomeIcon icon={faShoppingBasket} color="black" size="sm" />
                                    <div className="w-2" />
                                    <p className="text-white font-bold text-[10px]">add to cart</p>
                                </div>
                            </div>

                        ) : (null)
                    ) : null)}


                </div>


            </div>
        </div>
    );
};

psychedelicsProduct.propTypes = {
    productInfo: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
};


export default psychedelicsProduct;
