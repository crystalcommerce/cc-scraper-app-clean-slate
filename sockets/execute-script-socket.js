const executeScriptSocketController = require("../controllers/execute-script-socket");

module.exports = function(io)   {


    const { executeScraper } = executeScriptSocketController(io);

    io.on("connection", async function(socket)    {

        console.log("connected");

        socket.on("run-script", executeScraper);

    });
    
}