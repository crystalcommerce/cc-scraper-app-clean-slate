const dataHandlers = require("./data-handlers");
const responseHandlers = require('./response-handlers');
const fileUpload = require("./file-upload");
const { auth } = require("./auth");

const controllers = {};

// responsible for getting the data and assigning it to the requestResult property in req object
Object.keys(dataHandlers).forEach(key => {
    if(!controllers[key])   {
        controllers[key] = [];
    }
    if(dataHandlers[key])   {
        controllers[key].push(dataHandlers[key]);
    }
});


// we can add more handlers directories here... each directory functions could be piped to the api route that was called. 
// each methods of the controller files should have the same method name...
// each property of the object, must be the same as the property names given to the datahandlers;
// this way, they will get added to the correct route file...
Object.keys(responseHandlers).forEach(key => {
    if(!controllers[key])   {
        controllers[key] = [];
    }
    if(responseHandlers[key])   {
        controllers[key].push(responseHandlers[key]);
    }
});


module.exports = { controllers, fileUpload, auth };






