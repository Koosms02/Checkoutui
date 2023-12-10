import React, { useState } from "react";


import readExcelFile from "../../api/database";
import { currentWindowSize } from "../../Utils/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


export default function contents() {
    /* eslint-disable */
    const w = currentWindowSize().innerWidth;

    /* eslint-disable */
    const [categories, setCategories] = useState(
        [

            // { "name": "All", "selected": true },
            { "name": "Flowers", "selected": true },
            { "name": "dope deals", "selected": false },
            { "name": "Psychedelics", "selected": false },
            { "name": "Ediables", "selected": false },
            { "name": "pre-rolled&vapes", "selected": false },
            { "name": "Medicinal", "selected": false },
        ])


    /* eslint-disable */
    const [product, setProduct] = useState([null])
    const [Flowers, setFlowers] = useState([
        { "cat": "Flowers", "name": "Guava", "prices": [{ "price P/5g": "R20", "selected": false }, { "price P/g": "R10 ", "selected": false }] },
        { "cat": "Flowers", "name": "Pitbull", "prices": [{ "price P/5g": "R20", "selected": false }, { "price P/g": "R10 ", "selected": false }] },
        { "cat": "Flowers", "name": "blue", "prices": [{ "price P/5g": "R20", "selected": false }, { "price P/g": "R10 ", "selected": false }] },
        { "cat": "Flowers", "name": "Guava", "prices": [{ "price P/5g": "R20", "selected": false }, { "price P/g": "R10 ", "selected": false }] },
        { "cat": "Flowers", "name": "Pitbull", "prices": [{ "price P/5g": "R20", "selected": false }, { "price P/g": "R10 ", "selected": false }] },
        { "cat": "Flowers", "name": "blue", "prices": [{ "price P/5g": "R20", "selected": false }, { "price P/g": "R10 ", "selected": false }] },
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


    // React.useEffect(() => {

    //     if (product) {
    //         // console.log(typeof (product))
    //         console.log(Object.entries(product))
    //         let f = []
    //         for (let j = 0; j < product.length; j++) {
    //             console.log(product[j])
    //             f.push(product[j])
    //         }

    //         setFlowers(f)

    //     }

    // }, [product])

    //perform operations on it 




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

            <div className="h-20" />

            <div className="flex flex-col w-full h-full bg-white">


                {categories[0].selected === true &&

                    <div className=" flex flex-col w-full h-full overflow-y-auto items-start justify-start  bg-black">
                        {Flowers.length != 0 &&
                            Flowers.map((pro, index) => (<div key={index} className={`flex flex-row h-[300px] overflow-x-auto-hidden mt-4  p-2 w-full flex-row  rounded`}>
                                {/* its an image */}
                                <div className="flex h-full w-1/2 bg-red-100">
                                    <img className="h-full w-full" src={"https://images.unsplash.com/photo-1656841331595-aa7d15483eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VlZCUyMHN0cmFpbnxlbnwwfHwwfHx8MA%3D%3D"} />
                                </div>

                                {/* information of the product */}
                                <div className="flex flex-col h-full w-1/2 bg-white p-2 ">
                                    {/* name of the product */}
                                    <p className="font-bold ">{pro.name}</p>

                                    {/*Quantity and price  */}
                                    <p className="font-bold text-[12px]">Quantity and Prices</p>
                                    <div className="flex flex-col h-full overflow-y-auto mt-2">
                                        {
                                            pro.prices.map((price, index) => (
                                                <div key={index} className="flex flex-col w-full  p-2">
                                                    {price["price P/5g"] !== undefined && (
                                                        <div className="w-full flex flex-col justify-between items-center ">
                                                            <div className="flex flex-row w-full justify-between pr-2">
                                                                <p>{"price P/5g: "}</p>
                                                                <p className="font-bold ">{price["price P/5g"]}</p>
                                                            </div>
                                                            <div className="h-2" />
                                                            <div onClick={() => { }} className=" cursor-pointer bg-blue-700 w-full flex justify-center items-center h-[20px] rounded-md bg-white ">
                                                                <FontAwesomeIcon icon={faShoppingBasket} color="black" size="5px" />
                                                                <div className="w-2" />
                                                                <p className="text-white font-bold text-[10px]">add to cart</p>
                                                            </div>
                                                        </div>

                                                    )}

                                                    {price["price P/g"] !== undefined && (
                                                        <div className="w-full flex flex-col justify-between items-center ">
                                                            <div className="flex flex-row w-full justify-between pr-2">
                                                                <p>{"price P/g: "}</p>
                                                                <p className="font-bold ">{price["price P/5g"]}</p>
                                                            </div>
                                                            <div className="h-2" />
                                                            <div onClick={() => { }} className=" cursor-pointer bg-blue-700 w-full flex justify-center items-center h-[20px] rounded-md bg-white ">
                                                                <FontAwesomeIcon icon={faShoppingBasket} color="black" size="5px" />
                                                                <div className="w-2" />
                                                                <p className="text-white font-bold text-[10px]">add to cart</p>
                                                            </div>
                                                        </div>

                                                    )}

                                                    {price["price P/10g"] !== undefined && (
                                                        <div className="w-full flex flex-col justify-between items-center ">
                                                            <div className="flex flex-row w-full justify-between pr-2">
                                                                <p>{"price P/10g: "}</p>
                                                                <p className="font-bold ">{price["price P/5g"]}</p>
                                                            </div>
                                                            <div className="h-2" />
                                                            <div onClick={() => { }} className=" cursor-pointer bg-blue-700 w-full flex justify-center items-center h-[20px] rounded-md bg-white ">
                                                                <FontAwesomeIcon icon={faShoppingBasket} color="black" size="5px" />
                                                                <div className="w-2" />
                                                                <p className="text-white font-bold text-[10px]">add to cart</p>
                                                            </div>
                                                        </div>

                                                    )}

                                                    {price["price P/g of 50g"] !== undefined && (
                                                        <div className="w-full flex flex-col justify-between items-center ">
                                                            <div className="flex flex-row w-full justify-between pr-2">
                                                                <p>{"price P/5g: "}</p>
                                                                <p className="font-bold ">{price["price P/5g"]}</p>
                                                            </div>
                                                            <div className="h-2" />
                                                            <div onClick={() => { }} className=" cursor-pointer bg-blue-700 w-full flex justify-center items-center h-[20px] rounded-md bg-white ">
                                                                <FontAwesomeIcon icon={faShoppingBasket} color="black" size="5px" />
                                                                <div className="w-2" />
                                                                <p className="text-white font-bold text-[10px]">add to cart</p>
                                                            </div>
                                                        </div>

                                                    )}

                                                    {price["price P/g of 100g"] !== undefined && (
                                                        <div className="w-full flex flex-col justify-between items-center ">
                                                            <div className="flex flex-row w-full justify-between pr-2">
                                                                <p>{"price P/5g: "}</p>
                                                                <p className="font-bold ">{price["price P/5g"]}</p>
                                                            </div>
                                                            <div className="h-2" />
                                                            <div onClick={() => { }} className=" cursor-pointer bg-blue-700 w-full flex justify-center items-center h-[20px] rounded-md bg-white ">
                                                                <FontAwesomeIcon icon={faShoppingBasket} color="black" size="5px" />
                                                                <div className="w-2" />
                                                                <p className="text-white font-bold text-[10px]">add to cart</p>
                                                            </div>
                                                        </div>

                                                    )}

                                                </div>
                                            ))
                                        }
                                    </div>

                                </div>




                            </div>))
                        }
                    </div>}



            </div>
        </div>
    )
}