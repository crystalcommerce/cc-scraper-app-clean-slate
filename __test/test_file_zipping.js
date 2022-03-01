const fileZipper = require("../core/file-zipper");
const path = require("path");
// const fs = require('fs');
// const path = require('path');
// const archiver = require('archiver');
// const {baseName} = require("./utilities/file-system");

let targetPath = path.join(__dirname, "data", "tcg-player", "flesh-and-blood", "arcane-rising"),
    destinationPath = path.join(__dirname, "data", "zipped-files");


    


    fileZipper(targetPath, destinationPath, function(fileObject) {
        console.log(fileObject);
    });
    

// })()





// let fileName = `${baseName(targetPath)}.zip`,
// filePath = destinationPath,
// compeleteFilePath = path.join(destinationPath, fileName);

// const output = fs.createWriteStream(compeleteFilePath);    
// const archive = archiver('zip',  {
// zlib: { level: 9 } // Sets the compression level.
// });

// archive.pipe(output);


// output.on('end', function() {
//     callback({fileName, filePath, message : "archiver has been finalized and the output file descriptor has closed."})
// });

// output.on('close', function() {



// });



// archive.directory(targetPath, false);



// archive.finalize();
// 


