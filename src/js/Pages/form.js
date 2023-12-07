import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { currentWindowSize } from "../../Utils/utils"

import "../../css/pages/forms.css"
import makePayment from "../../api/api"
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

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [movePage, setMovePage] = useState({
        "customer": true,
        "shipping": false,
        "payments": false
    })


    // eslint-disable-next-line no-unused-vars
    const [region, setRegion] = useState(delivery_locations.map(location => ({ ...location, selected: false })));
    // const [selected , setSelected ] = useState()
    const [userInfo , setUserInfo] = useState()



    const [paymentChoice, setPaymentChoice] = useState({ "cash": false, "online": true })
    // eslint-disable-next-line no-unused-vars
    const handleRegionSelection = (index) => {
        // setSelected()
        setUserInfo(prevData => ({...prevData , location: region[index]}))
        setRegion((prevLocations) => {
            const updatedLocations = prevLocations.map((location, i) => ({
                ...location,
                selected: i === index ? !location.selected : false,
            }));
            return updatedLocations;
        });
    }
    const handleRegistration = async (data) => {
        
        if (movePage.customer === true) {
            setUserInfo(data)
            setMovePage({
                "customer": false,
                "shipping": true,
                "payments": false
            })
        } else if (movePage.shipping === true) {

            // setUserInfo(prevData => ({...prevData , location: selected
            // console.log(userInfo)
            
            const link = await makePayment(userInfo);

            window.location.href = link;
            
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
                        <input name="name " className="border-b border-white bg-black text-white outline-none" placeholder="e.g john" {...register('name', {
                            required: 'Name is required',
                            message: 'Name is required'
                        })} />
                    </div>
                    <p className="text-red-500">{errors.name?.message}</p>

                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Email</label>
                        <div className="h-2"></div>
                        <input name="email " className="border-b border-white bg-black text-white outline-none" placeholder="e.g koosms02@gmail.com"  {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Invalid email address',
                            },
                        })} />
                    </div>
                    <p className="text-red-500 font-10">{errors.email?.message}</p>

                    <div className="h-2" />
                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Product to Order</label>
                        <div className="h-2"></div>
                        <input name="Order " className="border-b border-white bg-black text-white outline-none" placeholder="e.g Marijuana"  {...register('Order')} />
                    </div>

                    <div className="h-2" />

                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Address</label>
                        <div className="h-2"></div>
                        <input name="Address " className="border-b border-white bg-black text-white outline-none" placeholder="Suzy Queue 4455 Landing Lange, APT 4 Louisville, KY 40018-1234" {...register('Address')} />
                    </div>

                    <div className="h-2" />

                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Total Amount</label>
                        <div className="h-2"></div>
                        <input name="Total " className="border-b border-white bg-black text-white outline-none" placeholder="e.g 10000"  {...register('purchase_price', {
                            required: 'pleeader enter the price ',
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'Please enter a valid number',
                            },
                        })} />
                    </div>

                    <p className="text-red-500 font-10">{errors.purchase_price?.message}</p>

                    <div className="h-2" />
                    <div className="flex flex-col w-full max-w-md pr-10 h-16 " >
                        <label className="text-white">Day of Delivery</label>
                        <div className="h-2"></div>
                        <input name="day of delivery " className="border-b border-white bg-black text-white outline-none" placeholder="today 12:00" {...register('DayOfDelivery')} />
                    </div>
                    <div className="h-10" />

                    {/* <p className="text-red-500 font-10">{errors.purchase_price?.message}</p> */}
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
                            <span className="ml-2 text-white">
                                {/* <p1 className="text-white"> */}
                                    Pay with card
                                {/* </p1> */}
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
                            <span className="ml-2 text-white">
                                {/* <p1 className=""> */}
                                    Pay cash
                                
                            </span>
                        </label>
                    </div>

                    <div type="submit" className="hover:bg-red-400 cursor-pointer flex h-12 w-44 justify-center items-center bg-white ">
                        <button type="submit" className="h-12 w-44">submit</button>
                        {/* <h3>Proceed </h3> */}
                    </div>

                </form>

            </div>}

            {movePage.shipping == true && <div className="flex w-full h-screen pt-16 flex-col pr-10">

                <h3 className='text-white'>From which regions are you from ?</h3>
                <form className="w-full flex flex-col" onSubmit={handleSubmit(handleRegistration)}>
                <div className="h-20"/>
                    {
                        region.map((res, index) => (

                            <div key={index} onClick={()=>handleRegionSelection(index)} className= "hover:bg-blue-300 w-full  mt-2 pl-6 bg-white px-4 max-w-screen-md rounded">
                                <div className="w-full flex flex-row justify-between items-center ">

                                    <p className="mt-2 font-bold ">{res.main_area}</p>
                                    <p className="font-bold ">R {res.price}</p>

                                </div>
                                <div>
                                    {res.locations.map((val, index) => (<p key={index}>{val}</p>))}
                                </div>
                                {/* <p className="text-black whitespace-no-wrap ">{res.locations} </p> */}
                            </div>))
                    }

                    <div className="h-10 " />
                    <div type="submit" className="hover:bg-red-400 cursor-pointer flex h-12 w-44 justify-center items-center bg-white ">
                        <button type="submit" className="h-12 w-44">proceed to payment</button>
                        {/* <h3>Proceed </h3> */}
                    </div>
                    <div className="h-10"/>
                </form>

            </div>}


        </div >
    );
}


