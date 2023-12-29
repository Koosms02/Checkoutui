import React from "react";
import { currentWindowSize } from "../Utils/utils";
import usecart from "../State/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSubtract } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

export function Items(props) {

    const w = currentWindowSize().innerWidth;
    /* eslint-disable */
    const { cart, removeFromCart } = usecart();

    const [subTotalPrice, setSubTotalPrice] = React.useState(0);
    const [totalPrice, setTotalPrice] = React.useState(0)

    //add the total price
    React.useEffect(() => {
        let total = 0;
        if (props.transCost != 0) {
            total = props.transCost + subTotalPrice
        }
        setTotalPrice(total)
    }, [props.transCost])

    React.useEffect(() => {
        let total = 0;

        // Iterate through each item in the cart and sum their prices
        cart.forEach((item) => {
            // Extract the numerical value from the string and convert it to a number
            console.log(typeof (item.price))
            const priceValue = parseFloat(item.price.replace("R", "")); // Remove "R" and parse as float

            // Add the extracted price value to the total
            total += priceValue;
        });

        // Update the state with the total price
        setSubTotalPrice(total);
    }, [cart,]);

    return (
        w > 1025 && <div className='flex flex-start justify-between h-full flex-col h-screen pl-4 w-1/2 bg-white  '>
            {/* left */}
            <div className=' flex w-full h-16 items-center '>
                <h3 className='text-black '>Products</h3>
            </div>

            <div className="w-full h-full bg-white flex flex-col overflow-y-auto">
                {
                    cart.map((product) => (

                        <div className="w-full-20 flex flex-row p-2  justify-between items-center m-2 h-20 bg-blue-400">
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
            <div className="h-full max-h-32">
                <p className="text-black"> Sub Total:R {subTotalPrice}</p>
                <p className="text-black"> Total:R {totalPrice}</p>
            </div>
        </div>);
}

Items.propTypes = {
    transCost: PropTypes.func.isRequired, // setCost should be a function and is required
};