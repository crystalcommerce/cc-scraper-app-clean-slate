const db = require("../classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const tcgTcgPlayerFleshAndBloodSchema = new Schema({
	imagePaths : {
		type : Array,
		required : false,
	},
	imageUris : {
		type : Array,
		required : false,
	},
	productName : {
		type : String,
		required : false,
	},
	productImage : {
		type : String,
		required : false,
	},
	cardEffect : {
		type : String,
		required : false,
	},
	cardName : {
		type : String,
		required : false,
	},
	cardNumber : {
		type : String,
		required : false,
	},
	cardType : {
		type : String,
		required : false,
	},
	cardSubtype : {
		type : String,
		required : false,
	},
	class : {
		type : String,
		required : false,
	},
	cost : {
		type : String,
		required : false,
	},
	defenseValue : {
		type : String,
		required : false,
	},
	finish : {
		type : String,
		required : false,
	},
	intellect : {
		type : String,
		required : false,
	},
	life : {
		type : String,
		required : false,
	},
	pitchValue : {
		type : String,
		required : false,
	},
	power : {
		type : String,
		required : false,
	},
	rarity : {
		type : String,
		required : false,
	},
	setName : {
		type : String,
		required : false,
	},
	multiFaced : {
		type : String,
		required : false,
	},
	productUrl : {
		type : String,
		required : false,
	},
	productId : {
		type : String,
		required : false,
	},
	dateCreated : {
		type : String,
		default : new Date(Date.now()).toISOString(),
	}
}, {strict : true});

const TcgTcgPlayerFleshAndBlood = mongoose.model("TcgTcgPlayerFleshAndBlood", tcgTcgPlayerFleshAndBloodSchema);


// initializing tcgTcgPlayerFleshAndBloodsDb
const tcgTcgPlayerFleshAndBloodsDb = db(TcgTcgPlayerFleshAndBlood);
tcgTcgPlayerFleshAndBloodsDb.recordName = "TCG TCG Player Flesh And Blood"
tcgTcgPlayerFleshAndBloodsDb.addProps("uniqueProps", "productUrl");

module.exports = tcgTcgPlayerFleshAndBloodsDb;