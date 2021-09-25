const db = require("./classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;


const scraperSchema = new Schema({
    siteUrl : {
        type : String,
        required  : true,
    },
    siteName : {
        type : String,
        required  : true,
    },
    scraperType  : {
        type : String,
        default : "standard",
        required : true,
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

    scriptFilePath : {
        type : String,
        required : true,
    },
    apiRoute : {
        type : String,
        required : true,
    },
    evaluatorObjects : {
        type : Object,
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
    permissionLevel : {
        type : Number,
        required : true,
        default : 2,
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
scrapersDb.addProps("defaultValuedProps", { permissionLevel : 2 }, { dateCreated : Date.now() });

module.exports = scrapersDb;