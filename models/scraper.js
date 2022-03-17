const db = require("./classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;


const scraperSchema = new Schema({
    productCategory : {
        type : String,
        required  : true,
    },
    siteUrl : {
        type : String,
        required  : true,
    },
    siteName : {
        type : String,
        required  : true,
    },
    productBrand : {
        type : String,
        required : true,
    },
    imagePropName : {
        type : String,
        required : true,
    },
    imageNameObject : {
        type : Object,
        required : true,
    },
    csvExcludedProps : {
        type : Array,
        required : true,
    },
    modelFilePath : {
        type : String,
        required : true,
    },
    routeFilePath : {
        type : String,
        required : true,
    },
    scriptFilePath : {
        type : String,
        required : true,
    },
    apiRoute : {
        type : String,
        required : true,
    },
    scriptCode : {
        type : String,
        required : true,
    },
    groupIdentifierKey : {
        type : String,
        required : false,
    },
    usage : {
        type : String,
        required : false,
    },
    modelObjectOptions : {
        type : Object,
        required : true,
    },
    routeObjectOptions : {
        type : Object,
        required : true,
    },

    friendlyUrl : {
        type : String,
        required  : true,
    },
    isActive : {
        type : Boolean,
        required : true,
        default : true,
    },
    dateCreated : {
        type : Date,
        default : Date.now(),
    },
}, {strict : true});

const Scraper = mongoose.model("Scraper", scraperSchema);


// initializing usersDb
const scrapersDb = db(Scraper);
scrapersDb.recordName = "Scraper";
scrapersDb.addProps("uniqueProps", "scriptFilePath", "friendlyUrl");
scrapersDb.addProps("immutableProps", "_id", "siteUrl");
scrapersDb.addProps("friendlyUrlProps", "siteName", "productBrand");
scrapersDb.addProps("defaultValuedProps", { active  : true }, { dateCreated : Date.now() });

module.exports = scrapersDb;