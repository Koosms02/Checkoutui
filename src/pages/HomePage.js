import React from "react";
import Nav from "../components/nav";
// import Banner from "../components/banner";
import Content from "../components/contents/contents";


function Home() {
    return (

        <div className="flex flex-col w-full h-full scrollbar-hidden bg-black ">

            {/* banner images */}
            {/* <Banner /> */}

            {/* contents */}
            <Content />

            {/* nav */}
            <Nav />


        </div>)
}

export default Home;