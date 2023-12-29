import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import usecart from "../State/useCart";
import './nav.css'
import { useNavigate } from "react-router-dom";
import { ScrollListener } from "../Utils/utils";

function nav() {
    const { cart } = usecart();
    const navigate = useNavigate()
    const scrollHeight = ScrollListener()

    return (
        <div className={scrollHeight > 100 ?
            "flex flex-row bg-black fixed h-12 w-full  items-center justify-between pr-3 pl-3 md:pl-4 md:pr-4 lg:pl-10 lg:pr-10 xl:pr-20 xl:pl-20" :
            "flex flex-row fixed h-12 w-full bg-opacity-50  items-center justify-between pr-3 pl-3 md:pl-4 md:pr-4 lg:pl-10 lg:pr-10 xl:pr-20 xl:pl-20"}>
            <div className="flex flex-row items-center ">
                <p className="text-white"> icon</p>
                <div className="w-4" />
                <p className="font-bold text-white ">Daw Dispensary</p>
                <div className="w-8" />
                {scrollHeight > 100 && <div>
                    <FontAwesomeIcon onClick={() => {
                        //how to set scroll to zero
                    }} className="hover:cursor-pointer" icon={faSearch} color="white" />
                </div>}
            </div>
            <div className="flex flex-row ">
                {/* facebook icon */}

                {/* instagram icon */}
                <div onClick={() => {
                    if (cart.length != 0) {

                        navigate("/checkout")
                    }

                    //there was an error
                }}

                    className=" cursor-pointer h-16  w-10 flex justify-center items-center ">
                    <p className="text-blue"></p>
                    <FontAwesomeIcon icon={faShoppingBasket} color="white" size="xl" />
                    <span className='badge badge-warning' id='lblCartCount'>  {cart.length} </span>
                </div>
                {/* whatsapp icon */}
            </div>

        </div>)
}

export default nav;