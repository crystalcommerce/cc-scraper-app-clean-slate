const db = require("../classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const tcgPlayerCardfightVanguardSchema = new Schema({
	imagePaths : {
		type : Array,
		required : false,
	},
	imageUris : {
		type : Array,
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
	productImage : {
		type : String,
		required : false,
	},
	cardEffect : {
		type : String,
		required : false,
	},
	clan : {
		type : String,
		required : false,
	},
	critical : {
		type : String,
		required : false,
	},
	finish : {
		type : String,
		required : false,
	},
	grade : {
		type : String,
		required : false,
	},
	skill : {
		type : String,
		required : false,
	},
	[`Grade / Skill`] : {
		type : String,
		required : false,
	},
	nation : {
		type : String,
		required : false,
	},
	power : {
		type : String,
		required : false,
	},
	shield : {
		type : String,
		required : false,
	},
	race : {
		type : String,
		required : false,
	},
	rarity : {
		type : String,
		required : false,
	},
	set : {
		type : String,
		required : false,
	},
	setName : {
		type : String,
		required : false,
	},
	trigger : {
		type : String,
		required : false,
	},
	unit : {
		type : String,
		required : false,
	},
	multiFaced : {
		type : String,
		required : false,
	},
	cardUri : {
		type : String,
		required : false,
	},
	dateCreated : {
		type : String,
		default : new Date(Date.now()).toISOString(),
	}
}, {strict : true});

const TcgPlayerCardfightVanguard = mongoose.model("TcgPlayerCardfightVanguard", tcgPlayerCardfightVanguardSchema);


// initializing tcgPlayerCardfightVanguardsDb
const tcgPlayerCardfightVanguardsDb = db(TcgPlayerCardfightVanguard);
tcgPlayerCardfightVanguardsDb.recordName = "TCG Player Cardfight Vanguard"
tcgPlayerCardfightVanguardsDb.addProps("uniqueProps", "cardUri");

module.exports = tcgPlayerCardfightVanguardsDb;