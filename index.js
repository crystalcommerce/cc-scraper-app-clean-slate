const path = require("path");
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 7747;
const dotenv = require("dotenv");
const cookieSession = require("cookie-session");
const socket = require("socket.io");



/**********************
 * 
 *  app and env instances
 * 
***********************/
dotenv.config();
const app = express();



/**********************
 * 
 *  Socket.io setup
 * 
***********************/


const http = require('http');
const options = {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
};
const server = http.createServer(app);
const getIo = require("socket.io");
global.ioObject = getIo(server, options);




/**********************
 * 
 *  Middlewares
 * 
***********************/
const auth = require("./middlewares/auth");
const runningScripts = require("./middlewares/runnning-scripts");
const apiRouteObjectFinder = require("./middlewares/route-object-finder");


/**********************
 * 
 *  Api Routes
 * 
***********************/
const authRouter = require("./routes/auth");
const apiRouter = require("./routes");
const filesRouter = require("./routes/files");



/**********************
 * 
 *  Db Connection
 * 
***********************/
mongoose.connect(process.env.PROD_DB_CONNECT, {
    useNewUrlParser : true, 
    useUnifiedTopology : true, 
    useCreateIndex : true, 
    useFindAndModify : false
})
    .then(() => {
        
        server.listen(port, () => {
            console.log(`Server has initialized at port ${port}`);
        });

    })
    .catch(err => console.log(err));




/**********************
         * 
         *  Middlewares Instances
         * 
        ***********************/
 app.use(express.urlencoded({extended : true}));    
 app.use(express.json({extended : true}));
 app.use(cors({ origin: true }));
 app.use(cookieSession({keys : ["scraper", "cc-scraper"]}))
 app.use(express.static(path.join(__dirname, 'views')));
 // this dynamically finds the route object to be used from routes/dynamic/ 
 // these routes are created upon making a scraper script.
 app.use("/api", apiRouteObjectFinder); 


 /**********************
  * 
  *  Routes Instances
  * 
 ***********************/

 /* files router */
 app.use("/cc-files", filesRouter);


 // protected static files
 // we're piping images and zipped files instead of serving static ones.
 // app.use("/data", express.static(path.join(__dirname, 'data')));


 /* auth router */
 app.use(authRouter);


 /* auth middleware */
 app.use(auth);


 /* Creating a global variable */
 app.use(runningScripts);


 /* api route middlewares */
 app.use(apiRouter);


 // /* Views Routes... */
 app.get("*", (req, res) => {
     res.sendFile(path.join(__dirname, "views", "index.html"));
 });


