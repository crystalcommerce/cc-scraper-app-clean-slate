const executeScriptSocketController = require("../controllers/execute-script-socket");

module.exports = function(socket)   {


    const { executeScraper } = executeScriptSocketController(socket);

    io.on("connection", async function(socket)    {

        console.log("connected");

        socket.on("run-script", executeScraper);

    });
    
}