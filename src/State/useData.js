
import axios from "axios";
import PropTypes from "prop-types";
import React, { createContext, useState, useEffect, useContext } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    // State to store the list of data
    const [dataList, setDataList] = useState([]);

    // Function to add data to the list
    const addDataToList = (newData) => {
        setDataList([...dataList, newData]);
    };

    // Use useEffect to simulate fetching initial data when the app is first opened
    useEffect(() => {
        const url = "http://13.246.42.1:8000/database"
        axios.get(url).then((res) => {

            const dataWithImageUrl = res.data.data.map((item) => ({
                ...item,
                imageUrl: null, // You can set a default image URL or leave it empty
            }));

            setDataList(dataWithImageUrl)

            // console.log("fetching the data")
        }).catch((e) => { console.log(e) })
    }, []);

    return (
        <DataContext.Provider value={{ dataList, addDataToList }}>
            {children}
        </DataContext.Provider>
    );
};


const useData = () => {
    return useContext(DataContext)
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { DataProvider, useData };