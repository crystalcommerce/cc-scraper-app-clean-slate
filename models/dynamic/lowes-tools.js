const db = require("../classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const lowesToolsSchema = new Schema({
	productName : {
		type : String,
		required : false,
	},
	productBrand : {
		type : String,
		required : false,
	},
	category : {
		type : String,
		required : false,
	},
	subcategory : {
		type : String,
		required : false,
	},
	description : {
		type : String,
		required : false,
	},
	modelId : {
		type : String,
		required : false,
	},
	productUri : {
		type : String,
		required : true,
		unique : true,
	},
	keyFeatures : {
		type : Array,
		required : false,
	},
	imageUris : {
		type : Array,
		required : false,
	},
	dateCreated : {
		type : String,
		default : new Date(Date.now()).toISOString(),
	}
}, {strict : true});

const LowesTools = mongoose.model("LowesTools", lowesToolsSchema);


// initializing lowesToolssDb
const lowesToolssDb = db(LowesTools);
lowesToolssDb.recordName = "Lowes Tools"
lowesToolssDb.addProps("uniqueProps", "productUri");

module.exports = lowesToolssDb;