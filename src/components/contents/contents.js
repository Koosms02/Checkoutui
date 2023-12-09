import React, { useState } from "react";
import fetchProduct from "../../api/database";


export default function contents() {
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
    fetchProduct()

    const handleSelected = (selectedCat) => {
        setCategories(prev =>
            prev.map(cat => ({
                ...cat,
                selected: cat.name === selectedCat.name
            }))
        );
    };

    return (

        //should be fixed after reaching a certain height 
        <div className=" flex flex-col text-bold pl-4 pr-4 text-black bg-black h-screen ">
            {/* catelogu */}

            <div className="h-10" />
            <div className="flex h-20 items-center w-full flex-row overflow-x-auto ">
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

            {/* this is the screen that will be shown  */}

            <div className="flex flex-col w-full h-screen bg-white">
                {/* items to display */}
                {/* we have 6 screens  */}

                {/* screen for dope deals */}
                {categories[0].selected === true && <div className="h-full w-full flex flex-col justify-center items-center  bg-black">
                    <p className="text-white">{categories[0].name}</p>
                </div>}

                {/* screens for Flowers */}

                {categories[1].selected === true && <div className="h-full w-full flex flex-col justify-center items-center  bg-black">
                    <p className="text-white">{categories[1].name}</p>
                </div>}


                {/* screens for psychedelics */}

                {categories[2].selected === true && <div className="h-full w-full flex flex-col justify-center items-center  bg-black">
                    <p className="text-white">{categories[2].name}</p>
                </div>}



                {/* screens for ediables */}
                {categories[3].selected === true && <div className="h-full w-full flex flex-col justify-center items-center  bg-black">
                    <p className="text-white">{categories[3].name}</p>
                </div>}

                {/* screens for pre-rolled and vapes */}

                {categories[4].selected === true && <div className="h-full w-full flex flex-col justify-center items-center  bg-black">
                    <p className="text-white">{categories[4].name}</p>
                </div>}

                {/* screens for medicinal */}

                {categories[5].selected === true && <div className="h-full w-full flex flex-col justify-center items-center  bg-black">
                    <p className="text-white">{categories[5].name}</p>
                </div>}
            </div>
        </div>
    )
}