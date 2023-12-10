// Product.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const ediableProduct = (productInfo, addToCart) => {

    // addToCart()
    return (
        <div onClick={addToCart}
            className=" bg-white flex-col  h-[300px] overflow-x-auto-hidden  mt-2 p-2 w-1/2  rounded">
            {/* Image */}
            <div className="flex h-4/5 w-full bg-red-100">
                <img className="h-full w-full" src="https://images.unsplash.com/photo-1656841331595-aa7d15483eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VlZCUyMHN0cmFpbnxlbnwwfHwwfHx8MA%3D%3D" alt="product" />
            </div>
            <div className='h-1/5 w-full'>
                <div className='w-full flex flex-row justify-between'>
                    <p className='font-bold '>{productInfo.name}</p>
                    <p>{productInfo.price}</p>
                </div>
                <div className='h-2' />
                <div onClick={() => { addToCart({ "name": productInfo.name, "price": productInfo.price }) }} className='hover:bg-blue-300 cursor-pointer w-full h-[26px] flex flex-row justify-center items-center bg-blue-600 rounded'>
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
