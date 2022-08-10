(async function()   {
    let ccScraperUiContainer = document.createElement("div");
    ccScraperUiContainer.id = "cc-scraper-ui-container";

    document.body.append(ccScraperUiContainer);




    await new Promise(resolve => {
        let containerElement = document.querySelector("#cc-scraper-ui-container"),
            interval = setInterval(function(){
                if(containerElement)	{
                    clearInterval(interval);
                    resolve();
                }
            }, 100);
    });


    // alert("UI has been created")
}())