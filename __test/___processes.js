/*

    Objective : to create a fully-automated website scraper.

        Backend;
        required features :
            DONE;
            - USER CRUD
                - manage users

            DONE;
            - SCRAPER CRUD
                - create a reusable scraper based on the following:
                    scraper has same site resource;
                    scraper has same product brand;
                    scraper can be used on different product set as long as site resource and product brand are the same;

            DONE;
            - Data CRUD;
                done;
                we can use api to create, read, update and delete data based on its apiRoute;
            
            DONE;
            - scraperExecutioner function;
            
      
        Frontend;
            simple UI/UX;



        // NOTE new problems... displaying of images after security check....
            - something to be thought of

*/

// THinking of creating a product set everytime a scraper runs... 
/**
    set data


    setName : 
    scraperData : {
        siteResource : { _id : siteName : siteUrl }
        productBrand,
        apiRoute,
        
    }
    scraperScriptObject : {
        dataDirPath:
    }

    // this will be optional;

    setData : {
        siteName,
        siteUrl
        productBrand,
        apiRoute,
        dataDirPath,
        csvFileNameScrapedData,
        csvFileNameUnScrapedData,
        startingUrl,
    }

    using of cancel scraper button to cancel a process;

    storing current running script in GLOBAL variables;

    we create a random id for the global varible of the running script;

    we store the script;

    so we get the handle;



 */


/*************************************************************
 * 
 *  AWS
 * 
 *  Deploying CC Scraper app in AWS Elastic Beanstalk
 * 
 *  1. Create an EB environment with nothing in it...
 *  2. Manually add the environment variables through the aws console...
 *      - go to Elastic Beanstalk from the main menu... 
 *      - select the environment...
 *      - then configuration...
 *      - edit on the first row - software.
 *      - on the bottom add the environment variables.
 *      - on save the environment will restart...
 *  3. Create a .pem keypair for ssh - we're gonna use SSH to install chrome manually into the environment.
 *      the core module needed to run this scraper app is "Puppeteer" created by google devs; this module downloads a chromium browser upon installation, but 
 *      on an AWS environment, it doesn't work. FOr this to work we need to manually install Chrome through ssh.
 *      - go to EC2 link from the main menu.
 *      - Select key pairs from the sidebar.
 *      - create a new key or select an existing key pair for the environment...
 *          - when creating... please select:
 *              .rsa for key type,
 *              .pem for file format.
 *              we'll be using that keypair to ssh into the aws environment.
 *  4. Go to Elastic Beanstalk menu from the main navigation.
 *      - select the environment, and from the sidebar go to configuration again.
 *      - from the table find security, and from there, under virtual machine permissions, select the key you have created.
 *      - and you may just leave everything in their defaults, then hit apply.
 *      - the environment will restart again for another time.
 *      
 *  5. Create a Codepipeline... link the github repo to the codepipeline... then to the created environment...
 *      - make sure the code has the .npmrc file to work...
 *      - skip code build...
 *      - on deploy, it will fail... we need to change the code artifact, from build to source artifact and save once it has failed... 
 *      - we need to edit code pipline steps... on the deploy part change it from from build to source artifact then save...
 *      - we then need to click on save buttons... then click on release change so that the environment would start and apply the changes we made...
 *      
 *  6. Once the environment is up and running again... check if the application is running as how we expect it to be... especially puppeteer scraping...
 *  7. DONE.
 * 
 * 
 *************************************************************/


