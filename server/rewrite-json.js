const path = require("path");
const { createJsonFileObject } = require("../utilities");


module.exports = async function(ipAddress)   {

    let sourcePath = path.join(process.cwd(), "views", "json"),
        targetPath = path.join(process.cwd(), "views", "json", "remote"),
        fileName = "scripts.json",
        scriptsJsonFileObjectSrc = createJsonFileObject(sourcePath, fileName),
        scriptsJsonFileObjectTarget = createJsonFileObject(targetPath, fileName)
        scriptsObject = await scriptsJsonFileObjectSrc.getSavedData();


    scriptsObject = scriptsObject.map(item => {
        let urlObject = new URL(item.src);

        item.src = item.src.replace(urlObject.hostname, ipAddress);
        item.src = item.src.replace(urlObject.protocol, "https:");

        console.log(item);

        return item;
            
    });


    await scriptsJsonFileObjectTarget.addNewData(scriptsObject);

}