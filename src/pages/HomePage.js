import React from "react";
import Nav from "../components/nav";
import Banner from "../components/banner"


function Home() {
    return (

        <div className="flex flex-col w-full h-full scrollbar-hidden">
            {/* nav */}
            <Nav />
            {/* banner images */}
            <Banner />

            {/* contents */}
        </div>)
}

export default Home;