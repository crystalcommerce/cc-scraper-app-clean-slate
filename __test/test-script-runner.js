const path = require("path");

const file = path.join(__dirname, "..", "scripts", "tcg", "tcg-player", "TCG-9b24aad435a156-1c-flesh-and-blood.js");

const scriptObject = require(file);

console.log(Object.keys(require.cache).filter(key => {
    if(!key.includes("node_modules"))   {
        console.log(require.cache[key]);
    }
}));

delete require.cache[file];


console.log(Object.keys(require.cache).filter(key => {
    if(!key.includes("node_modules"))   {
        console.log(require.cache[key]);
    }
}));

console.log(scriptObject);