const db = require("../classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const seedsSchema = new Schema({
	category : {
		type : String,
		required : true,
	},
	subcategory : {
		type : String,
		required : true,
	},
	productName : {
		type : String,
		required : true,
	},
	productImage : {
		type : String,
		required : false,
	},
	imageUris : {
		type : Array,
		required : false,
	},
	scientificName : {
		type : String,
		required : false,
	},
	productUri : {
		type : String,
		required : true,
		unique : true
	},
	description : {
		type : String,
		required : false,
	},
	dateCreated : {
		type : String,
		default : new Date(Date.now()).toISOString(),
	}
}, {strict : true});

const Seeds = mongoose.model("Seeds", seedsSchema);


// initializing seedssDb
const seedssDb = db(Seeds);
seedssDb.recordName = "Seeds";

seedssDb.addProps("uniqueProps", "productUri");



module.exports = seedssDb;