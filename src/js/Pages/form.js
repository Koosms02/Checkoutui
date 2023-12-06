import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { currentWindowSize } from "../../Utils/utils"

import "../../css/pages/forms.css"
// import delivery_locations from "../../Utils/delivery_locations"

// import { useNavigate } from 'react-router-dom';

const delivery_locations = [
    { "main_area": "PTA 1", "locations": ["Centurion", "Irene", "MidStream", "Sinoville", "Montana", "Brooklyn", "Hatfield", " Pretoria East"], "price": "100", },
    { "main_area": "PTA 2", "locations": ["Shere", "Silver Lakes", "Olifantsfontein", "Pretoria North", "Roodeplaat", "Culinan"], "price": "120" },
    { "main_area": "ESR1", "locations": ["Benoni", "Boksburg", "Kempton park", "Edenvale", "Bedfordview"], "price": "150" },
    { "main_area": "ESR2", "locations": ["Springs", "Nigel", "Germiston", "Modderfontein", "Brakpan"], "price": "180" },
    { "main_area": "JHB1", "locations": ["Sandton", "Fourways", "Kayalami", "Morningside", "Rivonia"], "price": "150" },
    { "main_area": "JHB2", "locations": ["Parktown", "Randburg", "CBD", "Mellville", "Rosebank", "Parkview", "Braamfontein", "surrounding"], "price": "180" },
    { "main_area": "JHB3", "locations": ["Roodepoort", "Alberton", "Surrounding"], "price": "200" },
    { "main_area": "Nation Wide", "locations": ["Outside Gauteng", "Krugersdorp", "Soweto", "Hartebeespoort", "Vereeniging", "Randfontein"], "price": "200+" },
]

export function Form() {
    const w = currentWindowSize().innerWidth
    // const Navigate = useNavigate()

    const { register, handleSubmit } = useForm()
    const [movePage, setMovePage] = useState({
        "customer": true,
        "shipping": false,
        "payments": false
    })


    // eslint-disable-next-line no-unused-vars
    const [region, setRegion] = useState(delivery_locations.map(location => ({ ...location, selected: false })));




    const [paymentChoice, setPaymentChoice] = useState({ "cash": false, "online": true })
    // eslint-disable-next-line no-unused-vars
    const handleRegionSelection = (index) => {
        setRegion((prevLocations) => {
            const updatedLocations = prevLocations.map((location, i) => ({
                ...location,
                selected: i === index ? !location.selected : false,
            }));
            return updatedLocations;
        });
    }
    const handleRegistration = () => {

        if (movePage.customer === true) {
            setMovePage({
                "customer": false,
                "shipping": true,
                "payments": false
            })
        } else if (movePage.shipping === true) {
            setMovePage({
                "customer": false,
                "shipping": false,
                "payments": true
            })
        } else if (movePage.payments === true) {
            setMovePage({
                "customer": false,
                "shipping": true,
                "payments": true
            })

            // navigate somewhere
        }
        //should pay the data
        // Navigate("/payment")


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
            {movePage.customer == true && <div className=' flex w-full h-screen pt-16 flex-col'>
                <h3 className='text-white'>Who is placing an order?</h3>

                <form onSubmit={handleSubmit(handleRegistration)}>
                    <div className="h-10" />
                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Name</label>
                        <div className="h-2"></div>
                        <input name="name " className="border-b border-white bg-black text-white outline-none" {...register('name')} />
                    </div>

                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Email</label>
                        <div className="h-2"></div>
                        <input name="email " className="border-b border-white bg-black text-white outline-none"  {...register('email')} />
                    </div>

                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Order</label>
                        <div className="h-2"></div>
                        <input name="Order " className="border-b border-white bg-black text-white outline-none"  {...register('Order')} />
                    </div>

                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Address</label>
                        <div className="h-2"></div>
                        <input name="Address " className="border-b border-white bg-black text-white outline-none" {...register('Address')} />
                    </div>

                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Total Amount</label>
                        <div className="h-2"></div>
                        <input name="Total " className="border-b border-white bg-black text-white outline-none" {...register('Total')} />
                    </div>

                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Day of Delivery</label>
                        <div className="h-2"></div>
                        <input name="day of delivery " className="border-b border-white bg-black text-white outline-none" {...register('DayOfDelivery')} />
                    </div>
                    <div className="h-10" />
                    {/* region for location  */}



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
                        <button type="submit" className="h-12 w-44">submit</button>
                        {/* <h3>Proceed </h3> */}
                    </div>

                </form>

            </div>}

            {
                movePage.shipping == true &&

                <form onSubmit={handleSubmit(handleRegistration)}>

                    <div className="flex w-full h-screen pt-16 flex-col">
                        <h3 className='text-white'>Which of this region are you from ?</h3>

                        <div className="h-20" />
                        <div className="flex flex-col h-full  w-1/2">
                            {/* {<label>
                            <input
                                type="radio"
                                value="online"
                                checked={paymentChoice.online}
                                onChange={() => { }}
                                className="pr-2"
                            />
                            <span className="ml-2">
                                <p1 className="text-white">
                                    {region[0]["main_area"]}
                                </p1>
                            </span>
                        </label>} */}


                            {region.map((region, index) => (
                                <div key={index}>

                                    {/* {index != 0 && <div className="h-10" />} */}
                                    <div onClick={() => handleRegionSelection(index)} className="h-12 bg-white ">
                                        <p>{region.locations}</p>
                                    </div>
                                    <div className="h-4" />

                                    {/* <label>
                                        <input
                                            type="radio"
                                            value="online"
                                            checked={region.selected}
                                            onChange={() => handleRegionSelection(index)}
                                            className="pr-2"
                                        />
                                        <span className="ml-2">
                                            <p1 className="text-white ">
                                                {region["main_area"]}
                                            
                                            </p1>

                                        </span>
                                    </label> */}
                                    {/* <p className="text-white h-full ">{region["locations"] + ","}</p> */}


                                </div>

                            ))}

                            <div type="submit" className="hover:bg-red-400 cursor-pointer flex h-12 w-44 justify-center items-center bg-white ">
                                <button type="submit" className="h-12 w-44">submit</button>
                                {/* <h3>Proceed </h3> */}
                            </div>

                        </div>




                    </div >

                </form >
            }
        </div >
    );
}


