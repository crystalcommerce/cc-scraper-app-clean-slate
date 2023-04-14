async function awaitGlobal({condition}) {
    await new Promise(resolve => {
        let interval = setInterval(() => {
                if(condition())   {
                    clearInterval(interval);
                    resolve();
                }
            }, 10);
    });
}

(async function() {

    await awaitGlobal({condition : () => window.hasOwnProperty("___cc__CcScraperGlobalObject")});


    console.log("Hello there");
    await window.___cc__CcScraperGlobalObject.api.awaitSelectors([".hero-template__new-arrivals.full-image", ".header-menu-nav__menu-item a"], (data) => {
        console.log(data);
    });


}())