const getScript = require("../../../core");
const evaluatorObjects = require("./evaluators");

module.exports = function(io, scraperOptions)   {

	const { StandardScraperScript } = getScript(io);

	return new StandardScraperScript({...scraperOptions, evaluatorObjects});
}