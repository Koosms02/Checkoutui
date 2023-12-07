import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


function nav() {
    return (
        <div className="flex flex-row fixed h-12 w-full bg-opacity-50  items-center justify-between pl-4 pr-4 ">
            <p className="font-bold text-white ">Daw Dispensary</p>
            <FontAwesomeIcon icon={faShoppingBasket} color="white" />

        </div>)
}
export default nav;