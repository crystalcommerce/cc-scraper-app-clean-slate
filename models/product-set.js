const db = require("./classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;


const productSetSchema = new Schema({
    productCategory : {
        type : String,
        required  : true,
    },
    siteName : {
        type : String,
        required  : true,
    },
    siteUrl : {
        type : String,
        required  : true,
    },
    productBrand : {
        type : String,
        required  : true,
    },
    startingUrl : {
        type : String,
        required  : true,
    },
    groupIdentifier : {
        type : String,
        required : true,
    },
    groupIdentifierKey : {
        type : String,
        required : true,
    },
    apiRoute : {
        type : String,
        required  : true,
    },
    dataDirPath : {
        type : String,
        required  : true,
    },
    
    dateCreated : {
        type : Date,
        default : Date.now(),
    }
}, {strict : true});


const ProductSet = mongoose.model("ProductSet", productSetSchema);


// initializing usersDb
const productSetsDb = db(ProductSet);
productSetsDb.recordName = "ProductSet";
productSetsDb.addProps("immutableProps", "_id", "startingUrl", "siteName", "productBrand", "productCategory");
productSetsDb.addProps("uniqueProps", "startingUrl");
productSetsDb.addProps("defaultValuedProps", { dateCreated : Date.now() });

module.exports = productSetsDb;