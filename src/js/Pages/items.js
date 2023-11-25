import React from "react";
import { currentWindowSize } from "../../Utils/utils";

export function Items() {

    const w = currentWindowSize().innerWidth;
    return (
        w > 1025 && <div className='flex flex-start flex-col h-screen pl-10 w-1/2 bg-white  '>
            {/* left */}
            <div className=' flex w-full h-16 items-center '>
                <h3 className='text-black'>Items</h3>
            </div>

            <div className=' flex w-full h-screen pt-16 '>
                <h3 className='text-white'>Who is checking out?</h3>
            </div>
        </div>);
}