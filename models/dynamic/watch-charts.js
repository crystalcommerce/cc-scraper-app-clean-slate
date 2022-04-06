const db = require("../classes/database");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const watchChartsSchema = new Schema({
	productUri : {
		type : String,
		unique : true,
		required : true,
	},
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
	imageUris : {
		type : Array,
		required : false,
	},
	material : {
		type : String,
		required : false,
	},
	caseDiameter : {
		type : String,
		required : false,
	},
	waterResistance : {
		type : String,
		required : false,
	},
	dateCreated : {
		type : String,
		default : new Date(Date.now()).toISOString(),
	}
}, {strict : true});

const WatchCharts = mongoose.model("WatchCharts", watchChartsSchema);


// initializing watchChartssDb
const watchChartssDb = db(WatchCharts);
watchChartssDb.recordName = "Watch Charts";

watchChartssDb.addProps("uniqueProps", "productUri");

module.exports = watchChartssDb;