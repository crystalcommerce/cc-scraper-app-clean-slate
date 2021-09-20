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
        if(!fileExists(this.routeDirPath))  {
            mkdirSync(this.routeDirPath);
        }
    }

    async createRoute(modelInstanceName, recordName, pluralized = false) {
        let content = "",
            routeName = pluralized ? this.pluralizedName : this.routeName;
        
        content += `const express = require("express");\n`;
        content += `const router = express.Router();\n`;
        content += `const ${this.camelCasedName}Controllers = require("../../controllers/generic.js");\n`;
        content += `const ${modelInstanceName} = require('../../models/dynamic/${this.fileName}');\n`;
        content += `\n`;
        content += `\n`;
        content += `module.exports = function(io)   {\n`;
        content += `\n`;
        content += `\tconst { getAll, getOneById, getOneByFilter, getAllFiltered, create, update, deleteById } = ${this.camelCasedName}Controllers(io, ${modelInstanceName}, "${recordName}");\n`;
        content += `\n`;
        content += `\n`;
        content += `// getAll Handler\n`;
        content += `\trouter.get("/${routeName}/", getAll);\n`;

        content += `\n`;
        content += `\n`;
        content += `// getOneByFilter hanlder\n`;
        content += `\trouter.get("/${routeName}/single?", getOneByFilter);\n`;

        content += `\n`;
        content += `\n`;
        content += `// getAllFiltered hanlder\n`;
        content += `\trouter.get("/${routeName}/all?", getAllFiltered);\n`;

        content += `\n`;
        content += `\n`;
        content += `// getOneById handler\n`;
        content += `\trouter.get("/${routeName}/:id", getOneById);\n`;

        content += `\n`;
        content += `\n`;
        content += `// create\n`;
        content += `\trouter.post("/${routeName}/", create);\n`;

        content += `\n`;
        content += `\n`;
        content += `// updateHandler\n`;
        content += `\trouter.put("/${routeName}/:id", update);\n`;

        content += `\n`;
        content += `\n`;
        content += `// deleteHandler\n`;
        content += `\trouter.delete("/${routeName}/:id", deleteById);\n`;

        content += `\n`;
        content += `\n`;
        content += `\treturn router;\n`;
        content += `\n`;
        content += `}`;
        
        let writeRouteResult = await writeFile(this.filePath, content);

        return {writeRouteResult};
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
        let routeObject = await this.getRouteByName(routeName),
            newRoute = newRouteName ? new Route(newRouteName) : new Route(routeObject.fileName);
        
        if(newRouteName)    {
            console.log("new name was provided");
            await deleteFile(path.join(process.cwd(), "routes", "dynamic", `${routeObject.fileName}.js`));
        }

        return await newRoute.createRoute();
    }

    static async deleteRouteByName(routeName) {
        let routeObject = await this.getRouteByName(routeName);

        if(routeObject) {
            let deleteResult = await deleteFile(path.join(process.cwd(), "routes", "dynamic", `${routeObject.fileName}.js`));
                // updateIndexResult = await Route.routesIndexRewrite();
            return { deleteResult };
        } else  {
            return {statusOk : false, message : "Model does not exist."};
        }
    }

}

module.exports = Route;