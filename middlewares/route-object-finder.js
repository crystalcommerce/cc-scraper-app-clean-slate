const path = require("path");
const Route = require("../models/classes/route");
const Model = require("../models/classes/model");
const { toNormalString, toCapitalizeAll } = require("../utilities/string");


module.exports = async function(req, res, next)   {

    // this is one of the key features to prevent multiple require stack call
    if(!Array.isArray(global.registeredRoutes)) {
        global.registeredRoutes = [];
    }

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

            let filePath = path.join(process.cwd(), "routes", "dynamic", `${routeObject.fileName}.js`),
                registeredRoute = global.registeredRoutes.find(item => item.filePath === filePath);
                
            if(registeredRoute)   {
                // console.log("we are using the registered route.");
                // console.log(registeredRoute);
                // console.log(global.registeredRoutes);
                req.dynamicRouteHandler = registeredRoute.routerObject;
            } else  {
                // console.log("we are registering the route");
                // console.log(global.registeredRoutes);
                req.dynamicRouteHandler = require(filePath);
                global.registeredRoutes.push({
                    filePath,
                    apiRoute : req.url,
                    routerObject : require(filePath),
                });
            }

            
            
            // delete require.cache[filePath];
            // TODO:
                // need to create a class that removes files from the require stack, especially when the route and model has been deleted.
        }

        next();
    } 
    catch(err)  {
        next();
    }
}