// import getCcUtilities from "http://localhost:8080/browser-scripts/utilities";
console.log("We are firing it up");

async function ccLoadScripts(...globals)  {

    let promises = globals.map(item => {
        
        return async function() {
            await new Promise(resolve => {
                let interval = setInterval(function(){
        
                    if(typeof window[item] !== "undefined")   {
                        clearInterval(interval);
                        resolve();
                    }
        
                }, 100);
            });
        }
        
    })
    
    await Promise.all(promises.map(item => item()));

}

async function ccScraperInitialize() {

    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTNlMzM1NTE3YThhNTUzYzRkZGM4ZWQiLCJwZXJtaXNzaW9uTGV2ZWwiOjQsImlhdCI6MTY1MTE2MzUyOSwiZXhwIjoxNjUxNzY4MzI5fQ.qOnz2JWDVA7q8v0vG0AxWaZCpu8V0hw7vGAp6n2Tmqk",
        { 
            apiRequest,
            postDataArray,
            scrollToBottom,
            isInArray,
            waitForSelector,
            toUrl,
            toCapitalize,
            toCapitalizeAll,
            objectToQueryString,
            queryStringToObject, 
        } = getCcUtilities(authToken);

    console.log(toUrl("Michael Norward Miranda"));

}



(async function() {

    await ccLoadScripts("getCcUtilities", "CcCategorizedScraping");
    
    await ccScraperInitialize();


    alert("Hello there Michael Norward.")

}());