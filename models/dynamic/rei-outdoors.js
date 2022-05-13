const db = require("../classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const reiOutdoorsSchema = new Schema({
	productName : {
		type : String,
		required : true,
	},
	productBrand : {
		type : String,
		required : false,
	},
	productImage : {
		type : String,
		required : false,
	},
	category : {
		type : String,
		required : false,
	},
	subCategory : {
		type : String,
		required : false,
	},
	imageUris : {
		type : Array,
		required : false,
	},
	productUri : {
		type : String,
		unique : true,
		required : true,
	},
	dateCreated : {
		type : String,
		default : new Date(Date.now()).toISOString(),
	}
}, {strict : true});

const ReiOutdoors = mongoose.model("ReiOutdoors", reiOutdoorsSchema);


// initializing reiOutdoorssDb
const reiOutdoorssDb = db(ReiOutdoors);
reiOutdoorssDb.recordName = "Rei Outdoors"
reiOutdoorssDb.addProps("uniqueProps", "productUri");

module.exports = reiOutdoorssDb;