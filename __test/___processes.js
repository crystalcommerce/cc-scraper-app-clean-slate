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


    Create a new type of evaluator...
        -  evaluator has to pass a metadata, that can be worked on maybe inside/outside of the next evaluator...   
        
        
    STORING OF IMAGES
        - try to use an S3 bucket for storing images...
        - if possible, utilize S3's capability to make subfolders in the bucket, also make zipped copies of the folder;
        - if not, we have to download it to our repository, and then make the zipped file from there... though that process is kind of request heavy. - has to be thought of...


    

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


    // 03 / 03 / 2021

    controllers
        - data-handlers
            user
            collection
        - response-handlers
        
    routes
        - user
        - collection

    / 03 / 06 / 2021

        fileZipper -- DONE
        fileDownloader = DONE;
        userAuth - middle ware... add req.user; -- DONE

    TODO: *******************************
        we may not need to save the images...
        we can just pipe out the images... if they're downloadable anyway, they will be displayed with the content...
        we only need to download the file if, and only if the user intends to download the zipped folder together with the images.
        we can then allow users to edit the image saved on the database.

    --- DONE
    change the way scripts are written -- DONE;
    we put the StandardScraper module on the execute file... -- DONE;

    -- DONE
        {
            key : productCategory
            value : Trading Card Game
        }
        {
            key : siteName,
            value : SiteUrl,
        }
        {
            key : productBrand,
            value : Pokemon
        },
        {
            key : productSet,
            value : "Shining Enhirtance"
        },
        {
            key : apiRoute
            value : /api/tcg-player-
        }
    -- DONE


    TODO: 

    remove site-resource model, routes, controller -- DONE
    replace with product set meta --DONE
    file -- future project...;
    autoSmrRewrite




    

*/      

