const path = require("path");
const { getAllFilesFromDirectory, deleteFile, writeFile, getFileObject, fileExists, mkdirSync } = require("../../utilities/file-system");
const { toCamelCase, toUrl, toCapitalize, toCapitalizeAll } = require("../../utilities/string");

class Model  {

    constructor(modelName)   {
        this.modelName = modelName;
        this.fileName = toUrl(this.modelName);
        this.camelCasedName = toCamelCase(this.fileName, true);
        this.modelInstanceName = `${this.camelCasedName}sDb`;
        this.dirPath = path.join(process.cwd(), "models", "dynamic");
        this.filePath = path.join(process.cwd(), "models", "dynamic", `${this.fileName}.js`);
        this.recordName = toCapitalizeAll(this.modelName);

        if(!fileExists(this.dirPath))    {
            mkdirSync(this.dirPath);
        }

    }

    async createModel(schema, initializedProps)  {

        let { models } = await Model.getModels();

        if(models.find(model => model.fileName === this.fileName || `${model.fileName}s` === this.fileName))  {
            return {statusOk : false, message : "You cannot use this model name 'cause this is part of the core models used by this application."};
        }


        let content = "";

        content += `const db = require("../classes/database");\n`;
        content += `const mongoose = require("mongoose");\n`;
        content += `const { Schema } = mongoose;\n`;
        content += `\n`;
        content += `const ${this.camelCasedName}Schema = new Schema({\n`;
        for(let key in schema)   {
            content += `\t${key} : {\n`
            for(let prop in schema[key])    {
                content += `\t\t${prop} : ${schema[key][prop]},\n`
            }
            
            content += `\t},\n`
        }
        // date
        content += `\tdateCreated : {\n`;
        content += `\t\ttype : String,\n`;
        content += `\t\tdefault : new Date(Date.now()).toISOString(),\n`;
        content += `\t}\n`;

        content += `}, {strict : true});\n`;
        content += `\n`;
        content += `const ${toCapitalize(this.camelCasedName)} = mongoose.model("${toCapitalize(this.camelCasedName)}", ${this.camelCasedName}Schema);\n`;
        content += `\n`;
        content += `\n`;
        content += `// initializing ${this.modelInstanceName}\n`;
        content += `const ${this.modelInstanceName} = db(${toCapitalize(this.camelCasedName)});\n`;
        content += `${this.modelInstanceName}.recordName = "${this.recordName}"\n`;
        for(let prop of initializedProps)   {
            let [key] = Object.keys(prop);
            if(prop[key].length)    {
                content += `${this.modelInstanceName}.addProps("${key}", ${prop[key].map(item => `"${item}"`).join(", ")});\n`;
            }
            
        }
        content += `\n`;
        content += `module.exports = ${this.modelInstanceName};`;

        let writeModelResult = await writeFile(this.filePath, content);

        return { writeModelResult };
    }

    static async getModelObject(filesArr, path) {

        let fileObjects = [];

        filesArr = filesArr.filter(item => item !== "index.js");

        for(let file of filesArr)   {
            let {name} = await getFileObject(file);
            fileObjects.push({
                modelName : `${toCamelCase(name, true)}sDb`,
                fileName : name,
                modelPath : `${path}/${file}`,
                camelCaseName : toCamelCase(name, true),
            });
        }

        return fileObjects;
        
    }

    static async getModels()  {
        try {
            let modelsFolder = path.join(process.cwd(), "models"),
                dynamicModelsFolder = path.join(modelsFolder, "dynamic"),
                modelFiles = await getAllFilesFromDirectory(modelsFolder),
                dynamicModelFiles = await getAllFilesFromDirectory(dynamicModelsFolder),
                models = await Model.getModelObject(modelFiles, "."),
                dynamicModels = await Model.getModelObject(dynamicModelFiles, "./dynamic");

            return {models, dynamicModels};
        }
        catch(err)  {
            console.log(err);

            return null;
        }
    }

    static async getModelByName(modelName)   {
        try {
            let modelsFolder = path.join(process.cwd(), "models"),
            dynamicModelsFolder = path.join(modelsFolder, "dynamic"),
            dynamicModelFiles = await getAllFilesFromDirectory(dynamicModelsFolder),
            dynamicModels = await Model.getModelObject(dynamicModelFiles, "./dynamic");
        
            return dynamicModels.find(item => item.fileName === modelName);
        }
        catch (err) {
            return null;
        }           
    }

    static async updateModelByName(modelName, schema, initializedProps, newModelName = null)  {
        let model = await Model.getModelByName(modelName),
            newModel = newModelName ? new Model(newModelName) : new Model(model.fileName);

        if(newModelName)    {
            await deleteFile(path.join(process.cwd(), "models", "dynamic", `${model.fileName}.js`));
        }
        
        return await newModel.createModel(schema, initializedProps);
    }

    static async deleteModelByName(modelName)  {
        let model = await Model.getModelByName(modelName);

        if(model)   {
            let deleteResult = await deleteFile(path.join(process.cwd(), "models", "dynamic", `${model.fileName}.js`));
            return { deleteResult };
        } else  {
            return {statusOk : false, message : "Model does not exist."};
        }
    }

}

module.exports = Model;