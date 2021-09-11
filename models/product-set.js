const db = require("./classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;


const productSetSchema = new Schema({
    groupIdentifier : {
        type : String,
        required : true,
    },
    groupIdentifierKey : {
        type : String,
        required : true,
    },
    siteName : {
        type : String,
        required  : true,
    },
    productBrand : {
        type : String,
        required  : true,
    },
    apiRoute : {
        type : String,
        required  : true,
    },
    dataDirPath : {
        type : String,
        required  : true,
    },
    startingUrl : {
        type : String,
        required  : true,
    },
    dateCreated : {
        type : Date,
        default : Date.now(),
    },
}, {strict : true});


const ProductSet = mongoose.model("ProductSet", productSetSchema);


// initializing usersDb
const productSetsDb = db(ProductSet);
productSetsDb.recordName = "ProductSet";
productSetsDb.addProps("immutableProps", "_id", "startingUrl", "siteName", "productBrand");
productSetsDb.addProps("friendlyUrlProps", "siteName", "productBrand");
productSetsDb.addProps("defaultValuedProps", { permissionLevel : 2 }, { dateCreated : Date.now() });

module.exports = productSetsDb;