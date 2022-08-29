// document.body.innerHTML = "<h1>Hello there, Michael Norward! We are taking over this website... just on your end</h1>";
// document.body.style.display = "flex";
// document.body.style.justifyContent = "center";
// document.body.style.alignItems = "center";
// document.body.style.height = "100vh";


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

(async function(){

    await awaitGlobal({condition : () => window.hasOwnProperty("___cc__CcScraperGlobalObject")});

    console.log(window.___cc__CcScraperGlobalObject);


    // let promises = Array.from(document.querySelectorAll("a")).map(item => {

    //     return async function() {
    //         await new Promise(resolve => {
    //             let interval = setInterval(() => {
    //                 if(item.innerText !== "")   {
    //                     item.innerText = "Michael Norward is too great";
    //                     clearInterval(interval);
    //                 }
    //             }, 100);
    //         });
    //     }

        
    // });


    // await Promise.all(promises.map(item => item()));
    // document.body.innerHTML = "<h1>Hello there, Michael Norward! We are taking over this website... just on your end</h1>";
    // document.body.style.display = "flex";
    // document.body.style.justifyContent = "center";
    // document.body.style.alignItems = "center";
    // document.body.style.height = "100vh";

}());

