import React, { useState } from "react";


import readExcelFile from "../../api/database";
import { currentWindowSize } from "../../Utils/utils";
import usecart from "../../State/useCart";
import ediableProduct from "./ediables";
import FlowerProduct from "./flower";
import psychedelicsProduct from "./psychedelics";


export default function contents() {

    /* eslint-disable */
    const { cart, addToCart, removeFromCart } = usecart();
    /* eslint-disable */
    const w = currentWindowSize().innerWidth;

    /* eslint-disable */
    const [categories, setCategories] = useState(
        [

            // { "name": "All", "selected": true },
            { "name": "dope deals", "selected": true },
            { "name": "Flowers", "selected": false },
            { "name": "Psychedelics", "selected": false },
            { "name": "Ediables", "selected": false },
            { "name": "pre-rolled&vapes", "selected": false },
            { "name": "Medicinal", "selected": false },
        ])


    /* eslint-disable */
    const [product, setProduct] = useState([null])
    const [Flowers, setFlowers] = useState([
        {
            "cat": "Flowers", "name": "Guava", "prices": [{ "price P/5g": "R20" }, { "price P/g": "R10" }]
        },
        { "cat": "Flowers", "name": "Pitbull", "prices": [{ "price P/5g": "R20" }, { "price P/g": "R10 " }] },
        { "cat": "Flowers", "name": "blue", "prices": [{ "price P/5g": "R20" }, { "price P/g": "R10 " }] },
        { "cat": "Flowers", "name": "Guava", "prices": [{ "price P/5g": "R20" }, { "price P/g": "R10 " }] },
        { "cat": "Flowers", "name": "Pitbull", "prices": [{ "price P/5g": "R20" }, { "price P/g": "R10 " }] },
        { "cat": "Flowers", "name": "blue", "prices": [{ "price P/5g": "R20" }, { "price P/g": "R10 " }] },
    ])

    const [ediable, setEdiables] = useState([
        {
            "cat": "Ediables", "name": "Mike Bites", "price": "R600"
        },
        { "cat": "Ediables", "name": "DAW Gummies", "price": "R350" },
        { "cat": "Ediables", "name": "Butterscotch Toffes", "price": "R350" },
        { "cat": "Ediables", "name": "Cannapop Lollies", "price": "R350" },
        { "cat": "Ediables", "name": "Fudge", "price": "R95" },
        { "cat": "Ediables", "name": "Choclate chip Cookies", "price": "R165" },
        { "cat": "Ediables", "name": "Choclate Brownies", "price": "R110" },
        { "cat": "Ediables", "name": "Advert Calendar", "price": "R1199" },
    ])

    const [psychedelics, setPsychedelics] = useState([
        {
            "cat": "Ediables", "name": "Mike Bites", "price": "R600"
        },
        { "cat": "psychedelics", "name": "100g Microdosing capsules", "price": "R200" },
        { "cat": "psychedelics", "name": "100g Microdosing capsules", "price": "R350" },
        { "cat": "psychedelics", "name": "300mg capsules", "price": "R550" },
        { "cat": "psychedelics", "name": "Microdose Drop(10 ml)", "price": "R200" },

    ])


    const [preRolled, setPrerolled] = useState([
        {
            "cat": "preRolled", "name": "Mike Bites", "price": "R600"
        },
        { "cat": "preRolled", "name": "100g Microdosing capsules", "price": "R200" },
        { "cat": "preRolled", "name": "100g Microdosing capsules", "price": "R350" },
        { "cat": "preRolled", "name": "300mg capsules", "price": "R550" },
        { "cat": "preRolled", "name": "Microdose Drop(10 ml)", "price": "R200" },

    ])



    const handleSelected = (selectedCat) => {
        setCategories(prev =>
            prev.map(cat => ({
                ...cat,
                selected: cat.name === selectedCat.name
            }))
        );
    };

    // storing a spreedsheet file

    const [file, setFile] = useState(null);


    //handling the upload of the file 

    const handleFileUpload = (e) => {
        setFile(e.target.files[0])

    }

    //useEffect

    React.useEffect(() => {
        if (file) {
            console.log(readExcelFile(file))
            setProduct(readExcelFile(file))
            // console.log(product)

        } else {
            console.error("");
        }
    }, [file])

    React.useEffect(() => {

        if (cart.length != 0) {
            console.log(cart)
        }
    }, [cart])





    return (

        //should be fixed after reaching a certain height 
        <div className="  flex flex-col text-bold pl-4 pr-4 text-black bg-black h-full-20 ">
            {/* catelogu */}

            <div className="h-10" />
            <div className="flex-shink-0 flex h-28 items-center w-full flex-row overflow-x-auto ">
                {
                    categories.map((cat, index) => (
                        <div onClick={() => handleSelected(cat)}
                            key={index}
                            className={cat.selected === true
                                ? "flex justify-center items-center cursor-pointer mr-2 h-8 p-2 rounded-md bg-green-600 flex-shrink-0 text-black hover:bg-green-300"
                                : "flex justify-center items-center cursor-pointer mr-2 h-8 p-2 rounded-md bg-white flex-shrink-0 text-black hover:bg-green-300"}

                        >{cat.name}</div>))
                }

            </div>

            <div className="h-8" />

            <div className="flex flex-col w-full h-full bg-white">

                {/* this is for flowers */}

                {categories[1].selected === true &&

                    <div className=" flex flex-col w-full h-full overflow-y-auto items-start justify-start  bg-black">
                        {Flowers.length != 0 &&
                            Flowers.map((pro, index) => (
                                FlowerProduct(pro.name, pro.prices, addToCart)))
                        }
                    </div>}


                {categories[3].selected === true &&

                    <div className=" flex flex-col w-full h-full overflow-y-auto items-start justify-start  bg-black">
                        {ediable.length != 0 &&
                            ediable.map((productInfo, index) => (
                                ediableProduct(productInfo, addToCart)))
                        }
                    </div>}

                {categories[2].selected === true &&

                    <div className=" flex flex-col w-full h-screen overflow-y-auto items-start justify-start  bg-black">
                        {psychedelics.length != 0 &&
                            psychedelics.map((productInfo, index) => (
                                psychedelicsProduct(productInfo, addToCart)))
                        }
                    </div>}

                {/* psychedelics */}
            </div>
        </div>
    )
}