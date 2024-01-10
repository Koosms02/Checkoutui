// import React, { useState} from "react";
import axios from "axios";

const makePayment = async (data, subPrice) => {

    // const PAYSTACK_SECRET_KEY = "sk_test_55a760dcecbf74df1eebd2c73b5e9038e09a5f57"
    console.log(data)
    try {
        // console.log(data)

        const url = 'https://dawdispensary.com/checkout';

        //request payload
        //should be obtained in the req.body
        const amount = parseFloat(subPrice) + parseFloat(data.location.price)
        const body = {
            // "data": req.body.name,
            "amount": amount * 100,
            "email": "Koosms02@gmail.com",
            // "metadata": { "phonenumber": data.phonenumber }
        }





        const response = await axios.post(url, body);
        console.log(response)
        console.log(response.data.data.data.authorization_url)
        return response.data.data.data.authorization_url


    } catch (e) {
        console.error('Error:', e);
    }

}


export default makePayment;