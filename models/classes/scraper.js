const path = require("path");
const { fileExists, deleteFile } = require("../../utilities/file-system");
const { getInitials } = require("../../utilities/string");
const Model = require("./model");
const Route = require("./route");
const Script = require("./script");

class Scraper {

    constructor(productCategory, siteName, siteUrl, productBrand)   {
        this.productCategory = productCategory;
        this.siteName = siteName;
        this.siteUrl = siteUrl;
        this.productBrand = productBrand;

        this.modelObject = new Model(`${getInitials(this.productCategory)} ${this.siteName} ${this.productBrand}`);
        this.routeObject = new Route(`${getInitials(this.productCategory)} ${this.siteName} ${this.productBrand}`);
        this.scriptObject = new Script(this.productCategory, this.siteName, this.productBrand);

        this.modelFilePath = this.modelObject.modelFilePath;
        this.routeFilePath = this.routeObject.routeFilePath;
        this.scriptFilePath = this.scriptObject.scriptFilePath;
    }

    static async instantiateByObject(scraperObject)   {
        
        let {productCategory, siteName, siteUrl, productBrand, modelFilePath, routeFilePath, scriptFilePath} = scraperObject;

        let scraperObjectInstance = new Scraper(productCategory, siteName, siteUrl, productBrand)

        scraperObjectInstance.scriptObject.scriptFilePath = scriptFilePath;

        scraperObjectInstance.modelFilePath = modelFilePath;
        scraperObjectInstance.routeFilePath = routeFilePath;
        scraperObjectInstance.scriptFilePath = scriptFilePath;

        return scraperObjectInstance;
    }

    getCollectionName() {
        return `${this.modelObject.camelCasedName.toLowerCase()}s`;
    }

    async createModelObject(schema, initializedProps) {
        return await this.modelObject.createModel(schema, initializedProps);
    }

    async createRouteObject(modelInstanceName, pluralized = false)   {
        return await this.routeObject.createRoute( modelInstanceName, pluralized);
    }

    async createScript(scriptCode)    {
        return await this.scriptObject.createScriptFile(scriptCode);
    }

    async createScraper(modelObjectOptions, routeObjectOptions, scriptCode)   {

        try {
            // create the model;
            let { schema, initializedProps } = modelObjectOptions,
            { writeModelResult : createModelResult} = await this.createModelObject(schema, initializedProps);
            if(!createModelResult.result)   {
                throw Error("We encounter problems writing the model file.");
            }

            // create the route;
            let {pluralized} = routeObjectOptions,
                { writeRouteResult : createRouteResult } = await this.createRouteObject(this.modelObject.modelInstanceName, pluralized);
            if(!createRouteResult.result)   {
                throw Error("We encounter problems writing the route file.");
            }


            // create the script;
            let createScriptResult = await this.createScript(scriptCode);
            if(!createScriptResult.result)   {
                throw Error("We encounter problems writing the script file.");
            }
            
            return {
                statusOk : true,
                message : `We have successfully created the scraper files.`,
            }

        } catch(err)    {

            await deleteFile(this.modelObject.filePath);
            await deleteFile(this.routeObject.filePath);
            await deleteFile(path.join(this.scriptObject.mainDirPath, this.scriptObject.scriptFileName));

            return {
                statusOk : false,
                message : `Error in creating the scraper : ${err.message}`,
            }
        }
        

    }

    async updateScraper(scriptCode) {
        await Script.updateScript(this.scriptFilePath, scriptCode);
    }
    // reading and updating shall be done in the scrapersDB model with its controller.

    async deleteScript()  {
        return await Script.deleteScriptByFilePath(this.scriptFilePath);
    }

    async deleteScraperScript()   {
        try {
            
            if(fileExists(path.join(process.cwd(), this.modelFilePath)))   {
                let deleteModelFileResult = await Model.deleteModelByFilePath(this.modelFilePath);
                if(!deleteModelFileResult.result)    {
                    throw Error(deleteModelFileResult.message);
                }
            }
            
            if(fileExists(path.join(process.cwd(), this.routeFilePath)))   {
                let deleteRouteFileResult = await Route.deleteRouteByFilePath(this.routeFilePath);
                if(!deleteRouteFileResult.result)    {
                    throw Error(deleteRouteFileResult.message);
                }
            }

            if(fileExists(path.join(process.cwd(), this.scriptFilePath)))   {
                let deleteScriptResult = await Script.deleteScriptByFilePath(this.scriptFilePath);
                if(!deleteScriptResult.result)    {
                    throw Error(deleteScriptResult.message);
                }
            }

            return {
                statusOk : true,
                message : `We have successfully deleted the scraper files.`,
            }
        } catch(err)    {
            return {
                statusOk : false,
                message : err.message,
            }
        }
        
    }

}

module.exports = Scraper;