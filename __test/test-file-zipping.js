const { fileZipper } = require("../core/");
const zipper = require("zip-local");
const path = require("path");
const { baseName, createDirPath, getAllFilesFromDirectory, getAllDirsFromDirectory, getAllFilesRecursively} = require("../utilities/file-system");








(async () => {
    let targetPath = path.join(process.cwd(), "data", "tcg-player", "pokemon", "celebrations"),
        destinationPath = path.join(__dirname, "tcg-player-pokemon-celebrations.zip");

    // let result = zipper.sync.zip(targetPath).compress().save(path.join(__dirname, "zipped-file.zip"));


    // console.log("hello");

    let zippedResult = await fileZipper(targetPath, destinationPath);
    console.log(zippedResult);

})()

// 


