// import React, { useState} from "react";
import axios from "axios";

const makePayment = async (data)=>{

    const PAYSTACK_SECRET_KEY = "sk_test_55a760dcecbf74df1eebd2c73b5e9038e09a5f57"
    try {
      
        //request payload
        //should be obtained in the req.body
        const headers = {
            "Authorization": `Bearer ${PAYSTACK_SECRET_KEY}`,
            "Content-Type": "application/json"
        }
        const url = 'https://api.paystack.co/transaction/initialize';

        //request payload
        //should be obtained in the req.body
        const amount = parseFloat(data.location.price) + parseFloat(data.purchase_price)
        const body = {
            // "data": req.body.name,
            "amount": amount*100,
            "email": data.email,
        }

        // console.log(body)


        const response = await axios.post(url, body, {headers});

        console.log(response.data.data.authorization_url)
        return response.data.data.authorization_url

        // .then(response => {
            //     console.log("The data is changed: " + response.data)
            // })
            // .catch(error => {
            //     console.error('Error:', error.response.data);
            // });
    } catch (e) {
        console.error('Error:', e.data);
    }

}


export default makePayment;