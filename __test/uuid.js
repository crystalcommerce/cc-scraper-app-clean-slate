uuid = require("mnm-uuid");

console.log(uuid());
console.log(uuid());
console.log(uuid());
console.log(uuid());
console.log(uuid());


window.___cc__CcScraperGlobalObject.productsOfflineDb.getAllFilteredData({unscraped : true}).then(arr => {

    let filtered = arr.filter(item => item["ABV"] !== null).forEach(item => {
        item.unscraped = false;
    });
    
    window.___cc__CcScraperGlobalObject.productsOfflineDb.updateMany(filtered).then(results => {
        console.log("\n");
        console.log("\n");
        console.log("\n");
        console.log("\n");
        results.forEach(item => console.log(item));
        console.log("\n");
        console.log("\n");
        console.log("\n");
        console.log("\n");
    });


});