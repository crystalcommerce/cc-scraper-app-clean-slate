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

module.exports = { nodeRestart };