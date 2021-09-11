const path = require("path");
const { imagesDb } = require("../models");

module.exports = function(modelInstanceDb, recordName) {

    function getAll(req, res)   {

        res.setHeader("Content-type", "application/json");

        modelInstanceDb.getAll()
            .then(result => {
                // if(!result.length) throw Error(`No ${recordName} was found.`);
                res.send(JSON.stringify(result, null, 4));
            })
            .catch(err => {
                let result = JSON.stringify({
                    message : err.message,
                    status : 404,
                }, null, 4);
                res.status(404).send(result);
            });
    }

    async function getOneById(req, res)   {
        
        res.setHeader("Content-type", "application/json");

        modelInstanceDb.getById(req.params.id)
            .then(result => {
                if(!result) {
                    throw Error("No data was found.")
                }
                res.send(JSON.stringify(result, null, 4));
            })
            .catch(err => {
                res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
            });
    }

    function getOneByFilter(req, res)   {

        res.setHeader("Content-type", "application/json");
    
        modelInstanceDb.getOneByFilter(req.query)
            .then(result => {
                if(!result) {
                    throw Error("No data was found.")
                }
                res.send(JSON.stringify(result, null, 4));
            })
            .catch(err => {
                res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
            });
    }

    function getAllFiltered(req, res)   {
        res.setHeader("Content-type", "application/json");

        modelInstanceDb.getAllFilteredData(req.query)
            .then(result => {
                res.send(JSON.stringify(result, null, 4));
            })
            .catch(err => {
                res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
            });
    }

    function create(req, res)   {
        res.setHeader("Content-type", "application/json");

        modelInstanceDb.create(req.body).
            then(result => {
                res.send(JSON.stringify(result, null, 4));
            })
            .catch(err => {
                res.status(401).send(JSON.stringify({status : 404, message : err.message}, null, 4));
            });
    }

    function update(req, res)   {
        modelInstanceDb.update(req.params.id, req.body).
            then(result => {
                res.send(JSON.stringify(result, null, 4));
            })
            .catch(err => {
                res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4));
            });
    }

    async function deleteById(req, res)   {
        modelInstanceDb.delete(req.params.id)
            .then(result => res.send(JSON.stringify(result, null, 4)))
            .catch(err => res.status(404).send(JSON.stringify({status : 404, message : err.message}, null, 4)));
    }

    return {
        getAll,
        getOneById,
        getOneByFilter,
        getAllFiltered,
        create,
        update,
        deleteById,
    }

}