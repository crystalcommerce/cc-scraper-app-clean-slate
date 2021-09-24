const path = require("path");
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 8080;
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
const socketOptions = {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
};
const server = http.createServer(app);
const io = socket(server, socketOptions);



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
 *  Socket Handlers
 * 
***********************/
const executeScriptSocketHandler = require("./sockets/execute-script-socket");


/**********************
 * 
 *  Db Connection
 * 
***********************/
// DB_CONNECT_ATLAS PROD_DB_CONNECT
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
// it allows creation and inclusion of files within this app, without the need to restart the server.
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
app.use(apiRouter(io));


// /* Views Routes... */
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});


/**********************
 * 
 *  Sockets Instances
 * 
 ***********************/
executeScriptSocketHandler(io);