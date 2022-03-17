global["sampleFunction"] = function()   {
    console.log("This comes from sampleFunction code");
}

sampleFunction();

console.log(global.sampleFunction === sampleFunction);

