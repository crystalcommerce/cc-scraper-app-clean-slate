const { toCapitalizeAll, toUrl, toNormalString } = require("../../utilities/string");
const Model = require("./model");
const Route = require("./route");
const Script = require("./script");
// const ScraperScript = require("../../core");

class Scraper {

    constructor(siteResource, productBrand, scraperType = "standard")   {
        this.siteName = siteResource.siteName;
        this.siteUrl = siteResource.siteUrl;
        this.productBrand = productBrand;

        this.modelObject = new Model(`${this.siteName} ${this.productBrand}`);
        this.routeObject = new Route(`${this.siteName} ${this.productBrand}`);
        this.scriptObject = new Script(this.siteName, this.productBrand, scraperType);

        this.scriptFilePath;
    }

    async createModelObject(schema, initializedProps) {
        // this.modelObject = new Model(`${this.siteName} ${this.productBrand}`);
        await this.modelObject.createModel(schema, initializedProps);
    }

    async createRouteObject(modelInstanceName, recordName, pluralized)   {
        // this.routeObject = new Route(`${this.siteName} ${this.productBrand}`);
        await this.routeObject.createRoute( modelInstanceName, toCapitalizeAll(recordName), pluralized);
    }

    async createScript(evaluatorObjects)    {
        // this.scriptObject = new Script(this.siteName, this.productBrand);

        await this.scriptObject.initialize(evaluatorObjects);

        await this.scriptObject.getScriptFilePath();
        this.scriptFilePath = this.scriptObject.scriptFilePath;
    }

    async createScraper(modelObjectOptions, routeObjectOptions, evaluatorObjects)   {

        // create the model;
        let { schema, initializedProps } = modelObjectOptions;
        await this.createModelObject(schema, initializedProps);

        // create the route;
        let {recordName, pluralized} = routeObjectOptions;
        await this.createRouteObject(this.modelObject.modelInstanceName, recordName, pluralized);

        // create the script;
        await this.createScript(evaluatorObjects);

    }


    async updateScript(evaluatorObjects) {
        await this.createScript(evaluatorObjects);
    }
    // reading and updating shall be done in the scrapersDB model with its controller.

    static async deleteScraper(siteName, productBrand)  {
        // await Route.deleteRouteByName(toNormalString(toUrl(`${siteName} ${productBrand}`), "url"));
        // await Model.deleteModelByName(toUrl(`${siteName} ${productBrand}`));
        await Script.deleteScript(siteName, productBrand);
    }

}

module.exports = Scraper;