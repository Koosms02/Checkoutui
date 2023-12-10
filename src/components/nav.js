import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import usecart from "../State/useCart";
import './nav.css'
import { useNavigate } from "react-router-dom";

function nav() {
    const { cart } = usecart();
    const navigate = useNavigate()

    return (


        <div className="flex flex-row fixed h-12 w-full bg-opacity-50  items-center justify-between pl-4 pr-4 ">
            <p className="font-bold text-white ">Daw Dispensary</p>
            <div onClick={() => {
                if (cart.length != 0) {

                    navigate("/checkout")
                }

                //there was an error
            }} className=" cursor-pointer h-16  w-10 flex justify-center items-center">
                <p className="text-blue"></p>
                <FontAwesomeIcon icon={faShoppingBasket} color="white" size="xl" />
                <span className='badge badge-warning' id='lblCartCount'>  {cart.length} </span>
            </div>

        </div>)
}
export default nav;