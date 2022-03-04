const path = require("path");
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const { Server } = require("socket.io");
const port = process.env.PORT || 8080;
const dotenv = require("dotenv");
const session = require("express-session");
const { EventEmitter } = require("events");
const sockectController = require("./controllers/socket");

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
    const io = new Server(server, socketOptions);
    // we're adding custom object props here...
    io.customEvent = new EventEmitter();
    io.registeredUsers = {};



/**********************
 * 
 *  Middlewares
 * 
***********************/

const { runningScripts, apiRouteObjectFinder, autoSmrRewrite, socketMiddleware } = require("./middlewares");


/**********************
 * 
 *  Api Routes
 * 
***********************/

const allRoutes = require("./routes");



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
    app.use(session({
        secret: "cc-scraper-v-2",
        saveUninitialized:true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
        resave: false 
    }));
    app.use(express.static(path.join(__dirname, 'views')));

    // allows access of the socket (io) instance to be used inside the controller files...
    app.use(socketMiddleware(io));

    // checking if scripts have been written;
    // app.use(autoSmrRewrite);

    /* Creating a global variable */
    app.use(runningScripts);

    // this dynamically finds the route object to be used from routes/dynamic/ 
    app.use("/api", apiRouteObjectFinder); 



/**********************
 * 
 *  Routes Instances
 * 
 ***********************/


    app.use(allRoutes());


    // /* Views Routes... */
    app.get("*", (req, res) => res.sendFile(path.join(__dirname, "views", "index.html")));


/**********************
 * 
 *  Sockets Events 
 * 
 ***********************/
    sockectController(io);