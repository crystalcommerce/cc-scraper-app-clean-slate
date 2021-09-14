const { StandardScraperScript } = require("../../../core");
const evaluatorObjects = require("./evaluators");

module.exports = function(scraperOptions)   {
	return new StandardScraperScript({...scraperOptions, evaluatorObjects});
}