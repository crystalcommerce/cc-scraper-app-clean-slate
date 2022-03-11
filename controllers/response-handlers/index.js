// we can make as many response handlers inside this...

module.exports = {

    auser : function () {

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
        
    aproductSet : function () {

        return {
            getAll(req, res, next)    {
                console.log("coming from the second middleWare : getAll");
                console.log(req.requestResult);
                next()
            },
            getOneById(req, res, next)    {
                console.log("coming from the second middleWare : getOneById");
                console.log(req.requestResult);
                next();
            }
        };

    },

    adynamic : function (modelInstanceDb) {

        let { recordName } = modelInstanceDb;

        return {
            getAll(req, res, next)    {
                console.log("coming from the second middleWare : getAll");
                console.log(req.requestResult);
                next()
            },
            getOneById(req, res, next)    {
                console.log("coming from the second middleWare : getOneById");
                console.log(req.requestResult);
                next();
            },
            create(req, res, next)    {
                console.log(req.body);

                // we can upload the image on to a bucket sserver from crystal commerce

                next();
            }
        };

    }

}