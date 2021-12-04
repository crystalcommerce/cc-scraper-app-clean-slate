module.exports = async function(req, res, next)   {
    // global variables
    if(typeof global.currentRunningScripts === "undefined")    {
        global.currentRunningScripts = [];
    }

    next();
}