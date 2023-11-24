 import React from "react";
 import { currentWindowSize } from "../../Utils/utils";


 function header(){
    const w = currentWindowSize().innerWidth;

    return (
        w > 921 && <div className='flex flex-start flex-col h-screen pl-10 w-1/2 bg-black  '>
        {/* left */}
        <div className=' flex w-full h-16 items-center '> 
            <h3 className='text-white'>DAW</h3>
        </div>

        <div className=' flex w-full h-screen pt-16 '> 
            <h3 className='text-white'>Checkout</h3>
        </div>
       </div>
    );
 }

 export default header;