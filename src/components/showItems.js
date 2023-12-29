import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSubtract } from "@fortawesome/free-solid-svg-icons";
import usecart from "../State/useCart";

function ShowProduct(props) {

    const { cart, removeFromCart } = usecart()

    return (<div className="absolute h-full w-screen flex flex-col bg-white" >

        <div className=" flex flex-row w-full h-20  bg-white items-center justify-between pl-10 pr-10">
            <FontAwesomeIcon className="cursor-pointer" onClick={() => props.setShowItems(false)} icon={faClose} color="black" />
            <p>subprice:1000</p>
            <p>total Price: 1000</p>
        </div>
        <div className="w-full h-full flex-row bg-red-200 ">
            <div className="w-full h-full bg-white flex flex-col overflow-y-auto">
                {
                    cart.map((product, index) => (

                        <div key={index} className="w-full-20 flex flex-row p-2  justify-between items-center m-2 h-20 bg-blue-400">
                            <div>
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                                <p>{product.quantity}</p>
                            </div>
                            <div onClick={() => removeFromCart({ id: product.id })}

                                className="hover:cursor-pointer flex justify-center items-center w-8 h-8 rounded-2xl bg-red-800">
                                <FontAwesomeIcon icon={faSubtract} />
                            </div>

                        </div>))
                }
            </div>
        </div>

    </div>)
}


ShowProduct.propTypes = {
    setShowItems: PropTypes.func.isRequired
}
export default ShowProduct;