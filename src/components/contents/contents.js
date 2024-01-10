import React, { useState } from "react";
// imageUrlList
import { currentWindowSize, imageUrlList } from "../../Utils/utils";
import usecart from "../../State/useCart";
import ediableProduct from "./ediables";
import FlowerProduct from "./flower";
import psychedelicsProduct from "./psychedelics";
import preRolledProduct from "./pre_rolled"
// import productJson from "../../mockdata.json";
import MedicinalProduct from "./medicinal"
import Deals from "./dopeDeals"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useData } from "../../State/useData";




export default function contents() {


    /* eslint-disable */
    const { cart, addToCart } = usecart();
    const { dataList } = useData()


    /* eslint-disable */
    const w = currentWindowSize().innerWidth;

    // console.log(imageUrlList)
    /* eslint-disable */
    const [categories, setCategories] = useState(
        [
            // { "name": "All", "selected": true },
            { "name": "dope deals", "selected": true },
            { "name": "Flowers", "selected": false },
            { "name": "Psychedelics", "selected": false },
            { "name": "Edibles", "selected": false },
            { "name": "pre-rolled & vapes", "selected": false },
            { "name": "Medicinal", "selected": false },
        ])


    const handleSelected = (selectedCat) => {
        setCategories(prev =>
            prev.map(cat => ({
                ...cat,
                selected: cat.name === selectedCat.name
            }))
        );
    };



    /* eslint-disable */
    const [flowers, setFlowers] = useState([])
    /* eslint-disable */
    const [ediable, setEdiables] = useState([])
    /* eslint-disable */
    const [psychedelics, setPsychedelics] = useState([])
    /* eslint-disable */
    const [preRolled, setPrerolled] = useState([])

    /**eslint-disable */
    const [medicinal, setMedicinal] = useState([])
    const [DopeDeals, setDopeDeals] = useState([])

    const [searchTerm, setSearchTerm] = useState(null)


    //useEffect
    React.useEffect(() => {

        // const products = []
        const Data = Object.values(dataList)
        // const Products = productJson.data

        if (dataList.length != 0) {

            Data.forEach((items, index) => {
                for (let i = 0; i < imageUrlList.length; i++) {
                    if (items.name != undefined) {

                        if (items.name.toLowerCase().includes(imageUrlList[i].name.toLowerCase())) {
                            Data[index].imageUrl = imageUrlList[i].url
                        }
                    }
                }
            })
            // console.log(Data)
            //use Data[0]
            // console.log(productJson.data)

            const Flowers = Data.filter(item => item.type.toLowerCase() == "flowers")
            const Dope_deals = Data.filter(item => item.type.toLowerCase() == "deals")
            const Ediables = Data.filter(item => item.type.toLowerCase() == "ediables")
            const Pre_rolled = Data.filter(item => item.type.toLowerCase() == "pre-rolled&vapes")
            const Medicinal = Data.filter(item => item.type.toLowerCase() == "medicinal")
            const Psychedelics = Data.filter(item => item.type.toLowerCase() == "psychedelics")

            console.log(Pre_rolled)
            console.log(Psychedelics)
            console.log(Medicinal)
            console.log(Dope_deals)


            setFlowers(Flowers)
            setPrerolled(Pre_rolled)
            setMedicinal(Medicinal)
            setPsychedelics(Psychedelics)
            setEdiables(Ediables)
            setDopeDeals(Dope_deals)
        }
    }, [dataList])

    // React.useEffect(() => {

    //     if (cart.length != 0) {
    //         console.log(cart)
    //     }
    // }, [cart])

    // function for handling the filtering of data 
    const handleSearchParams = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

    }



    return (
        <div className=" w-full  flex flex-col text-bold pl-4 pr-4 text-black bg-black h-full-20 sm:pr-2 sm:pl-2 md:pl-4 md:pr-4 lg:pl-10 lg:pr-10 xl:pr-20 xl:pl-20">
            {/* catelogu */}

            <div className="h-10" />

            <div className="mt-10 flex flex-row h-10 sm:w-4/5 md:w-3/4 lg:w-96 items-center bg-white rounded-2xl pl-4 ">
                <FontAwesomeIcon className="pr-2" icon={faSearch} color="grey" />
                {/* how to active input focus when you click on anywhere in the dic */}
                <input
                    className="w-full h-full outline-none rounded-2xl"
                    type="text"
                    onChange={handleSearchParams}
                    placeholder={categories.filter(item => item.selected).map((val) => { if (val.selected == true) return "search for " + val.name })}
                // value={searchTerm}

                />

                {/*  as the use type it should filter out things that are not relevant */}
            </div>

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

            {/* the items here should be scrollable */}
            <div className="w-full h-full flex flex-col overflow-y-auto">
                <div className="h-8" />
                <div className="flex flex-col w-full bg-white">
                    {categories[0].selected === true &&
                        <div className="  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5   gap-2 w-full  h-screen overflow-y-auto  bg-black">
                            {DopeDeals.length != 0 &&
                                DopeDeals.filter((prod) => {
                                    if (searchTerm == null) return prod
                                    else if (prod.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                        return prod
                                }).map((productInfo, index) => (
                                    Deals(productInfo, addToCart)))
                            }
                        </div>}

                    {/* this is for flowers */}

                    {categories[1].selected === true &&

                        // <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3  w-full h-full overflow-y-auto items-start justify-start  bg-black">
                        //     {flowers.length != 0 &&
                        //         flowers.filter((prod) => {
                        //             if (searchTerm == null) return prod
                        //             else if (prod.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        //                 return prod
                        //         }).map((pro) => (FlowerProduct(pro, addToCart)))
                        //     }
                        // </div>}
                        <div className="flex flex-col w-full h-full overflow-y-auto items-start justify-start bg-black">
                            {flowers.length !== 0 &&
                                Object.entries(
                                    flowers.reduce((acc, productInfo) => {
                                        const category = productInfo.Category;
                                        if (!acc[category]) {
                                            acc[category] = [];
                                        }
                                        acc[category].push(productInfo);
                                        return acc;
                                    }, {})
                                )
                                    // .filter((prod) => {
                                    //     console.log(prod)
                                    //     for (let i = 0; i < prod.length; i++) {
                                    //         console.log(prod[i][0].name)


                                    //         for (let k = 0; k < prod.length; k++) {
                                    //             if (searchTerm == null) return prod
                                    //             else if (prod[i][k].name.toLowerCase().includes(searchTerm.toLowerCase()))
                                    //                 return prod

                                    //         }

                                    //     }
                                    // })
                                    .map(([category, categoryDeals]) => (
                                        <div key={category} className="mb-4">
                                            <h2 className="text-white text-xl font-bold mb-2">{category}</h2>
                                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                {categoryDeals.map((pro) => FlowerProduct(pro, addToCart))}
                                            </div>
                                        </div>
                                    ))}
                        </div>

                    }



                    {/* psychedelics */}

                    {categories[2].selected === true &&

                        <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5   gap-2 w-full  h-screen flex overflow-y-auto  bg-black overflow-y-auto items-start justify-start ">
                            {psychedelics.length != 0 &&
                                psychedelics.filter((prod) => {
                                    if (searchTerm == null) return prod
                                    else if (prod.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                        return prod
                                }).map((productInfo, index) => (
                                    psychedelicsProduct(productInfo, addToCart)))
                            }
                        </div>}

                    {/* ediables */}
                    {categories[3].selected === true &&

                        <div className=" grid smgrid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-3 w-full h-full overflow-y-auto items-start justify-start  bg-black">
                            {ediable.length != 0 &&
                                ediable.filter((prod) => {
                                    if (searchTerm == null) return prod
                                    else if (prod.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                        return prod
                                }).map((productInfo, index) => (
                                    ediableProduct(productInfo, addToCart)))
                            }
                        </div>}


                    {categories[4].selected === true &&

                        <div className="flex flex-col w-full h-full overflow-y-auto items-start justify-start bg-black">
                            {preRolled.length !== 0 &&
                                Object.entries(
                                    preRolled.reduce((acc, productInfo) => {
                                        const category = productInfo.Category;
                                        if (!acc[category]) {
                                            acc[category] = [];
                                        }
                                        acc[category].push(productInfo);
                                        return acc;
                                    }, {})
                                )
                                    .map(([category, categoryDeals]) => (
                                        <div key={category} className="mb-4">
                                            <h2 className="text-white text-xl font-bold mb-2">{category}</h2>
                                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                {categoryDeals.map((pro) => preRolledProduct(pro, addToCart))}
                                            </div>
                                        </div>
                                    ))}
                        </div>}
                    {/* medicinal */}

                    {categories[5].selected === true &&

                        <div className="  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5   gap-2 w-full  h-screen overflow-y-auto items-start justify-start  bg-black">
                            {medicinal.length != 0 &&
                                medicinal.filter((prod) => {
                                    if (searchTerm == null) return prod
                                    else if (prod.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                        return prod
                                }).map((productInfo, index) => (
                                    MedicinalProduct(productInfo, addToCart)))
                            }
                        </div>}

                    {/* dope deals */}


                </div>

            </div>
        </div>
    )
}