/*


    Create a new route dedicated for socket.io;

    Create a new Controller for socket.io;

    restructuring the standard-scraper to have the socket.io module...
    or taking the showEvents function outside and emitting every events done inside the scraper-script;

    
    *************************************************************************************************************
    *************************************************************************************************************

    Issues : 

    BACKEND:
        MANAGE SCRAPER;
            create-scraper;

            STORING the MODEL OBJECT and ROUTE OBJECT into the scrapersDb;
                - change the model of scrapersDb; 
                    -- DONE
                - change the controller of scrapersDb; 
                    -- DONE
                    - add modelObject and routeObject to be stored.
                    -- DONE
                - create a controller in scraper that allows for re-writing of the model and route object;
                    -- DONE
                    - this will ensure that the scraper we saved gets ported to the new environment;
                    -- DONE

            update-scraper
                updating scraper data;
                -- DONE
                - deleting scraper without deleting the data...
                    -- DONE
                - updating scraper needs to have sitename product brand
                    -- DONE

            
                

        Stored / Scraped Data;
            Delete Data by set;
            -- DONE
            Possibilities of editing and deleting single data -- STRIKE

        // BIG ONE

        Separate the data stored from the application; 
            -- STRIKE
            - the data gets lost whenever we pipe out the updated version from github to AWS;
            -- STRIKE 


    VIEWS:
        MANAGE SCRAPER;
            create-scraper
                Scraper Table;
                    create a filter to show scrapers via site resource, product brand

             update-scraper
                saving on update scraper button doesn't show indicators of saving...
                updating scraper data;
                    usage,
                    csvExcludedFiles,
                    meta-data about the scraper,

            run-script
                have an option to auto save the scraped data by default;
                -- STRIKE
                while running, resolve socket io, showing up if same page is opened...
                -- DONE
                    - maybe limit the running instances into single instance per user...
                    -- STRIKE

    



    RESCRAPING

        - mark data with either unscraped or scraped
        - find out which property to use as marker of scraped and unscraped.
        - initial scraping mark the unscraped data as unscraped...
        - rescraping... 
            - make an array of properties to use as marker of unscraped data...
            -


    Create a new type of evaluator...
        -  evaluator has to pass a metadata, that can be worked on maybe inside/outside of the next evaluator...   
        
        
    STORING OF IMAGES
        - try to use an S3 bucket for storing images...
        - if possible, utilize S3's capability to make subfolders in the bucket, also make zipped copies of the folder;
        - if not, we have to download it to our repository, and then make the zipped file from there... though that process is kind of request heavy. - has to be thought of...


    



    

    Hello Sir Dan,

    I already read the documentation and learned usage of cheerio together with axios to scrape webpages. I also reviewed the codebase and files that need to be refactored in order to have axios and cheerio as our main tool for scraping web data instead of puppeteer. As of now, we have just transferred the ownership of the repository for the frontend UI of the scraper app (cc-scraper-app), and the full-stack repo of (cc-scraper-clean-slate) to Crystal Commerce's github account. As I've seen on the conversations on slack, everyone is busy trying to migrate most of the applications of CC to Digital Ocean, and I kind of don't want to bother them in asking anything about this stand-alone scraper app. I guess my question is, do I have to wait for the people from Digital Ocean to review the codebase of scraper app first, before I start coding? Or can I start now?

    These are the parts of the app that will need to be refactored in order for us to have axios and cheerio as our main tool:

        (this has to be done on the cc-scraper-clean-slate repo that I recently transferred to CC's github account)
        - backend:
            /core/standard-scraper.js 
                - main class that is responsible for the scraping, downloading of images, creating csv file, and creating a zipped folder with the images and the csv file.

            /models/classes/script.js
                - responsible for writing the script that gets written dynamically once we save a script upon creating a scraper.


        
        (this has to be done on the cc-scraper-react repo that I also recently transferred to CC's github account)
        - frontend:
            
            Creating A Scraper

                /src/views/ManageScrapers/CreateScraper/CreateScraper.js
                    - some of the required input fields to create a scraper have to be changed as these were built around puppeteer as its core module, now it will be on axios and cheerio.

                /src/templates/CreateEvaluators/CreateEvaluators.js
                    - this one is reponsible for creating a script loaded to the puppeteer method... now it will either be changed, as just a callback, or maybe deleted depending on the code from the backend is written.


            Displaying, Editing, and Deleting of the Scraper Details.
                /src/views/ManageScrapers/ScraperDetails/ScraperDetails.js
                    - This is reponsible for displaying and initilizing the edit part of the scraper... just like on the create file, some of the user inputs required to edit a scraper, will have to be changed.

                /src/templates/EditEvaluators/EditEvaluators.js
                    - this part is responsible for editing the any of the scripts that we have. again some of the input fiels required to edit a scraper will have to be changed.


    Since we are doing these changes, I just want to inform you ahead of time that part of the changes will also take place on how we would create future scripts. Unlike puppeteer where it has the capability of scraping any webpage, which could either be server-side rendered (meaning the page and its contents are served synchronously) or client-side rendered (meaning the page is loaded asynchronously, parts or sometimes the entirety of the page's contents are loaded by JS) -- BTW puppeteer also gives the ability to programmatically wait for the entirety of the page's contents to load first before we start scraping; with AXIOS as our maing tool for fetching the contents, it could only get the pages that are loaded SYNCHRONOUSLY (server-side rendered pages).

    And the process is to get the html text through axios... and use cheerio to parse the text into HTML tags, and use cheerios built-in jQuery-like methods to query the HTML elements to get the data we want to scrape. 
    
    For Pages that have the data loaded synchronously (server-side rendered pages), we won't run into any problems, scraping data from them. However, the problem is that some websites, do not have their contents get served synchronously with the initial HTML page. They would just serve an almost empty HTML with JS, and have the JS populate the contents of that page. A very good example of that is TCG Player (www.tcgplayer.com). 
    
    In the past days that I was trying out cheerio and axios... I ran into this problem of having just the html without contents but it does have a lot of script tags in it, which meant the contents of that page are being loaded asynchronously by JS attached onto that webpage. And as for axios, being used for fetching the data or HTML in text, it doesn't have the capability to wait for everything to be loaded first before it returns with the string of HTML, it will only return that initial and bare HTML page with its JS, and even if we use Cheerio to parse the string of text into HTML, it will have nothing to scrape from.

    However, even if that's the case, SCRAPING DATA WILL STILL BE POSSIBLE on ASYNCHROUSLY LOADED PAGES. This only means that pages like these, are using JS to fetch data from an API asynchronously. The challenge will lie in finding that script especially when there are a lot of scripts attached on that webpage, and reading through the scripts to find the correct API url/endpoint they used, and the parameters needed to get the data, hundreds of lines of code in a single file (sometimes even thousands). Take a look at this image below, as this is just one of the scripts attached on a webpage from tcg player, and it had 12k lines of codes:

    (image of the script from tcg player)
    
    Luckily for me, I now have the API of TCGPlayer for all the products that they have in their website... I now learned how I can retrieve all of them, and even the URL of the images for a product... In the API I also found how many images a product will have, and I can use their ids to retrieve them. But this is the case for TCG player, as for the other websites, I haven't tried yet, 'cause I know I will have to make the changes to the codebase of the app first before doing this. I'm just telling you ahead of time, that creating scripts next time might take more or maybe less time as compared to how it was, when we're using the scraper with puppeteer.




*/      

