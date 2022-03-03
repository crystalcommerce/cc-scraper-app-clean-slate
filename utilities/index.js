function nodeRestart()  {
    setTimeout(function () {
        // process.on("exit", function () {
        //     global.smrRewritten = false;

        //     require("child_process").spawn(process.argv.shift(), process.argv, {
        //         cwd: process.cwd(),
        //         detached : true,
        //         stdio: "inherit"
        //     });
        // });

        process.exit();
    }, 777);
}

function getHttpResult(result, message = "", contentType = "application/json") {
    let obj = {
        contentType,
        status : result ? 200 : 400,
        data : result,
        message,
    };
    return obj;
}

module.exports = { nodeRestart, getHttpResult };