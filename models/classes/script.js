const { writeFile, fileExists, mkdirSync, deleteFile } = require("../../utilities/file-system");
const { toUrl, getInitials } = require("../../utilities/string");
const path = require("path");
const uuid = require("mnm-uuid");


// creates the evaluator files, and returns the scriptFilePath which will be stored in the scraper's db;


class Script {

    constructor(productCategory, siteName, productBrand)   {
        this.siteName = siteName;
        this.productBrand = productBrand;
        this.productCategory = productCategory;
        this.scriptsFolderName = "scripts";
        this.mainDirPath = [process.cwd(), this.scriptsFolderName, toUrl(getInitials(this.productCategory)), toUrl(this.siteName)].join("/");
        this.scriptFileName = `${getInitials(productCategory)}-${toUrl(`${uuid()} ${productBrand}`)}.js`;
        this.scriptFilePath = path.join(this.mainDirPath.slice(this.mainDirPath.indexOf(this.scriptsFolderName)), this.scriptFileName);

        if(!fileExists(this.mainDirPath))   {
            mkdirSync(this.mainDirPath);
        }

    }

    async getScriptFilePath()   {
        this.scriptFilePath = path.join(this.mainDirPath.slice(this.mainDirPath.indexOf(this.scriptsFolderName)), this.scriptFileName);
    }

    async createScriptFile(scriptCode)    {
        return await writeFile(path.join(this.mainDirPath, this.scriptFileName), scriptCode);
    }

    static async updateScript(scriptFilePath, scriptCode)    {
        return await writeFile(path.join(process.cwd(), scriptFilePath), scriptCode);
    }
    

    // we don't really need to read the scraper files... getting the saved data about the scraper is handled by the scraper model
    // updating the script is as simple as creating it.. it overwrites the script...

    // delete script;
    static async deleteScript(scriptFilePath)  {
        return await deleteFile(path.join(process.cwd(), scriptFilePath));
    }

    async initialize(scriptCode)  {

        this.getScriptFilePath();
        
        return await this.createScriptFile(scriptCode);
        
    }


}

module.exports = Script;