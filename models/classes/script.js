const { writeFile, fileExists, mkdirSync, getAllFilesFromDirectory, deleteAllInDirPath, deleteDir } = require("../../utilities/file-system");
const { toUrl } = require("../../utilities/string");
const path = require("path");


// creates the evaluator files, and returns the scriptFilePath which will be stored in the scraper's db;


class Script {

    constructor(siteName, productBrand, scraperType)   {
        this.siteName = siteName;
        this.productBrand = productBrand;
        this.scriptsFolderName = "scripts";
        this.mainDirPath = [process.cwd(), this.scriptsFolderName, toUrl(this.siteName), toUrl(productBrand)].join("/");
        this.evaluatorPath = [this.mainDirPath, "evaluators"].join("/");
        this.evaluatorIndex = [this.evaluatorPath, "index.js"].join("/");
        this.scriptIndex = [this.mainDirPath, "index.js"].join("/");
        this.scraperType = scraperType;

        this.evaluatorFiles = [];

        if(!fileExists(this.mainDirPath))   {
            mkdirSync(this.mainDirPath);
        }
        if(!fileExists(this.evaluatorPath)) {
            mkdirSync(this.evaluatorPath);
        }
    }

    async getScriptFilePath()   {
        this.scriptFilePath = this.mainDirPath.slice(this.mainDirPath.indexOf(this.scriptsFolderName));
    }

    async createEvaluatorObjects(evaluatorObjects)  {

        for(let i = 0; i < evaluatorObjects.length; i++)    {
            let evaluatorObject = evaluatorObjects[i],
                { callback, waitMethods, type } = evaluatorObject,
                content = "",
                fileName = `evaluator-callback-${i}.js`;
            // callback
            content += `const callback = ${callback}\n`;
            content += `\n\n`;

            // waitMethods
            content += `const waitMethods = [\n`;
            for(let waitMethod of waitMethods) {
                content += "\t{\n";
                for(let key in waitMethod)  {
                    content += `\t\t${key} : "${waitMethod[key]}",\n`;
                }
                content += "\t},\n";
            }
            content += `];\n`;
            content += `\n\n`;

            // evaluator type; single product || list of products;
            content += `const type = "${type}";\n`;
            content += `\n\n`;

            if(type === "list")   {

                let {paginated} = evaluatorObject;

                content += `const paginated = ${paginated};\n`;
                content += `\n\n`;


                content += `module.exports =  {callback, waitMethods, type, paginated};`;
            } else  {
                let { objPropArgs, productUrlProp } = evaluatorObject;

                // objPropArgs
                content += `const objPropArgs = [\n`;
                for(let arg of objPropArgs) {
                    content += `\t"${arg}",\n`;
                }
                content += `];\n`;
                content += `\n\n`;

                // productUrlProp
                content += `const productUrlProp = "${productUrlProp}";\n`;
                content += `\n\n`;

                content += `module.exports = {callback, waitMethods, type, objPropArgs, productUrlProp}`;

            }
            this.evaluatorFiles.push(fileName);
            await writeFile(path.join(this.evaluatorPath, fileName), content);
            


            await this.evaluatorIndexRewrite();

        }

    }

    removeIndexFromFiles(filesArr)  {
        let index = filesArr.findIndex(item => item === "index.js");
        filesArr.splice(index, 1);
    }

    async evaluatorIndexRewrite() {
        let evaluatorFiles = this.evaluatorFiles,
            filePath = path.join(this.evaluatorPath, "index.js"),
            content = "";


        // this.removeIndexFromFiles(evaluatorFiles);

        for(let i = 0; i < evaluatorFiles.length; i++)    {
            let evaluatorFile = evaluatorFiles[i];
            content += `const evaluator${i} = require("./${evaluatorFile}");\n`;
        }
        content += "\n\n";
        content += `module.exports = [\n`;
        for(let i = 0; i < evaluatorFiles.length; i++)    {
            content += `\tevaluator${i},\n`;
        }
        content += `];`;

        return await writeFile(filePath, content);;
    } 

    async writeProductBrandIndex()  {
        let filePath = path.join(this.mainDirPath, "index.js"),
            content = "";
        if(this.scraperType === "standard") {
            content += `const { StandardScraperScript } = require("../../../core");\n`;
            content += `const evaluatorObjects = require("./evaluators");\n`;
            content += `\n`;
            content += `module.exports = function(scraperOptions)   {\n`;
            content += `\treturn new StandardScraperScript({...scraperOptions, evaluatorObjects});\n`;
            content += `}`;
        } else  {
            // will be used for custom scraper script
        }
        

        return await writeFile(filePath, content);
    }

    async initialize(evaluatorObjects)  {

        this.getScriptFilePath();
        
        await this.createEvaluatorObjects(evaluatorObjects);
        
        await this.writeProductBrandIndex();
        
    }

    // we don't really need to read the scraper files... getting the saved data about the scraper is handled by the scraper model
    // updating the script is as simple as creating it.. it overwrites the script...

    // delete script;
    static async deleteScript(siteName, productBrand)  {
        //
        let script = new Script(siteName, productBrand);
        await script.getScriptFilePath();
        await deleteAllInDirPath(script.scriptFilePath, true);
    }


}

module.exports = Script;