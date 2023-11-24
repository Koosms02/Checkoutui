import React from "react";
import {useForm} from "react-hook-form"


export function Form(){

    const {register , handleSubmit} = useForm();
    const handleRegistration =(data) => console.log(data)


    return (

        <div className='flex flex-start flex-col h-screen pl-10 overflow-y-auto w-full bg-black  '>
              {/*  users information */}
            <div className=' flex w-full h-16 items-center '> 
            </div>

            <div className=' flex w-full h-screen pt-16 flex-col'> 
                <h3 className='text-white'>Who is placing an order?</h3>
                
                <form onSubmit={handleSubmit(handleRegistration)}>
                    <div className="h-10"/>
                    <div className="flex flex-col w-1/2 h-16" >
                        <label className="text-white">Email</label>
                        <div className="h-2"></div>
                        <input name="name " {...register('email')}/>
                    </div>

                    <div className="h-4"/>
                    <div className="flex flex-row w-1/2 h-16" >
                        <div className="pr-10">
                            <label className="text-white">First name</label>
                            <div className="h-2"></div>
                            <input name="name " {...register('name')}/>
                        </div>
                        
                        <div>
                            <label className="text-white">second name</label>
                            <div className="h-2"></div>
                            <input name="name " {...register('second name')}/>
                        </div>
                    
                    
                    </div>
                    
                    <div className="h-10"/>

                    <div type="submit" className="hover:bg-red-400 cursor-pointer flex h-12 w-44 justify-center items-center bg-white ">
                        <h3>Proceed to Shipping</h3>
                    </div>

                </form>

            </div>

            <div className=' flex w-full h-16 items-center '> 
            </div>


            {/* Proceeding to the order  */}

            <div className=' flex w-full h-16 items-center '> 
            </div>

            <div className=' flex w-full h-screen pt-16 flex-col'> 
                <h3 className='text-white'>Where would you like the order be sent?</h3>
                
                <form onSubmit={handleSubmit(handleRegistration)}>
                    <div className="h-10"/>
                    <div className="flex flex-col w-1/2 h-16 " >
                        <label className="text-white">Country</label>
                        <div className="h-2"></div>
                        <input name="name " {...register('country')}/>
                    </div>

                    <div className="flex flex-col w-1/2 h-16 " >
                        <label className="text-white">Address</label>
                        <div className="h-2"></div>
                        <input name="name " {...register('Address')}/>
                    </div>

                    <div className="h-4"/>
                    <div className="flex flex-row w-1/2 h-16" >
                        <div className="pr-10">
                            <label className="text-white">City</label>
                            <div className="h-2"></div>
                            <input name="name " {...register('City')}/>
                        </div>
                        
                        <div>
                            <label className="text-white">Zip Code</label>
                            <div className="h-2"></div>
                            <input name="name " {...register('Zip Code')}/>
                        </div>
                    
                    
                    </div>


                    <div className="flex flex-col w-1/2 h-16 " >
                        <label className="text-white">Phone number*</label>
                        <div className="h-2"></div>
                        <input name="name " {...register('Address')}/>
                    </div>

                    
                    <div className="h-10"/>

                    <div type="submit" className="hover:bg-red-400 cursor-pointer flex h-12 w-44 justify-center items-center bg-white ">
                        <h3>Proceed to payments</h3>
                    </div>



                </form>

            </div>

            <div className=' flex w-full h-16 items-center '> 
            </div>
            

            {/* payment details */}
            
            <div className=' flex w-full h-16 items-center '> 
            </div>

            <div className=' flex w-full h-screen pt-16 flex-col'> 
                <h3 className='text-white'>How would you like to pay?</h3>
                
                <form onSubmit={handleSubmit(handleRegistration)}>
                    <div className="h-10"/>
                    <div className="flex flex-col w-1/2 h-16 " >
                        <label className="text-white">Country</label>
                        <div className="h-2"></div>
                        <input name="name " {...register('country')}/>
                    </div>

                    <div className="flex flex-col w-1/2 h-16 " >
                        <label className="text-white">Address</label>
                        <div className="h-2"></div>
                        <input name="name " {...register('Address')}/>
                    </div>

                    <div className="h-4"/>
                    <div className="flex flex-row w-1/2 h-16" >
                        <div className="pr-10">
                            <label className="text-white">City</label>
                            <div className="h-2"></div>
                            <input name="name " {...register('City')}/>
                        </div>
                        
                        <div>
                            <label className="text-white">Zip Code</label>
                            <div className="h-2"></div>
                            <input name="name " {...register('Zip Code')}/>
                        </div>
                    
                    
                    </div>


                    <div className="flex flex-col w-1/2 h-16 " >
                        <label className="text-white">Phone number*</label>
                        <div className="h-2"></div>
                        <input name="name " {...register('Address')}/>
                    </div>

                    
                    <div className="h-10"/>

                    <div type="submit" className="hover:bg-red-400 cursor-pointer flex h-12 w-44 justify-center items-center bg-white ">
                        <h3>Proceed to payments</h3>
                    </div>



                </form>

            </div>

            <div className=' flex w-full h-16 items-center '> 
            </div>
 


       </div>
    );
}