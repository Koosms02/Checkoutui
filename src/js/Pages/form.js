import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { currentWindowSize } from "../../Utils/utils";
import "../../css/pages/forms.css"

export function Form() {
    const w = currentWindowSize().innerWidth
    console.log(w)
    const { register, handleSubmit } = useForm()
    const [movePage, setMovePage] = useState({
        "customer": true,
        "shipping": false,
        "payments": false
    })


    const [paymentChoice, setPaymentChoice] = useState({ "cash": false, "online": true })
    const handleRegistration = (data) => console.log(data)

    return (

        <div className='flex flex-start flex-col h-screen pl-10 overflow-y-auto w-full bg-black  '>
            {/*  users information */}



            {movePage.customer == true &&
                <div className=' flex w-full h-screen pt-16 flex-col'>
                    <h3 className='text-white'>Who is placing an order?</h3>

                    <form onSubmit={handleSubmit(handleRegistration)}>
                        <div className="h-10" />
                        <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                            <label className="text-white">Email</label>
                            <div className="h-2"></div>
                            <input name="email "  {...register('email')} />
                        </div>

                        <div className="h-4" />
                        <div className="flex flex-row justify-between w-full max-w-md h-16  pr-10" >
                            <div className="pr-10 ">
                                <label className="text-white">First name</label>
                                <div className="h-2"></div>
                                <input name="name "  {...register('name')} />
                            </div>

                            <div className=" ">
                                <label className="text-white">Second name</label>
                                <div className="h-2"></div>
                                <input name="name " {...register('second name')} />
                            </div>


                        </div>

                        <div className="h-10" />

                        <div type="submit" onClick={() => {
                            setMovePage({ "customer": false, "shipping": true, "payments": false })
                            // setMovePage({ "customer": false, "payments": true })
                            console.log(movePage)
                        }} className="hover:bg-red-400 cursor-pointer flex h-12 w-44 justify-center items-center bg-white ">
                            <h3>Proceed to Shipping</h3>
                        </div>

                    </form>

                </div>}



            {/* Proceeding to the order  */}



            {movePage.shipping == true && <div className=' flex w-full h-screen pt-16 flex-col'>
                <h3 className='text-white'>Where would you like the order be sent?</h3>

                <form onSubmit={handleSubmit(handleRegistration)}>
                    <div className="h-10" />
                    <div className="flex flex-col w-full pr-10 h-16 max-w-md" >
                        <label className="text-white">Country</label>
                        <div className="h-2"></div>
                        <input name="name " {...register('country')} />
                    </div>

                    <div className="flex flex-col w-full pr-10 max-w-md h-16 " >
                        <label className="text-white">Address</label>
                        <div className="h-2"></div>
                        <input name="name " {...register('Address')} />
                    </div>

                    <div className="h-4" />
                    <div className="flex flex-row w-full justify-between pr-10 max-w-md h-16" >
                        <div className="pr-10">
                            <label className="text-white">City</label>
                            <div className="h-2"></div>
                            <input name="name " {...register('City')} />
                        </div>

                        <div>
                            <label className="text-white">Zip Code</label>
                            <div className="h-2"></div>
                            <input name="name " {...register('Zip Code')} />
                        </div>


                    </div>

                    <div className="h-4" />
                    <div className="flex flex-col w-full max-w-md  pr-10 h-16 " >
                        <label className="text-white">Phone number*</label>
                        <div className="h-2"></div>
                        <input name="name " {...register('Address')} />
                    </div>


                    <div className="h-10" />

                    <div type="submit" onClick={() => {
                        setMovePage({ "customer": false, "shipping": false, "payments": true })
                    }} className="hover:bg-red-400 cursor-pointer flex h-12 w-44 justify-center items-center bg-white ">
                        <h3>Proceed to payments</h3>
                    </div>



                </form>

            </div>}



            {/* payment details */}


            {movePage.payments == true && < div className=' flex w-full h-screen pt-16 flex-col'>
                <h3 className='text-white'>How would you like to pay?</h3>

                <div className="h-10" />
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

                {paymentChoice.cash !== true && <form onSubmit={handleSubmit(handleRegistration)}>
                    <div className="h-4" />
                    <div className="flex flex-col w-full pr-10 max-w-md h-16 " >
                        <label className="text-white">Name on card</label>
                        <div className="h-2"></div>
                        <input name="name " {...register('country')} />
                    </div>
                    <div className="h-4" />
                    <div className="flex flex-col w-full h-16 pr-10 max-w-md " >
                        <label className="text-white">card number</label>
                        <div className="h-2"></div>
                        <input name="name " {...register('Address')} />
                    </div>

                    <div className="h-4" />
                    <div className="flex flex-row w-full pr-10 max-w-md h-16" >
                        <div className="pr-10">
                            <label className="text-white">Expiration</label>
                            <div className="h-2"></div>
                            <input name="name " {...register('City')} />
                        </div>

                        <div>
                            <label className="text-white">CVVs</label>
                            <div className="h-2"></div>
                            <input name="name " {...register('Zip Code')} />
                        </div>


                    </div>




                    <div className="h-10" />

                    <div type="submit" className="hover:bg-red-400 cursor-pointer flex h-12 w-44 justify-center items-center bg-white ">
                        <h3>make payments</h3>
                    </div>



                </form>}

                {paymentChoice.cash === true && <div type="submit" className="hover:bg-red-400 cursor-pointer flex h-12 w-44 justify-center items-center bg-white ">
                    <h3>Continue</h3>
                </div>}
            </div>
            }
        </div >
    );
}


