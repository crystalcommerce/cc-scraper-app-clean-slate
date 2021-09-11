const db = require("./classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const siteResourceSchema = new Schema({
    siteName : {
        type : String,
        required  : true,
    },
    siteUrl : {
        type : String,
        required  : true,
    },
    permissionLevel : {
        type : Number,
        required : true,
        default : 2,
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

const SiteResource = mongoose.model("SiteResource", siteResourceSchema);


// initializing siteResourcesDb
const siteResourcesDb = db(SiteResource);
siteResourcesDb.recordName = "Site Resource";
siteResourcesDb.addProps("uniqueProps", "siteUrl");
siteResourcesDb.addProps("immutableProps", "_id", "dateCreated", "siteUrl");
siteResourcesDb.addProps("friendlyUrlProps", "siteName");
siteResourcesDb.addProps("defaultValuedProps", { permissionLevel : 2 }, { dateCreated : Date.now() });

module.exports = siteResourcesDb;