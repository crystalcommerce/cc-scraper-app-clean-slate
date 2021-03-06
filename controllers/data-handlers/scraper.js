const mongoose = require("mongoose");
const path = require("path");
const { toUrl, toCapitalizeAll, toNormalString, getInitials } = require("../../utilities/string");

// modelInstances
const dbInstances = require("../../models");
const { scrapersDb, productSetMetaDb, productSetsDb } = dbInstances;

// classes
const Scraper = require("../../models/classes/scraper");
const Model = require("../../models/classes/model");
const { deleteAllInDirPath, fileExists } = require("../../utilities/file-system");


module.exports = function()   {
    
    // getAll
    async function getAll(req, res, next)   {

        try {
            let result = await scrapersDb.getAll();
            req.requestResult = {data : result , status : 200};
            next();
        } catch(err)    {
            req.requestResult = {
                message : err.message,
                status : 404,
            };
            next();
        }

    }

    // get one by id;
    async function getOneById(req, res, next) {
        
        try {
            let result = await scrapersDb.getById(req.params.id);
            if(!result) throw Error(`No ${scrapersDb.recordName} was found.`);

            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }
    }

    // getOneByFilter
    async function getOneByFilter(req, res, next)    {
        
        try {
            let result = await scrapersDb.getOneByFilter(req.query);
            if(!result) throw Error(`No ${scrapersDb.recordName} was found.`);

            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }

    }

    // getALlFiltered
    async function getAllFiltered(req, res, next) {

        try {
            let result = await scrapersDb.getAllFilteredData(req.query);
            req.requestResult = {data : result , status : 200};
            next();
        } catch(err)    {
            req.requestResult = {
                message : err.message,
                status : 404,
            };
            next();
        }

    }

    // create
    async function create(req, res, next)   {
        try{

            let { 
                    productCategory,
                    siteName,
                    siteUrl, 
                    productBrand, 
                    imagePropName,
                    imageNameObject,
                    csvExcludedProps,
                    modelObjectOptions, 
                    routeObjectOptions, 
                    scriptCode,
                    usage,
                    groupIdentifierKey,
                } = req.body,
                scraperObject = new Scraper(productCategory, siteName, siteUrl, productBrand),
                { modelFilePath, routeFilePath, scriptFilePath } = scraperObject,
                apiRoute = `/api/${scraperObject.routeObject.routeName}`;


            // check first if we already have a scraper with the same 
                // - productCategory,
                // - siteUrl,
                // - siteName,
                // - productBrand,
            let foundScraperDetails = await scrapersDb.getOneByFilter({
                productCategory,
                siteUrl,
                siteName,
                productBrand,
            });

            if(foundScraperDetails) {
                throw Error(`We already have a scraper with the same product category : ${productCategory}, site URL : ${siteUrl}, site name : ${siteName}, and product brand : ${productBrand}.`);
            }


            // create a productsMeta data; // we're not checkiing if there's already a resource, it will fail if there is already;
            // but the process still has to go on.
            
            let productMeta = {productCategory, siteName, siteUrl, productBrand};
            
            await Promise.all(Object.keys(productMeta).map(async key => {
                await productSetMetaDb.create({
                    metaKey : key,
                    metaValue : productMeta[key],
                });
            }));

            // saving the details into our database.
            let createScraperResult = await scrapersDb.create({
                productCategory,
                siteName,
                siteUrl,
                productBrand,
                imagePropName,
                imageNameObject,
                scriptCode,
                csvExcludedProps,
                modelFilePath,
                routeFilePath,
                scriptFilePath,
                usage,
                apiRoute,
                groupIdentifierKey,
                modelObjectOptions,
                routeObjectOptions,
            });

            if(createScraperResult.statusOk === false)   {
                throw Error("We were unable to save the Scraper details.");
            }

            // we create the files here;

            let createFileResult = await scraperObject.createScraper(modelObjectOptions, routeObjectOptions, scriptCode);

            if(createFileResult.statusOk === false) {
                throw Error(createFileResult.message);
            }


            req.requestResult = {status : 200, message : "We have successfully created the necessary scraper files, and have also saved the scraper details into our database.", data : createScraperResult.data};

            next();

        } catch(err)    {
            req.requestResult = {status : 403, message : err.message};
            next();
        }
    }

    async function scraperRewriteAll(req, res, next) {

        try {
            let scraperObjectsFromDb = await scrapersDb.getAllFilteredData({isActive : true}),
                promises = [];

            if(!scraperObjectsFromDb.length)   {
                throw Error("We do not have any stored scrapers to rewrite.")
            }
            

            for(let scraperObjectFromDb of scraperObjectsFromDb)    {
                promises.push(async function() {
                    let scraperObject = await Scraper.instantiateByObject(scraperObjectFromDb),
                        { modelObjectOptions, routeObjectOptions, scriptCode } = scraperObjectFromDb;

                    return await scraperObject.createScraper(modelObjectOptions, routeObjectOptions, scriptCode);
                })
            }
                

            let rewriteAllResult = await Promise.all(promises.map(async callback => await callback()));

            req.requestResult = {
                status : 200,
                message : "We have re-written all the scrapers needed.",
                data : rewriteAllResult,
            };
            next();
            
        }
        catch(err)  {
            req.requestResult = {
                status : 403,
                message : err.message,
            };
            next();
        }
    }

    async function scraperRewrite(req, res, next) {
        try {
            let { id : scraperId } = req.params,
                scraperObjectFromDb = await scrapersDb.getById(scraperId);
            
            // check if we have an item with that id...
            if(!scraperObjectFromDb) {
                throw Error(`We didn't find a scraper with an id of ${scraperId}`);
            }

            if(!scraperObjectFromDb.isActive)    {
                throw Error(`Error in writing the script : Just put this scraper in active status to rewrite the script.`);
            }
                
            let scraperObject = await Scraper.instantiateByObject(scraperObjectFromDb),
                { modelObjectOptions, routeObjectOptions, scriptCode, productCategory, siteName, productBrand } = scraperObjectFromDb,
                createFileResult = await scraperObject.createScraper(modelObjectOptions, routeObjectOptions, scriptCode);

            if(createFileResult.statusOk === false) {
                throw Error(createFileResult.message);
            }

            req.requestResult = {
                status : 200,
                message : `We have successfully written the scraper for ${productCategory} ${siteName} ${productBrand}.`,
            };
            next();

        }
        catch(err)  {
            req.requestResult = {
                status : 403,
                message : err.message,
            };
            next();
        }
    }

    // updates the details of the scraper from db, and also in the related files (script, model, route)
    async function update(req, res, next) {        
        
        try {
            let { 
                    productCategory : newProductCategory,
                    siteName : newSiteName,
                    productBrand : newProductBrand,
                } = req.body,
                scraperObjectFromDb = await scrapersDb.getById(req.params.id);
                
            // check if we have an item with that id...
            if(!scraperObjectFromDb) {
                throw Error(`We didn't find a scraper with an id of ${req.params.id}`);
            }

            let similarFilteredObjects = await scrapersDb.getAllFilteredData({
                    productCategory : newProductCategory,
                    siteName : newSiteName,
                    productBrand : newProductBrand,
                });
            
            similarFilteredObjects = similarFilteredObjects.filter(item => item._id.toString() !== req.params.id);

            
            // check if there is already an object with the same productCategory, siteName, and productBrand in the scrapers list.
            if(similarFilteredObjects.length){
                throw Error(`We already have scrapers with the same productCategory : ${newProductCategory}, siteName : ${newSiteName}, and productBrand : ${newProductBrand}`);
            }


            let dataObjectParam = {...scraperObjectFromDb, ...req.body},
                { productCategory : oldProductCategory, siteName : oldSiteName, productBrand : oldProductBrand } = scraperObjectFromDb,
                { productCategory, siteName, siteUrl, productBrand, modelObjectOptions, routeObjectOptions, scriptCode } = dataObjectParam,
                scraperObject;
            

            // check if files will have to be just overwritten or if we need to delete them, and then create new files;
            if(newProductCategory !== oldProductCategory || newSiteName !== oldSiteName || newProductBrand !== oldProductBrand) {
                let oldScraperObject = await Scraper.instantiateByObject(scraperObjectFromDb),
                    deleteFilesResult = await oldScraperObject.deleteScraperScript();

                if(!deleteFilesResult.statusOk)  {
                    throw Error(deleteFilesResult.message);
                }
                // we instantiate a new object
                scraperObject = new Scraper(productCategory, siteName, siteUrl, productBrand);
                
            } else  {
                // we reinstantiate the Scraper class;
                scraperObject = await Scraper.instantiateByObject(dataObjectParam);
            }

            // we recreate the files...
            let createFileResult = await scraperObject.createScraper(modelObjectOptions, routeObjectOptions, scriptCode),
                {modelFilePath, routeFilePath, scriptFilePath} = scraperObject;
            if(createFileResult.statusOk === false) {
                throw Error(createFileResult.message);
            }

            // updating data from db... this has to come after files have been created...
            let updateResult = await scrapersDb.update(req.params.id, {...req.body, modelFilePath, routeFilePath, scriptFilePath});
            if(updateResult.statusOk === false) {
                throw Error(`We had problems updating the data`);
            }   


            // if we get to this point it means everything went as how we intended it to.
            req.requestResult = {
                message : "We have successfully updated the files related to this scraper and its stored details in our database.",
                status : 200,
                data : updateResult
            };
            next();  
            
        } catch(err)    {
            req.requestResult = {status : 403,  message : err.message};
            next();
        }
    }

    // deletes just the script and puts the scraper in an inactive status;
    async function deleteScript(req, res, next)    {
        
        try {
            let scraperObjectFromDb = await scrapersDb.getById(req.params.id),
                scraperObject = await Scraper.instantiateByObject(scraperObjectFromDb),
                deleteResult = await scraperObject.deleteScript();

            if(!deleteResult.result)    {
                throw Error(deleteResult.message);
            }

            let updateResult = await scrapersDb.update(req.params.id, { isActive : false });

            req.requestResult = {status : 200, message : "We have successfully deleted the script file, and have placed this scraper on inactive status.", data : updateResult.data};
            
            next();
        }
        catch(err)  {

            req.requestResult = {status : 403, message : err.message};
            next();

        }
    }

    // deletes all files (model, route, script) and the data from the scrapers table
    async function deleteScraperScript(req, res, next)  {

        try{
            let scraperObjectFromDb = await scrapersDb.getById(req.params.id),
                scraperObject = await Scraper.instantiateByObject(scraperObjectFromDb);


            let deleteFilesResult = await scraperObject.deleteScraperScript();
            if(!deleteFilesResult.statusOk)  {
                throw Error(deleteFilesResult.message);
            }

            let deleteDbDetailsResult = await scrapersDb.delete(req.params.id);
            if(!deleteDbDetailsResult.statusOk) {
                throw Error(deleteDbDetailsResult.message);
            }
           
            req.requestResult = {status : 200, message : `We have successfully deleted the all the files related to this scraper script, and all of the related data that we have from the database.`};

            next();
        }
        catch(err)  {
            req.requestResult = {status : 403, message : err.message};
            next();
        }

    }

    return {
        getAll,
        getOneById,
        getOneByFilter,
        getAllFiltered,
        create,
        update,
        scraperRewriteAll,
        scraperRewrite,
        deleteScript, // deletes the script only
        deleteScraperScript,
    }
}
