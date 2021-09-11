const db = require("./classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema({
    fileName : {
        type : String,
        required : true,
        unique : true,
    },
    filePath : {
        type : String,
        required : true,
        unique : true,
    },
    dateCreated : {
        type : Date,
        default : Date.now(),
    },
}, {strict : true});

const Image = mongoose.model("Image", imageSchema);


// initializing imagesDb;
const imagesDb = db(Image);
imagesDb.recordName = "image";
imagesDb.addProps("uniqueProps", "fileName", "awsKey");
imagesDb.addProps("immutableProps", "_id", "dateCreated", "fileName");
imagesDb.addProps("defaultValuedProps", { dateCreated : Date.now() });

module.exports = imagesDb;