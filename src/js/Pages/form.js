import React from "react";

export function Form(){
    return (

        <div className='flex flex-start flex-col h-screen pl-10 w-full bg-black  '>
        {/* left */}
        <div className=' flex w-full h-16 items-center '> 
            <h3 className='text-white'></h3>
        </div>

        <div className=' flex w-full h-screen pt-16 '> 
            <h3 className='text-white'>Who is checking out?</h3>
        </div>
       </div>
    );
}