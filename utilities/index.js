function nodeRestart()  {
    setTimeout(function () {
        process.exit();
    }, 777);
}

function getRequestResult(result, status = 200, contentType = "application/json") {
    let obj = {
        contentType,
        status : status,
        data : contentType === "application/json" ? JSON.stringify(result, null, 4) : result,
    };
    return obj;
}

module.exports = { nodeRestart, getRequestResult };