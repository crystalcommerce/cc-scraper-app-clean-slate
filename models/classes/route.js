const path = require("path");
const { getAllFilesFromDirectory, deleteFile, writeFile, getFileObject, fileExists, mkdirSync } = require("../../utilities/file-system");
const { toCamelCase, toUrl, toNormalString, toCapitalizeAll } = require("../../utilities/string");


class Route {

    constructor(routeName)  {
        this.routeName = toUrl(routeName);
        this.fileName = toUrl(this.routeName);
        this.pluralizedName = `${toUrl(routeName)}s`;
        this.camelCasedName = toCamelCase(this.routeName, true);
        this.routeDirPath = path.join(process.cwd(), "routes", "dynamic");
        this.filePath = path.join(this.routeDirPath, `${this.fileName}.js`);
        this.routeFilePath = ["routes", "dynamic", `${this.fileName}.js`].join("/");
        if(!fileExists(this.routeDirPath))  {
            mkdirSync(this.routeDirPath);
        }
    }

    async createRoute(modelInstanceName, pluralized = false) {
        let content = "",
            routeName = pluralized ? this.pluralizedName : this.routeName;
        
        content += `const { Router } = require("express");\n`;
        content += `const router = Router();\n`;
        content += `const ${modelInstanceName} = require('../../models/dynamic/${this.fileName}');\n`;
        content += `const getControllers = require("../../controllers");\n`;
        content += `const { controllers : { dynamic } } = getControllers(${modelInstanceName});\n`;
        content += `const { httpResponseHandler } = require("../../middlewares");\n`;
        content += `const { filterObjectsByMethodName } = require("../../utilities");\n`;
        content += `const getMiddleWaresByName = filterObjectsByMethodName(httpResponseHandler(), ...dynamic);\n`;



        content += `\n`;
        content += `\n`;
        content += `module.exports = function()   {\n`;
        
        content += `\n`;
        content += `\n`;
        content += `\t// getAll Handler\n`;
        content += `\trouter.get("/${routeName}/", getMiddleWaresByName("getAll"));\n`;

        content += `\n`;
        content += `\n`;
        content += `\t// getOneByFilter hanlder\n`;
        content += `\trouter.get("/${routeName}/single?", getMiddleWaresByName("getOneByFilter"));\n`;

        content += `\n`;
        content += `\n`;
        content += `\t// getAllFiltered hanlder\n`;
        content += `\trouter.get("/${routeName}/all?", getMiddleWaresByName("getAllFiltered"));\n`;

        content += `\n`;
        content += `\n`;
        content += `\t// getOneById handler\n`;
        content += `\trouter.get("/${routeName}/:id", getMiddleWaresByName("getOneById"));\n`;

        content += `\n`;
        content += `\n`;
        content += `\t// create\n`;
        content += `\trouter.post("/${routeName}/", getMiddleWaresByName("create"));\n`;

        content += `\n`;
        content += `\n`;
        content += `\t// updateHandler\n`;
        content += `\trouter.put("/${routeName}/:id", getMiddleWaresByName("update"));\n`;

        content += `\n`;
        content += `\n`;
        content += `\t// deleteAllFilteredHandler\n`;
        content += `\trouter.delete("/${routeName}/all?", getMiddleWaresByName("deleteAllFiltered"));\n`;

        content += `\n`;
        content += `\n`;
        content += `\t// deleteHandler\n`;
        content += `\trouter.delete("/${routeName}/:id", getMiddleWaresByName("deleteById"));\n`;

        content += `\n`;
        content += `\n`;
        content += `\treturn router;\n`;
        content += `\n`;
        content += `}`;
        
        let writeRouteResult = await writeFile(this.filePath, content);


        return { writeRouteResult };
    };

    static async getRouteObject(filesArr)    {
        let fileObjects = [];

        filesArr = filesArr.filter(item => item !== "index.js");

        for(let file of filesArr)   {
            let {name} = await getFileObject(file);
            fileObjects.push({
                expressRoute : `/${toUrl(name)}`,
                routeName : `${toNormalString(name, "url")}`,
                routeVarName : `${toCamelCase(name, true)}ApiRouter`,
                fileName : name,
                routePath : `./${file}`,
                camelCaseName : toCamelCase(name, true),
            });
        }

        return fileObjects;
    }

    static async getRoutes() {
        let routesFolder = path.join(process.cwd(), "routes"),
            dynamicRoutesFolder = path.join(routesFolder, "dynamic"),
            routelFiles = await getAllFilesFromDirectory(routesFolder),
            dynamicRouteFiles = await getAllFilesFromDirectory(dynamicRoutesFolder),
            routes = await Route.getRouteObject(routelFiles, "."),
            dynamicRoutes = await Route.getRouteObject(dynamicRouteFiles, "./dynamic");

        return {routes, dynamicRoutes};
    }

    static async getRouteByName(routeName)    {
        let { dynamicRoutes } = await Route.getRoutes();
        
        return dynamicRoutes.find(route => route.routeName === toCapitalizeAll(routeName));
    }

    static async updateRouteByName(routeName, newRouteName = null) {
        let routeObject = await Route.getRouteByName(routeName),
            newRoute = newRouteName ? new Route(newRouteName) : new Route(routeObject.fileName);
        
        Route.removeFromGlobalScope(path.join(process.cwd(), "routes", "dynamic", `${routeObject.fileName}.js`));

        if(newRouteName)    {
            console.log("new name was provided");
            await deleteFile(path.join(process.cwd(), "routes", "dynamic", `${routeObject.fileName}.js`));
        }

        return await newRoute.createRoute();
    }

    static removeFromGlobalScope(routeFilePath)    {
        console.log(global.registeredRoutes);
        let filePath = path.join(process.cwd(), routeFilePath),
            routeIndex = global.registeredRoutes.findIndex(item => item.filePath === filePath);
        if(routeIndex)  {
            console.log("We are removing a route from the global scope");
            global.registeredRoutes.splice(routeIndex, 1);
            console.log(global.registeredRoutes);
        }
    }


    static async deleteRouteByName(routeName) {
        let routeObject = await Route.getRouteByName(routeName);

        if(routeObject) {
            let routeFilePath = path.join(process.cwd(), "routes", "dynamic", `${routeObject.fileName}.js`),
                deleteResult = await deleteFile(routeFilePath);

            Route.removeFromGlobalScope(routeFilePath);
    
            return { deleteResult };
        } else  {
            return {statusOk : false, message : "Route does not exist."};
        }
    }

    static async deleteRouteByFilePath(routeFilePath)    {

        Route.removeFromGlobalScope(routeFilePath);

        return await deleteFile(path.join(process.cwd(), routeFilePath));

    }

}

module.exports = Route;