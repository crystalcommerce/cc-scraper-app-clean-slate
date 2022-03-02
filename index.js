const path = require("path");
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const { Server } = require("socket.io");
const port = process.env.PORT || 8080;
const dotenv = require("dotenv");
const cookieSession = require("cookie-session");
const createSocketObject = require("./models/classes/socket-io");

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
const socket = new Server(server, socketOptions);
const socketInstance = createSocketObject(socket);



/**********************
 * 
 *  Middlewares
 * 
***********************/
const auth = require("./middlewares/auth");
const runningScripts = require("./middlewares/runnning-scripts");
const apiRouteObjectFinder = require("./middlewares/route-object-finder");
const autoSmrRewrite = require("./middlewares/auto-smr-rewrite");


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
// TODO: create a socket controller to add all native socket event listeners and emitters;
//


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


app.use(autoSmrRewrite);


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
app.use(apiRouter());


// /* Views Routes... */
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});


/**********************
 * 
 *  Sockets Instances
 * 
 ***********************/
socketInstance.setEvents();