// this schema is not being used as we have decoupled the views from the backend.
// pages will depend on the frontend only.
const db = require("./classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const pageSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    urlAlias : {
        type : String,
        required : true,
    },
    dateCreated : {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    visibility : {
        type : String,
        required : true,
        default : "hidden"
    },
    contentTemplate : {
        type : String,
        required : true,
    },
    pageTemplate : {
        type : String,
        required : true,
    },
    parentId : {
        type : String,
        required : true,
    },
    friendlyUrl : {
        type : String,
        required : true,
    },
}, {strict : true});

const Page = mongoose.model("Page", pageSchema);


// initializing pagesDb
const pagesDb = db(Page);
pagesDb.recordName = "page";
pagesDb.addProps("friendlyUrlProps", "urlAlias");
pagesDb.addProps("immutableProps", "_id", "dateCreated");
pagesDb.addProps("defaultValuedProps", { visibility : "published" }, { pageTemplate : "default" }, { contentTemplate : "default" }, { getRequest : true }, { postRequest : false }, {parentId : null}, {permissionLevel : 1});
pagesDb.addProps("uniqueUrlConstraints", "permissionLevel");
pagesDb.recordName = "page";

module.exports = pagesDb;