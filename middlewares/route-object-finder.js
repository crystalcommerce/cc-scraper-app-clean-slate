const path = require("path");
const Route = require("../models/classes/route");
const Model = require("../models/classes/model");
const { toNormalString, toCapitalizeAll } = require("../utilities/string");


module.exports = async function(req, res, next)   {
    try {
        let fileName = function(){
                let url;
                if(req.url.charAt(0) === "/")   {
                    url = req.url.slice(1)
                }
                return url.split("/").shift();
            }(),
            modelObject = await Model.getModelByName(fileName),
            routeObject = modelObject ? await Route.getRouteByName(toCapitalizeAll(toNormalString(modelObject.fileName, "url"))) : null;

        if(modelObject && routeObject)  {
            req.foundApiRoute = await require(path.join(process.cwd(), "routes", "dynamic", routeObject.fileName));
        }
        next();
    } 
    catch(err)  {
        console.log(err);
        next();
    }
}