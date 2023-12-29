// Product.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const ediableProduct = (productInfo, addToCart) => {
    const url = productInfo.imageUrl != undefined ? productInfo.imageUrl : require("../../assets/daw_icon/daw_icon.png")

    // addToCart()
    return (
        <div
            className=" bg-white flex-col  h-[300px] overflow-x-auto-hidden  mt-2 p-2 w-full rounded">
            {/* Image */}
            <div className="flex h-4/5 w-full bg-red-100">
                <img className="h-full w-full" src={url} alt="product" />
            </div>
            <div className='h-1/5 w-full'>
                <div className='w-full flex flex-row justify-between'>
                    <p className='font-bold '>{productInfo.name}</p>
                    <p>{productInfo.price}</p>
                </div>
                <div className='h-2' />
                <div onClick={() => addToCart({ "name": productInfo.name, "price": productInfo.price, "categories": productInfo.type })} className='hover:bg-blue-300 cursor-pointer w-full h-[26px] flex flex-row justify-center items-center bg-blue-600 rounded'>
                    <FontAwesomeIcon icon={faShoppingBasket} />
                    <div className='w-2' />
                    <p>add to cart</p>
                </div>

            </div>


        </div>
    );
};

ediableProduct.propTypes = {
    productInfo: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
};


export default ediableProduct;
