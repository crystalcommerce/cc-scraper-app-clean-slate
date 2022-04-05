const axios = require("axios");
const { readFile, writeFile } = require("../../utilities/file-system");
const fs = require("fs");
const path = require("path");


(async function(){

    let writeStream = fs.createWriteStream(path.join(__dirname, "sample.html")),
        result = await axios({
            url : "https://www.rolex.com/en-us/watches/datejust.html",
            method : "GET",
            responseType : "stream",
        });
    
    console.log(result);

    result.data.pipe(writeStream);

}())