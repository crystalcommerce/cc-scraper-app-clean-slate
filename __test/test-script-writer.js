const Script = require("../models/classes/script");
const { readFile } = require("../utilities/file-system");
const path = require("path");


(async function(){

    let result = await readFile(path.join(__dirname, "flesh-and-blood-sample", "sample-code.js")),
        { data : scriptCode } = result,
        scriptObject = new Script("Trading Card Game", "TCG Player", "Flesh and Blood");

    console.log(scriptObject);

    scriptObject.initialize(scriptCode);
}())
    