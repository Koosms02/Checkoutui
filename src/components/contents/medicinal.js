// Product.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const medicinalProduct = (productInfo, addToCart) => {
    console.log(productInfo)
    // const url = productInfo.imageUrl != undefined ? productInfo.imageUrl : require("../../assets/daw_icon/daw_icon.png")

    // addToCart()
    return (
        <div className=" bg-white  flex flex-row h-[120px] overflow-x-auto-hidden   w-full flex-row rounded-md">


            {/* Information */}
            <div className="flex flex-col justify-start items-start h-full w-full bg-white p-2 rounded-md">

                <div className="flex flex-row w-full h-20 items-start justify-between ">
                    <p className="font-bold">{productInfo.name}</p>
                    <div className="flex flex-col h-full  ">
                        <p>{productInfo.price}</p>
                    </div>


                </div>
                <div onClick={() => addToCart({ "name": productInfo.name, "categories": productInfo.type, "price": productInfo.price })}
                    className=" hover:bg-blue-300 cursor-pointer bg-blue-700 w-full flex justify-center items-center h-[20px] rounded-md ">
                    <FontAwesomeIcon icon={faShoppingBasket} color="black" size="5px" />
                    <div className="w-2" />
                    <p className="text-white font-bold text-[10px]">add to cart</p>
                </div>

            </div>
        </div>
    );
};

medicinalProduct.propTypes = {
    productInfo: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
};


export default medicinalProduct;
