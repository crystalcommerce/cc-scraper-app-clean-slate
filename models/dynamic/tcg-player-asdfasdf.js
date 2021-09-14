const db = require("../classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const tcgPlayerAsdfasdfSchema = new Schema({
	imagePaths : {
		type : Array,
		required : false,
	},
	imageUris : {
		type : Array,
		required : false,
	},
	asdfasdfadf : {
		type : String,
		required : false,
	},
	dateCreated : {
		type : String,
		default : new Date(Date.now()).toISOString(),
	}
}, {strict : true});

const TcgPlayerAsdfasdf = mongoose.model("TcgPlayerAsdfasdf", tcgPlayerAsdfasdfSchema);


// initializing tcgPlayerAsdfasdfsDb
const tcgPlayerAsdfasdfsDb = db(TcgPlayerAsdfasdf);
tcgPlayerAsdfasdfsDb.recordName = "TCG Player Asdfasdf"

module.exports = tcgPlayerAsdfasdfsDb;