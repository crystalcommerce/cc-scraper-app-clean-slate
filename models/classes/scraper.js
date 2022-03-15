const path = require("path");
const { fileExists, deleteFile } = require("../../utilities/file-system");
const { toCapitalizeAll, toUrl, toNormalString, getInitials } = require("../../utilities/string");
const Model = require("./model");
const Route = require("./route");
const Script = require("./script");
// const ScraperScript = require("../../core");

class Scraper {

    constructor(productCategory, siteName, siteUrl, productBrand)   {
        this.productCategory = productCategory;
        this.siteName = siteName;
        this.siteUrl = siteUrl;
        this.productBrand = productBrand;

        this.modelObject = new Model(`${getInitials(this.productCategory)} ${this.siteName} ${this.productBrand}`);
        this.routeObject = new Route(`${getInitials(this.productCategory)} ${this.siteName} ${this.productBrand}`);
        this.scriptObject = new Script(this.productCategory, this.siteName, this.productBrand);

        this.scriptFilePath;
    }

    async createModelObject(schema, initializedProps) {
        // this.modelObject = new Model(`${this.siteName} ${this.productBrand}`);
        return await this.modelObject.createModel(schema, initializedProps);
    }

    async createRouteObject(modelInstanceName, pluralized = false)   {
        // this.routeObject = new Route(`${this.siteName} ${this.productBrand}`);
        return await this.routeObject.createRoute( modelInstanceName, pluralized);
    }

    async createScript(scriptCode)    {
        // this.scriptObject = new Script(this.siteName, this.productBrand);
        return await this.scriptObject.initialize(scriptCode);
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


    static async updateScraper(scriptFilePath, scriptCode) {
        await this.scriptObject.updateScript(scriptFilePath, scriptCode);
    }
    // reading and updating shall be done in the scrapersDB model with its controller.

    static async deleteScraperScript(scriptFilePath)  {
        return await Script.deleteScript(scriptFilePath);
    }

    static async deleteScraperSMR(siteName, productBrand)   {
        await Route.deleteRouteByName(toNormalString(toUrl(`${siteName} ${productBrand}`), "url"));
        await Model.deleteModelByName(toUrl(`${siteName} ${productBrand}`));
        await Script.deleteScript(siteName, productBrand);
    }

}

module.exports = Scraper;