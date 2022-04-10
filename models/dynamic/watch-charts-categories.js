const db = require("../classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const watchChartsCategoriesSchema = new Schema({
	url : {
		type : String,
		required : true,
	},
	productBrand : {
		type : String,
		required : false,
	},
	inProgress : {
		type : Boolean,
		required : false,
		default : false,
	},
	done : {
		type : Boolean,
		required : false,
		default : false
	},
	dateCreated : {
		type : String,
		default : new Date(Date.now()).toISOString(),
	}
}, {strict : true});

const WatchChartsCategories = mongoose.model("WatchChartsCategories", watchChartsCategoriesSchema);


// initializing watchChartsCategoriessDb
const watchChartsCategoriessDb = db(WatchChartsCategories);
watchChartsCategoriessDb.recordName = "Watch Charts Categories"

module.exports = watchChartsCategoriessDb;