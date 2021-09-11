const multer = require("multer");
const path = require("path");
const { toUrl } = require("../utilities/string");

module.exports = function(...filePath) {
    // const upload = multer({dest : path.join(...filePath)});
    const storageEngine = multer.diskStorage({
        destination : (req, file, cb) => {
            cb(null, path.join(...filePath));
        },
        filename : (req, file, cb) => {
            const ext = file.originalname.split(".").pop();
            const originalName = file.originalname.split(".").slice(0, -1).join(".");
            cb(null, `${toUrl(`${originalName} ${Date.now()}`)}.${ext}`);
        },
    });

    const upload = multer({storage : storageEngine});

    return upload;
}
