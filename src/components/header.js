import React from "react";
import { currentWindowSize } from "../Utils/utils";
import PropTypes from "prop-types"


function header(props) {
    const w = currentWindowSize().innerWidth;

    return (
        w > 921 && <div className='flex flex-start flex-col h-screen pl-10 w-1/2 bg-black  '>

            {/* left */}
            <div className=' flex w-full h-16 items-center '>
                <h3 className='text-white'>DAW Dispensary</h3>
            </div>

            <div className=' flex w-full h-screen pt-16  '>
                <h3 className='text-white'>Checkout</h3>
            </div>

            {(w < 1025 && w > 921) &&
                <div className="w-full h-full ">
                    <p onClick={() => { props.setShowItems(true) }} className="cursor-pointer text-white">my product</p>
                </div>}
        </div>
    );
}

header.propTypes = {
    setShowItems: PropTypes.func.isRequired
}

export default header;