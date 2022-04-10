const db = require("../classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const sampleCollectionSchema = new Schema({
	url : {
		type : String,
		required : true,
	},
	inProgress : {
		type : Boolean,
		required : true,
	},
	done : {
		type : Boolean,
		required : false,
	},
	dateCreated : {
		type : String,
		default : new Date(Date.now()).toISOString(),
	}
}, {strict : true});

const SampleCollection = mongoose.model("SampleCollection", sampleCollectionSchema);


// initializing sampleCollectionsDb
const sampleCollectionsDb = db(SampleCollection);
sampleCollectionsDb.recordName = "Sample-collection"

module.exports = sampleCollectionsDb;