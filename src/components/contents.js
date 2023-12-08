import React from "react";
import fetchProduct from "../api/database";


export default function contents() {

    fetchProduct()
    return (
        <div className="text-bold text-black">
            <p>This are the contents of the application </p>
        </div>)
}