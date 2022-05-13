const db = require("../classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const sweetwaterMusiciansCategoriesSchema = new Schema({
	url : {
		type : String,
		required : true,
	},
	productProps : {
		type : Object,
		required : true,
	},
	type : {
		type : String,
		required : false,
	},
	dateCreated : {
		type : String,
		default : new Date(Date.now()).toISOString(),
	}
}, {strict : true});

const SweetwaterMusiciansCategories = mongoose.model("SweetwaterMusiciansCategories", sweetwaterMusiciansCategoriesSchema);


// initializing sweetwaterMusiciansCategoriessDb
const sweetwaterMusiciansCategoriessDb = db(SweetwaterMusiciansCategories);
sweetwaterMusiciansCategoriessDb.recordName = "Sweetwater Musicians Categories"
sweetwaterMusiciansCategoriessDb.addProps("uniqueProps", "url");

module.exports = sweetwaterMusiciansCategoriessDb;