/*
    This is reponsible for creating possible search terms to be used when searching for a product set.
*/


const db = require("./classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;


const productSetMetaSchema = new Schema({
    metaKey : {
        type : String,
        required : true,
    },
    metaValue : {
        type : String,
        required : true,
        unique : true,
    },
    dateCreated : {
        type : Date,
        default : Date.now(),
    }
}, {strict : true});


const ProductSetMeta = mongoose.model("ProductSetMeta", productSetMetaSchema);


// initializing usersDb
const productSetMetaDb = db(ProductSetMeta);
productSetMetaDb.recordName = "Product Set Meta";
productSetMetaDb.addProps("immutableProps", "_id");
productSetMetaDb.addProps("uniqueProps", "metaValue");
productSetMetaDb.addProps("defaultValuedProps", { dateCreated : Date.now() });

module.exports = productSetMetaDb;