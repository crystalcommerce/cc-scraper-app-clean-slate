//  TODO : assign a dirPath where images will be stored or use an S3 bucket like type of storage...

const { imagesDb } = require("../../models/index");
const { getRequestResult } = require("../../utilities");
const getFileUpload = require("../file-upload");
const recordName = imagesDb.recordName;


module.exports = function() {

    async function getAll(req, res, next)  {

        try {
            let result = await imagesDb.getAll();
            req.requestResult = getRequestResult(result, 200);
            next();
        } catch(err)    {
            req.requestResult = getRequestResult({status : 404, message : err.message}, 404);
            next();
        }

    }

    async function getOneById(req, res, next)  {

        try {
            let result = await imagesDb.getById(req.params.id);
            if(!result) throw Error(`${recordName} not found`);
            req.requestResult = getRequestResult(result, 200);
            next();
        } catch(err)    {
            req.requestResult = getRequestResult({status : 404, message : err.message}, 404);
            next();
        }
        
    }

    async function getOneByFilter(req, res, next)  {
        try {
            let filter = req.query,
                result = await imagesDb.getOneByFilter(filter);
            if(!result) throw Error(`${recordName} not found`);
            req.requestResult = getRequestResult(result, 200);
            next();
        } catch(err)    {
            req.requestResult = getRequestResult({status : 404, message : err.message}, 404);
            next();
        }

    }

    async function getAllFiltered(req, res, next)  {
        
        try {
            let filter = req.query,
                result = await imagesDb.getAllFilteredData(filter);
            req.requestResult = getRequestResult(result, 200);
            next();
        } catch(err)    {
            req.requestResult = getRequestResult({status : 404, message : err.message}, 404);
            next();
        }
        
    }

    async function create(req, res, next)   {

        try {

            let result = await imagesDb.create(req.body);

            req.requestResult = getRequestResult(result, 200);
            next();
        } catch(err)    {
            req.requestResult = getRequestResult({status : 404, message : err.message}, 404);
            next();
        }
    }

    async function update(req, res, next)   {
        
        try {
            let updateResult = await imagesDb.update(req.params.id, req.body);

            req.requestResult = getRequestResult(updateResult, 200);
            next();
        } catch(err)    {
            req.requestResult = getRequestResult({status : 403, message : err.message}, 403);
            next();
        }
    }

    async function deleteById(req, res, next)   {
        try {
            let deleteResult = await imagesDb.delete(req.params.id);

            req.requestResult = getRequestResult(deleteResult, 200);
            next();
        } catch(err)    {
            req.requestResult = getRequestResult({status : 403, message : err.message}, 403);
            next();
        }
    }

    async function deleteAllFiltered(req, res, next) {        

        try {
            let filter = req.query,
                filteredResult = await imagesDb.getAllFilteredData(filter),
                promises = [];

            for(let product of filteredResult) {
                promises.push(async () => {
                    try {
                        deleteResult = await imagesDb.delete(product._id.toString());

                        return deleteResult;
                    } catch(err) {
                        return {status : 403, message : err.message}
                    }
                });
            }
            

            let multipleDeleteResult = await Promise.all(promises.map(async item => await item()));
            
            if(!multipleDeleteResult.length) {
                throw Error(`We could did not get a filtered result for ${recordName}, which means we never got to delete any of the data.`)
            }

            req.requestResult = getRequestResult(multipleDeleteResult, 200);
            next();
        } catch(err)    {
            req.requestResult = getRequestResult({status : 403, message : err.message}, 403);
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
        deleteById,
        deleteAllFiltered,
    }

}