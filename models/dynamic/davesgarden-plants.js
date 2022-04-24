const db = require("../classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const davesgardenPlantsSchema = new Schema({
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
		required : false,
	},
	conditions : {
		type : String,
		required : false,
	},
	height : {
		type : String,
		required : false,
	},
	type : {
		type : String,
		required : false,
	},
	category : {
		type : String,
		required : false,
	},
	dateCreated : {
		type : String,
		default : new Date(Date.now()).toISOString(),
	}
}, { strict : true });

const DavesgardenPlants = mongoose.model("DavesgardenPlants", davesgardenPlantsSchema);


// initializing davesgardenPlantssDb
const davesgardenPlantssDb = db(DavesgardenPlants);
davesgardenPlantssDb.recordName = "DavesGarden Plants"
davesgardenPlantssDb.addProps("uniqueProps", "productUri");

module.exports = davesgardenPlantssDb;