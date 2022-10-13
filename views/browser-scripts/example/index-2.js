document.body.innerHTML = "<h1>Hello there, Michael Norward! We are taking over this website... just on your end</h1>";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";


let evaluatorObject = {
    // this is an array of evaluators that will be used to scrape categories / sets of the products. These categorized-sets will be stored to the offline DB or the indexed DB of the browser for a website.
    categorizedSets : [ 
        {
            callback : () => {
                // this is the function that will be called to scraped get the categories.
                // this will return an array of objects that represent the categorized sets
                return [
                    {
                        setId : "unique id for the set",
                        url : "url to be used to get to the list of products showing the set",
                        setData : {
                            // this can have any properties, and these properties will also be added to each of the products once they're saved on the offline db
                            category,
                            subcategory,
                        }
                    }
                ]
            },
            dataSource : "this can either be 'api', 'on-page', 'spa'. This means that the data will be coming from either a single page that displays list of products, from API or from a SPA(Single Page Applications), kind of like the on-page, but this doesn't need redirection as the script has to know the buttons or links that needs to be clicked in order to get to the next url... the page will be different as it doesn't require reloading of the actual page.",
            waitForSelectors : "An array of element selectors, id selectors, or class selectors, that the script will need to wait to load first before executing the callback function above.",
            args : "array of arguments that can be used inside the callback.",
        }
        // this is an array which means we can add more evaluators for the categorized sets depending on what we need. Most of the time, we only need one per type of evaluator.
    ],
    set : [
        {
            callback : () => {
                /*
                    productObjects = "an array of product objects that represent each of the products that we have scraped."
                    sample product object:
                    {
                        productUri : "https://somewebsite.com/products/uniqueId/as123123sdfsdfg",
                        imageUris : [],
                        productName,
                    }
                    These new properties will be saved to the offline db and once we have finished scraping the products from a list of products, whether from "on-page", "api", or "spa", the evaluator for single below will be used next to get the addtional data from the single products page. 


                    newUrl - is the next url that displays the next set of products for a categorized set, let's say the products are displayed on a page with pagination, or the if the api only returns a  limited number of products.
                    if the first url for a list of products is like this:

                        https://somewebsite.com/products/;
                    
                    the new url would probably have page=2 or page=3 up to the last pages.
                        https://somewebsite.com/products?page=2;

                    if no more next pages, the newUrl would be null, which would mean we have gone through all the pages for that set.
                */

                return {
                    productObjects,
                    newUrl,
                }
            },
            dataSource : "Could be 'on-page', 'api', or 'spa'",
            waitForSelectors : "An array of element selectors, id selectors, or class selectors, that the script will need to wait to load first before executing the callback function above.",
            args : "array of arguments that can be used inside the callback.",
        }
    ],
    single : [
        {
            callback : () => {
                /*
                    So the goal of this callback is to scrape the additional information of the product from its single product page, or from an API request for a single product data.

                    This callback returns a single object with the properties that will be added to the product that we have saved on the offline database or indexedDb of the browser.

                    This is a sample object that will be returned by this callback

                    {
                        type : "some product type",
                        level : "some product level",
                        features : "some product features",
                        usage : "some product usage",
                        author : "some author".
                    }
                */
                return {
                    // additional product object's properties, 
                }
            },
            dataSource : "'on-page', 'api', or 'spa'",
            args : "array of arguments that can be used inside the callback.",
            waitForSelectors : "An array of element selectors, id selectors, or class selectors, that the script will need to wait to load first before executing the callback function above.",
        }
    ]
}