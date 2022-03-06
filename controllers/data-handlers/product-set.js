const { productSetsDb } = require("../../models/index");
const { recordName } = productSetsDb;


module.exports = function() {

    async function getAll(req, res, next)  {

        try {
            let result = await productSetsDb.getAll();
            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }

    }

    async function getOneById(req, res, next)  {

        try {
            let result = await productSetsDb.getById(req.params.id);
            if(!result) throw Error(`${recordName} not found`);
            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }
        
    }

    async function getOneByFilter(req, res, next)  {
        try {
            let filter = req.query,
                result = await productSetsDb.getOneByFilter(filter);
            if(!result) throw Error(`${recordName} not found`);
            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }

    }

    async function getAllFiltered(req, res, next)  {
        
        try {
            let filter = req.query,
                result = await productSetsDb.getAllFilteredData(filter);
            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }
        
    }

    async function create(req, res, next)   {

        try {

            let result = await productSetsDb.create(req.body);

            req.requestResult = {data : result, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 404, message : err.message};
            next();
        }
    }

    async function update(req, res, next)   {
        
        try {
            let updateResult = await productSetsDb.update(req.params.id, req.body);

            req.requestResult = {data : updateResult, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 403, message : err.message};
            next();
        }
    }

    async function deleteById(req, res, next)   {
        try {
            let deleteResult = await productSetsDb.delete(req.params.id);

            req.requestResult = {data : deleteResult, status : 200};
            next();
        } catch(err)    {
            req.requestResult = {status : 403, message : err.message};
            next();
        }
    }

    async function deleteAllFiltered(req, res, next) {        

        try {
            let filter = req.query,
                filteredResult = await productSetsDb.getAllFilteredData(filter),
                promises = [];

            for(let product of filteredResult) {
                promises.push(async () => {
                    try {
                        deleteResult = await productSetsDb.delete(product._id.toString());

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

            req.requestResult = {data : multipleDeleteResult, status : 200};
            next();
        } catch(err)    {
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
        deleteById,
        deleteAllFiltered,
    }

}