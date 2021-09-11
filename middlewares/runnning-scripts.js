module.exports = async function(req, res, next)   {
    // global variables
    if(typeof global.currentRuninngScripts === "undefined")    {
        global.currentRuninngScripts = [];
    }

    next();
}