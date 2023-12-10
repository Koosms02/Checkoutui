
import * as XLSX from 'xlsx';


/* eslint-disable */
function fetchProduct(file) {

    try {


        // Read the XLSX file

        const workbook = XLSX.read(file, { type: 'binary' });



        //storing all the sheet name in the excelsheet
        const sheetName = workbook.SheetNames;

        for (let i = 0; i < sheetName.length; i++) {
            console.log(sheetName[i])
        }

        //getting the contents of one sheet 

        const sheet = workbook.Sheets[sheetName[1]]

        //changing to jsonData
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        const structuredJson = []

        jsonData.shift();
        jsonData.shift();


        //first row is the heading and subprices
        const heading = jsonData[0];


        console.log(heading.__EMPTY_2)
        jsonData.shift();

        for (let j = 0; j < jsonData.length; j++) {

            structuredJson.push({
                "categories": sheet,
                "name": jsonData[j].__EMPTY,
                "subCategories": jsonData[j].__EMPTY_1,
                "prices_per_quantity": {
                    "price P/g": jsonData[j].__EMPTY_2,
                    "price P/5g": jsonData[j].__EMPTY_3,
                    "price P/10g": jsonData[j].__EMPTY_4,
                    "price P/20g": jsonData[j].__EMPTY_5,
                    "price P/g on 50g": jsonData[j].__EMPTY_6,
                    "price P/g on 100g": jsonData[j].__EMPTY_7,
                    "price P/g on 200g": jsonData[j].__EMPTY_8,

                }
            })

        }
        console.log(structuredJson)
        return structuredJson;


    } catch (e) {
        console.log(e)

    }

}


function readExcelFile(file) {
    try {

        let structuredJson = [];

        const reader = new FileReader()

        reader.readAsBinaryString(file)
        reader.onload = (e) => {
            console.log("hello on the onload")
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: "binary" })



            // Read the XLSX file
            // const workbook = XLSX.read(file, { type: "binary" });

            // Assuming you want to work with a specific sheet, change the sheet index accordingly

            const listOfSheetName = workbook.SheetNames;

            // Get the name of the sheet
            for (let s = 1; s < listOfSheetName.length; s++) {

                // Get the sheet data
                const sheetName = listOfSheetName[s]
                const sh = workbook.Sheets[sheetName];


                // Convert sheet data to JSON
                const jsonData = XLSX.utils.sheet_to_json(sh);


                jsonData.shift();
                jsonData.shift();

                // First row is the heading and subprices
                // const heading = jsonData[0];

                jsonData.shift();


                //this for Flowers

                for (let j = 0; j < jsonData.length; j++) {
                    structuredJson.push({
                        categories: sheetName,
                        name: jsonData[j].__EMPTY || null,
                        subCategories: jsonData[j].__EMPTY_1,
                        prices_per_quantity: {
                            "price P/g": jsonData[j].__EMPTY_2 || null,
                            "price P/5g": jsonData[j].__EMPTY_3 || null,
                            "price P/10g": jsonData[j].__EMPTY_4 || null,
                            "price P/20g": jsonData[j].__EMPTY_5 || null,
                            "price P/g on 50g": jsonData[j].__EMPTY_6 || null,
                            "price P/g on 100g": jsonData[j].__EMPTY_7 || null,
                            "price P/g on 200g": jsonData[j].__EMPTY_8 || null,
                        },
                    });
                }
            }



        }
        return structuredJson;

    } catch (e) {
        console.error(e);
        return [];
    }
};


export default readExcelFile;