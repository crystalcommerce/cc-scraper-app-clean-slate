const db = require("../classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const sweetwaterMusiciansSchema = new Schema({
	productName : {
		type : String,
		required : true,
	},
	productBrand : {
		type : String,
		required : true,
	},
	productImage : {
		type : String,
		required : false,
	},
	category : {
		type : String,
		required : false,
	},
	imageUris : {
		type : Array,
		required : false,
	},
	productUri : {
		type : String,
		required : true,
	},
	dateCreated : {
		type : String,
		default : new Date(Date.now()).toISOString(),
	}
}, {strict : true});

const SweetwaterMusicians = mongoose.model("SweetwaterMusicians", sweetwaterMusiciansSchema);


// initializing sweetwaterMusicianssDb
const sweetwaterMusicianssDb = db(SweetwaterMusicians);
sweetwaterMusicianssDb.recordName = "Sweetwater Musicians"
sweetwaterMusicianssDb.addProps("uniqueProps", "productUri");

module.exports = sweetwaterMusicianssDb;