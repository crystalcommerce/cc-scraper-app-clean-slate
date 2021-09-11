const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { deleteFile } = require("../utilities/file-system");
const { getAllObjectKeys } = require("../utilities/objects-array");
const { toNormalString } = require("../utilities/string");
const csvJsonReader = require("./csv-json-reader");

module.exports = async function(dirPath, fileName, data=[], excludedKeys = [], newFile = false)   {

    let csvFile = path.join(dirPath, `${fileName}.csv`),
        prevData = await csvJsonReader(csvFile);

    if(!prevData.length && !data.length)    {
        return;
    }
    let dataObj = prevData.length > 0 ? prevData : data,
        csvWriter = createCsvWriter({
            path : csvFile,
            header : getAllObjectKeys(dataObj).reduce((a, b) => {
                if(!excludedKeys.includes(b)) {
                    a.push({id : b, title : toNormalString(b)});
                }
                return a;
            }, []),
            encoding : "utf8",
        });
    
    if(newFile) {
        await csvWriter.writeRecords([...data]);
    } else  {
        await csvWriter.writeRecords([...prevData, ...data]);
    }
    
    

    return csvWriter;
}

