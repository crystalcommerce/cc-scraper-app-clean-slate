const getStandardScraperScript = require("./standard-scraper");

module.exports = function(io)   {

    const StandardScraperScript = getStandardScraperScript(io);

    return { StandardScraperScript };
    
}



