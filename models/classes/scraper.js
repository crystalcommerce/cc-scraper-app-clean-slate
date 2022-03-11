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
        await this.modelObject.createModel(schema, initializedProps);
    }

    async createRouteObject(modelInstanceName, pluralized = false)   {
        // this.routeObject = new Route(`${this.siteName} ${this.productBrand}`);
        await this.routeObject.createRoute( modelInstanceName, pluralized);
    }

    async createScript(scriptCode)    {
        // this.scriptObject = new Script(this.siteName, this.productBrand);

        await this.scriptObject.initialize(scriptCode);

        await this.scriptObject.getScriptFilePath();
        this.scriptFilePath = this.scriptObject.scriptFilePath;
    }

    async createScraper(modelObjectOptions, routeObjectOptions, scriptCode)   {

        // create the model;
        let { schema, initializedProps } = modelObjectOptions;
        await this.createModelObject(schema, initializedProps);

        // create the route;
        let {pluralized} = routeObjectOptions;
        await this.createRouteObject(this.modelObject.modelInstanceName, pluralized);

        // create the script;
        await this.createScript(scriptCode);

    }


    async updateScraper(scriptFilePath, scriptCode) {
        await this.scriptObject.updateScript(scriptFilePath, scriptCode);
    }
    // reading and updating shall be done in the scrapersDB model with its controller.

    static async deleteScraper(siteName, productBrand)  {
        // await Route.deleteRouteByName(toNormalString(toUrl(`${siteName} ${productBrand}`), "url"));
        // await Model.deleteModelByName(toUrl(`${siteName} ${productBrand}`));
        await Script.deleteScript(scriptFilePath);
    }

    static async deleteScraperSMR(siteName, productBrand)   {
        await Route.deleteRouteByName(toNormalString(toUrl(`${siteName} ${productBrand}`), "url"));
        await Model.deleteModelByName(toUrl(`${siteName} ${productBrand}`));
        await Script.deleteScript(siteName, productBrand);
    }

}

module.exports = Scraper;