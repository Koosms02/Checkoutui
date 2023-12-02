import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { currentWindowSize } from "../../Utils/utils"
import "../../css/pages/forms.css"

import { useNavigate } from 'react-router-dom';

export function Form() {
    const w = currentWindowSize().innerWidth
    const Navigate = useNavigate()

    const { register, handleSubmit } = useForm()
    // const [movePage, setMovePage] = useState({
    //     "customer": true,
    //     "shipping": false,
    //     "payments": false
    // })


    const [paymentChoice, setPaymentChoice] = useState({ "cash": false, "online": true })
    const handleRegistration = () => {
        //should pay the data
        Navigate("/payment")


    }

    return (
        <div className='flex flex-start flex-col h-screen pl-10 overflow-y-auto w-full bg-black  '>
            {w < 921 && <div className=' flex w-full h-16 items-center '>
                <h3 className='text-white'>DAW Dispensary</h3>
            </div>}

            {w > 921 && <div className=' flex w-full h-16 items-center '>
                {/* <h3 className='text-white'>DAW Dispensary</h3> */}
            </div>}

            {/*  users information */}
            <div className=' flex w-full h-screen pt-16 flex-col'>
                <h3 className='text-white'>Who is placing an order?</h3>

                <form onSubmit={handleSubmit(handleRegistration)}>
                    <div className="h-10" />
                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Name</label>
                        <div className="h-2"></div>
                        <input name="name "  {...register('name')} />
                    </div>

                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Email</label>
                        <div className="h-2"></div>
                        <input name="email "  {...register('email')} />
                    </div>

                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Order</label>
                        <div className="h-2"></div>
                        <input name="Order "  {...register('Order')} />
                    </div>

                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Address</label>
                        <div className="h-2"></div>
                        <input name="Address "  {...register('Address')} />
                    </div>

                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Total Amount</label>
                        <div className="h-2"></div>
                        <input name="Total "  {...register('Total')} />
                    </div>

                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Day of Delivery</label>
                        <div className="h-2"></div>
                        <input name="day of delivery "  {...register('DayOfDelivery')} />
                    </div>
                    <div className="h-10" />


                    {/* Option for cash or pay with card */}
                    <div className="flex flex-col h-16  w-1/2">

                        <label>
                            <input
                                type="radio"
                                value="online"
                                checked={paymentChoice.online}
                                onChange={() => { setPaymentChoice({ "cash": false, "online": true }) }}
                                className="pr-2"
                            />
                            <span className="ml-2">
                                <p1 className="text-white">
                                    Pay with card
                                </p1>
                            </span>
                        </label>


                        <label>
                            <input
                                type="radio"
                                value="cash"
                                checked={paymentChoice.cash}
                                //   onChange={handleOptionChange}
                                onChange={() => { setPaymentChoice({ "cash": true, "online": false }) }}
                            />
                            {/* <div className="w-4" /> */}
                            <span className="ml-2">
                                <p1 className="text-white">
                                    Pay cash
                                </p1>
                            </span>
                        </label>
                    </div>

                    <div type="submit" className="hover:bg-red-400 cursor-pointer flex h-12 w-44 justify-center items-center bg-white ">
                        <button type="submit">submit</button>
                        {/* <h3>Proceed </h3> */}
                    </div>

                </form>

            </div>
        </div >
    );
}


