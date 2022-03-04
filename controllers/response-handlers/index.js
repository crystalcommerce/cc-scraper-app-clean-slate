// we can make as many response handlers inside this...

module.exports = {
    user : function () {
        return {
            getAll(req, res, next)    {
                console.log("coming from the first middleWare : getAll");
                console.log(req.requestResult);
                next()
            },
            getOneById(req, res, next)    {
                console.log("coming from the first middleWare : getOneById");
                console.log(req.requestResult);
                console.log(this);
                next();
            },
        };
    },
        
    //  : function () {
    //     return {
    //         getAllFiltered(req, res, next)    {
    //             console.log("coming from the second middleWare : getAllFiltered");
    //             console.log(req.requestResult);
    //             next()
    //         },
    //         getById(req, res, next)    {
    //             console.log("coming from the second middleWare : getById");
    //             console.log(req.requestResult);
    //             next();
    //         },
    //     };
    // }
}