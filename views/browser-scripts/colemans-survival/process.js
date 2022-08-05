// scraping process...

/*



    Get all the links for categories and their subcategories -- DONE

    their pages don't have pagination - pagination works through scrolling

        - you get first 20 products, then the next 20 after scrolling to the bottom;
        - we need to wait for the 20 products to load first before scrolling again;
        - there is an indication on top of the page as to how many products we need to wait for to load, before scrolling, and declaring that we have already loaded all products, and we must get all their product links, and the category and subcategory they belong to.

        HTML ELEMENTS' SELECTOR:
            Array.from(document.querySelectorAll(".products.list.items.product-items .item.product.product-item"))

        SAMPLE PRODUCTS LIST URL : 
            "https://colemans.com/product-category/cold-weather-gear/"

        OPTIONAL :
            we can get add the following properties on the products, to make the scraping process faster:
            
                - imageUris,
                - productName,
                - price,

    Once we have a list of all the products links' we can get their full details through those links via puppeteer or another browser based scraper.
        NOTE: this will give us full details of the product's properties
            Products Properties:
            - productName,
            - imageUris,
            - price,
            - description

        SAMPLE URL:
            "https://colemans.com/britelyt-rapid-multi-fuel-lantern"

    Saving the data;
        - we can either save them into a database,
        - we can also save them into an encoded text file

    Downloading of images and printing them into CSV files.
        Will completely depend on how we saved the data.

*/
