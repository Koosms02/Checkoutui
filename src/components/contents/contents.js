import React, { useState } from "react";
// imageUrlList
import { currentWindowSize } from "../../Utils/utils";
import usecart from "../../State/useCart";
import ediableProduct from "./ediables";
import FlowerProduct from "./flower";
import psychedelicsProduct from "./psychedelics";
import preRolledProduct from "./pre_rolled"
import productJson from "../../mockdata.json";
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
            { "name": "Ediables", "selected": false },
            { "name": "pre-rolled&vapes", "selected": false },
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

    // storing a spreedsheet file

    const [file, setFile] = useState(null);


    //handling the upload of the file 

    const handleFileUpload = (e) => {
        setFile(e.target.files[0])

    }

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

    const [searchTerm, setSearchTerm] = useState(null)


    //useEffect
    React.useEffect(() => {

        const products = []
        const Data = Object.values(dataList)
        if (dataList.length == 0) {
            // Data[0].map((item) => {
            //     item["imageUrl"] = "";
            // })

            // Data[0].forEach((items, index) => {
            //     for (let i = 0; i < imageUrlList.length; i++) {
            //         if (items.name.toLocaleLowerCase().includes(imageUrlList[i].name.toLowerCase())) {
            //             // Data[index].imageUrl = imageUrlList[i].url
            //         }
            //     }
            // })

            //use Data[0]
            console.log(productJson.data)

            const Flowers = productJson.data.filter(item => item.type.toLowerCase() == "flowers")
            const Dope_deals = productJson.data.filter(item => item.type.toLowerCase() == "dope_deals")
            const Ediables = productJson.data.filter(item => item.type.toLowerCase() == "ediables")
            const Pre_rolled = productJson.data.filter(item => item.type.toLowerCase() == "pre-rolled&vapes")
            const Medicinal = productJson.data.filter(item => item.type.toLowerCase() == "medicinal")
            const Psychedelics = productJson.data.filter(item => item.type.toLowerCase() == "psychedelics")

            setFlowers(Flowers)
            setPrerolled(Pre_rolled)
            setMedicinal(Medicinal)
            setPsychedelics(Psychedelics)
            setEdiables(Ediables)
        }
    }, [dataList])

    React.useEffect(() => {

        if (cart.length != 0) {
            console.log(cart)
        }
    }, [cart])

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
            <p className="text-white">{searchTerm}</p>


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

                    {/* this is for flowers */}

                    {categories[1].selected === true &&

                        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3  w-full h-full overflow-y-auto items-start justify-start  bg-black">
                            {flowers.length != 0 &&
                                flowers.filter((prod) => {
                                    if (searchTerm == null) return prod
                                    else if (prod.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                        return prod
                                }).map((pro) => (FlowerProduct(pro, addToCart)))
                            }
                        </div>}

                    {/*  */}
                    {categories[3].selected === true &&

                        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-3 w-full h-full overflow-y-auto items-start justify-start  bg-black">
                            {ediable.length != 0 &&
                                ediable.filter((prod) => {
                                    if (searchTerm == null) return prod
                                    else if (prod.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                        return prod
                                }).map((productInfo, index) => (
                                    ediableProduct(productInfo, addToCart)))
                            }
                        </div>}

                    {categories[2].selected === true &&

                        <div className="  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5   gap-2 w-full  h-screen overflow-y-auto items-start justify-start  bg-black">
                            {psychedelics.length != 0 &&
                                psychedelics.filter((prod) => {
                                    if (searchTerm == null) return prod
                                    else if (prod.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                        return prod
                                }).map((productInfo, index) => (
                                    psychedelicsProduct(productInfo, addToCart)))
                            }
                        </div>}


                    {categories[4].selected === true &&

                        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3  w-full h-full overflow-y-auto items-start justify-start  bg-black">
                            {preRolled.length != 0 &&
                                preRolled.filter((prod) => {
                                    if (searchTerm == null) return prod
                                    else if (prod.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                        return prod
                                }).map((pro) => (
                                    preRolledProduct(pro, addToCart)))
                            }
                        </div>}

                    {/* psychedelics */}
                </div>

            </div>
        </div>
    )
}