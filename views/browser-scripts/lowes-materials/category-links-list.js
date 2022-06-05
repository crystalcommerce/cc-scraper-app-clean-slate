/*



    * the goal is to use all products-list api... 
    * check if they have subcategories... go to each of the url and check if they have subcategories...
    * each time it gets to a subcategory, we get the subcategory name associated with that link, as a category tag.
    * if they don't add the url to the url list...
    * once we reach the last category, we take the link, and add all category tags on to the api link for all the products listed there...


    check how to use refinement in their api

    sample subcategory;
    {
        "name": "Tool Bags",
        "nValue": "4294770557",
        "queryString": "Departments_Depth:3/Tools/Tool Storage & Work Benches/Tool Bags",
        "productCount": 708,
        "leaf": true,
        "imageUrl": {
            "sm": "/mobile/app/content/category_images/ToolBagssm.png",
            "md": "/mobile/app/content/category_images/ToolBagsmd.png",
            "lg": "/mobile/app/content/category_images/ToolBagslg.png"
        },
        "categoryId": "105944",
        "url": "/pl/Tool-bags-Tool-storage-work-benches-Tools/4294770557"
    }


*/

async function waitForSelector(selector)  {
    await new Promise(resolve => {
        if(selector)    {
            resolve();
        }
        let interval = setInterval(function(){
            if(selector)    {
                clearInterval(interval);
                resolve();
            }
        }, 500);

    });
    return selector;
}

async function slowDown(timeDelay = false)  {
    let delay = timeDelay ? timeDelay : 7747;
    await new Promise(resolve => setTimeout(resolve, delay));
}

function toUrl(str) {
    return Array.from(str.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, " ").split(" ")).reduce((a, b) => {
        if(b.trim() !== "") {
            a.push(b);
        }
        return a;
    }, []).join("-");
}

async function downloadEncodedText(productObjects, productProps)   {
    let element = document.createElement("a"),
        fileName = `${toUrl("encoded" + " " + Object.keys(productProps).reduce((a, b) => {
            if(productProps[b] && productProps[b].trim().length)   {
                a.push(productProps[b].trim());
            }
            return a;
        }, []).join(" ") + ` __date-${Date.now()}` + ` __total-${productObjects.length}`)}.txt`;

    element.style.display = "none";
    element.setAttribute("href", `data:text/plain;charset=utf-8, ${btoa(encodeURIComponent(JSON.stringify(productObjects)))}`);
    element.setAttribute("target", "_blank");
    element.setAttribute("download", fileName);
    element.setAttribute("class", "__cc_download-encoded-text");

    document.body.appendChild(element);
    
    await waitForSelector(document.querySelector(".__cc_download-encoded-text"));
    element.click();
    await slowDown(3434);
}

async function moderator(arr, callback, bulkCount = 5) {

    let firstIndex = 0,
        lastIndex = bulkCount;
    
    async function execute(...args)   {

        let i = 0;

        while(i < arr.length)   {

            let slicedArr = arr.slice(firstIndex, lastIndex);
            
            
            await callback(slicedArr, ...args);

            if(i + bulkCount < arr.length)  {
                i += bulkCount;
                firstIndex = i;
                lastIndex = i + bulkCount;
            } else {
                i += arr.length - i;
                firstIndex = i;
                lastIndex = arr.length;
            }

            console.log(firstIndex, lastIndex);

        }

    }

    await execute();
    
}

async function apiRequest(url, options = {})   {
    let headers = {
            "Content-type" : "application/json",
        },
        res = await fetch(url, {...options, headers}),
        data = await res.json();

    return data;
}

async function getSubCategoryOfLink(getSubCategoriesFn, productLink, subCategoryLinksArr, categoryTags = []) {
    let {categories, itemCount, pagination, name} = await apiRequest(productLink),
        [category] = categories,
        subCategories = category ? category.subCategories : [];

    if(subCategories.length)    {

        let plLinks = subCategories.map(item => {
            let { url, name } = item,
                thisCategoryTags = [...categoryTags];

            if(name)    {
                thisCategoryTags.push(name);
            }
            
            return {
                url : url + "/products",
                categoryTags : thisCategoryTags,
            }
        });


        await getSubCategoriesFn(plLinks, subCategoryLinksArr);
    } else  {
        subCategoryLinksArr.push({
            url : productLink,
            categoryTags,
            itemCount,
            pagination,
        })
    }
}




async function getSubCategories(plLinks, subCategoryLinksArr)  {


    await moderator(plLinks, async(slicedArr) => {

        let promises = slicedArr.map(item => {

            return async function() {
                let {url, categoryTags} = item;

                await getSubCategoryOfLink(getSubCategories, url, subCategoryLinksArr, categoryTags)
            }
            
        })

        await Promise.all(promises.map(item => item()));
        console.clear();
        console.table(subCategoryLinksArr);

    }, 1);

    await new Promise(resolve => setTimeout(resolve, 7747));
    console.clear();

}


(async function(){

    let subCategoryLinksArr = [],
        plLinks = [
            {
                "categoryTags" : [
                    "Supply Lines"
                ],
                "url" : "https://www.lowes.com/pl/Supply-lines-Plumbing/1149069550"
            },
            {
                "categoryTags": [
                    "Building Supplies"
                ],
                "url": "https://www.lowes.com/pl/Building-supplies/4294934297"
            },
            {
                "categoryTags": [
                    "Electrical"
                ],
                "url": "https://www.lowes.com/pl/Electrical/4294722561"
            },
            {
                "categoryTags": [
                    "Hardware"
                ],
                "url": "https://www.lowes.com/pl/Hardware/4294934474"
            },
            {
                "categoryTags": [
                    "Moulding & Millwork"
                ],
                "url": "https://www.lowes.com/pl/Moulding-millwork/4294518252"
            },
            {
                "categoryTags": [
                    "Windows & Doors"
                ],
                "url": "https://www.lowes.com/pl/Windows-doors/4294937086"
            },
            {
                "categoryTags": [
                    "Bathroom"
                ],
                "url" : "https://www.lowes.com/pl/Bathroom/4294737305"
            },
        
            {
                "categoryTags": [
                    "Plumbing",
                    "Plumbing Parts & Repair",
                    "Bathtub Drains"
                ],
                "url": "https://www.lowes.com/pl/Bathtub-drains-Bathtub-shower-parts-Plumbing-parts-repair-Plumbing/4294822049"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Plumbing Parts & Repair",
                    "Toilet Repair Kits"
                ],
                "url": "https://www.lowes.com/pl/Toilet-repair-kits-Toilet-parts-repair-Plumbing-parts-repair-Plumbing/4294753292"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Plumbing Parts & Repair",
                    "Toilet Wax Rings & Floor Seals"
                ],
                "url": "https://www.lowes.com/pl/Toilet-wax-rings-floor-seals-Toilet-parts-repair-Plumbing-parts-repair-Plumbing/131879009"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Plumbing Parts & Repair",
                    "Faucet Stems & Cartridges"
                ],
                "url": "https://www.lowes.com/pl/Faucet-stems-cartridges-Faucet-parts-repair-Plumbing-parts-repair-Plumbing/3035693949"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Plumbing Parts & Repair",
                    "Toilet Handles & Levers"
                ],
                "url": "https://www.lowes.com/pl/Toilet-handles-Toilet-parts-repair-Plumbing-parts-repair-Plumbing/3104249826"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Plumbing Parts & Repair",
                    "Sink Drains & Stoppers"
                ],
                "url": "https://www.lowes.com/pl/Sink-drains-stoppers-Sink-parts-repair-Plumbing-parts-repair-Plumbing/2695925525"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Heaters",
                    "Boilers"
                ],
                "url": "https://www.lowes.com/pl/Boilers-Water-heaters-Plumbing/1794897186"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Heaters",
                    "Electric Water Heaters"
                ],
                "url": "https://www.lowes.com/pl/Electric-water-heaters-Water-heaters-Plumbing/4294859091"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Heaters",
                    "Gas Water Heaters"
                ],
                "url": "https://www.lowes.com/pl/Gas-water-heaters-Water-heaters-Plumbing/4294859099"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Heaters",
                    "Tankless Electric Water Heaters"
                ],
                "url": "https://www.lowes.com/pl/Tankless-electric-water-heaters-Water-heaters-Plumbing/4294859097"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Heaters",
                    "Tankless Gas Water Heaters"
                ],
                "url": "https://www.lowes.com/pl/Tankless-gas-water-heaters-Water-heaters-Plumbing/4294859098"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Heaters",
                    "Water Heater Accessories"
                ],
                "url": "https://www.lowes.com/pl/Water-heater-accessories-Water-heaters-Plumbing/4294400566"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Heaters",
                    "Water Heater Pans"
                ],
                "url": "https://www.lowes.com/pl/Water-heater-pans-Water-heaters-Plumbing/665276096"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Heaters",
                    "Water Heater Parts"
                ],
                "url": "https://www.lowes.com/pl/Water-heater-parts-Water-heaters-Plumbing/4294400567"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "ABS DWV Pipe & Fittings"
                ],
                "url": "https://www.lowes.com/pl/ABS-dwv-pipe-fittings-Pipe-fittings-Plumbing/3083447975"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "Black Pipe & Fittings"
                ],
                "url": "https://www.lowes.com/pl/Black-pipe-fittings-Pipe-fittings-Plumbing/3914584370"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "Brass Fittings"
                ],
                "url": "https://www.lowes.com/pl/Brass-fittings-Pipe-fittings-Plumbing/4294822030"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "CPVC Pipe & Fittings"
                ],
                "url": "https://www.lowes.com/pl/CPVC-pipe-fittings-Pipe-fittings-Plumbing/4294765344"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "CSST Pipe, Fittings & Accessories"
                ],
                "url": "https://www.lowes.com/pl/CSST-pipe-fittings-accessories-Pipe-fittings-Plumbing/4294566041"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "Cast Iron Pipe & Fittings"
                ],
                "url": "https://www.lowes.com/pl/Cast-iron-pipe-fittings-Pipe-fittings-Plumbing/4294822002"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "Copper Pipe & Fittings"
                ],
                "url": "https://www.lowes.com/pl/Copper-pipe-fittings-Pipe-fittings-Plumbing/4294822003"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "Galvanized Pipe & Fittings"
                ],
                "url": "https://www.lowes.com/pl/Galvanized-pipe-fittings-Pipe-fittings-Plumbing/4294822020"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "PEX Pipe, Fittings & Specialty Tools"
                ],
                "url": "https://www.lowes.com/pl/PEX-pipe-fittings-specialty-tools-Pipe-fittings-Plumbing/2726415035"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "PVC DWV Pipe & Fittings"
                ],
                "url": "https://www.lowes.com/pl/PVC-dwv-pipe-fittings-Pipe-fittings-Plumbing/1534626900"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "PVC Pipe & Fittings"
                ],
                "url": "https://www.lowes.com/pl/PVC-pipe-fittings-Pipe-fittings-Plumbing/2248019169"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "Pipe Insulation"
                ],
                "url": "https://www.lowes.com/pl/Pipe-insulation-Pipe-fittings-Plumbing/4294765360"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "Pipe Support & Clamps"
                ],
                "url": "https://www.lowes.com/pl/Pipe-support-clamps-Pipe-fittings-Plumbing/4294822034"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "Polyethylene Pipe, Fittings & Accessories"
                ],
                "url": "https://www.lowes.com/pl/Polyethylene-pipe-fittings-accessories-Pipe-fittings-Plumbing/4294417371"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "Push to Connect Fittings"
                ],
                "url": "https://www.lowes.com/pl/Push-to-connect-fittings-Pipe-fittings-Plumbing/4294822035"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "Sewage Pipe & Fittings"
                ],
                "url": "https://www.lowes.com/pl/Sewage-pipe-fittings-Pipe-fittings-Plumbing/342154210"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "Structural Pipe & Fittings"
                ],
                "url": "https://www.lowes.com/pl/Structural-pipe-fittings-Pipe-fittings-Plumbing/4294506723"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Pipe & Fittings",
                    "Tubing & Hoses"
                ],
                "url": "https://www.lowes.com/pl/Tubing-hoses-Pipe-fittings-Plumbing/4294822036"
            },
            
            {
                "categoryTags": [
                    "Plumbing",
                    "Valves & Valve Repair",
                    "Backflow Preventers & Vacuum Breakers"
                ],
                "url": "https://www.lowes.com/pl/Backflow-preventers-vacuum-breakers-Valves-valve-repair-Plumbing/3734087168"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Valves & Valve Repair",
                    "Ball Valves"
                ],
                "url": "https://www.lowes.com/pl/Ball-valves-Valves-valve-repair-Plumbing/82490080"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Valves & Valve Repair",
                    "Check Valves"
                ],
                "url": "https://www.lowes.com/pl/Check-valves-Valves-valve-repair-Plumbing/2072701023"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Valves & Valve Repair",
                    "Gate Valves"
                ],
                "url": "https://www.lowes.com/pl/Gate-valves-Valves-valve-repair-Plumbing/2514178323"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Valves & Valve Repair",
                    "Hydrants"
                ],
                "url": "https://www.lowes.com/pl/Hydrants-Valves-valve-repair-Plumbing/1433609927"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Valves & Valve Repair",
                    "Manifolds"
                ],
                "url": "https://www.lowes.com/pl/Manifolds-Valves-valve-repair-Plumbing/1820228882"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Valves & Valve Repair",
                    "Pressure Relief Valves & Regulators"
                ],
                "url": "https://www.lowes.com/pl/Pressure-relief-valves-regulators-Valves-valve-repair-Plumbing/3046774934"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Valves & Valve Repair",
                    "Shut-Off Valves"
                ],
                "url": "https://www.lowes.com/pl/Shut-off-valves-Valves-valve-repair-Plumbing/1622200447"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Valves & Valve Repair",
                    "Sillcocks & Hose Bibbs"
                ],
                "url": "https://www.lowes.com/pl/Sillcocks-hose-bibbs-Valves-valve-repair-Plumbing/2056014184"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Valves & Valve Repair",
                    "Tub & Shower Valves"
                ],
                "url": "https://www.lowes.com/pl/Tub-shower-valves-Valves-valve-repair-Plumbing/2566297941"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Valves & Valve Repair",
                    "Valve Repair Parts"
                ],
                "url": "https://www.lowes.com/pl/Valve-repair-parts-Valves-valve-repair-Plumbing/4294700944"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Valves & Valve Repair",
                    "Water Delivery Valves"
                ],
                "url": "https://www.lowes.com/pl/Water-delivery-valves-Valves-valve-repair-Plumbing/4294700943"
            },
        
            
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Filtration & Water Softeners",
                    "Countertop & Faucet Mount Filters"
                ],
                "url": "https://www.lowes.com/pl/Countertop-faucet-mount-filters-Water-filtration-water-softeners-Plumbing/2931060061"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Filtration & Water Softeners",
                    "Replacement Water Filters & Cartridges"
                ],
                "url": "https://www.lowes.com/pl/Replacement-water-filters-cartridges-Water-filtration-water-softeners-Plumbing/1111903541"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Filtration & Water Softeners",
                    "Reverse Osmosis Filtration Systems"
                ],
                "url": "https://www.lowes.com/pl/Reverse-osmosis-filtration-systems-Water-filtration-water-softeners-Plumbing/2499914309"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Filtration & Water Softeners",
                    "Shower Head Filters"
                ],
                "url": "https://www.lowes.com/pl/Shower-head-filters-Water-filtration-water-softeners-Plumbing/3960711559"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Filtration & Water Softeners",
                    "Under Sink Filtration Systems"
                ],
                "url": "https://www.lowes.com/pl/Under-sink-filtration-systems-Water-filtration-water-softeners-Plumbing/131434476"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Filtration & Water Softeners",
                    "Water Softener Salt"
                ],
                "url": "https://www.lowes.com/pl/Water-softener-salt-Water-filtration-water-softeners-Plumbing/4294822069"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Filtration & Water Softeners",
                    "Water Softeners"
                ],
                "url": "https://www.lowes.com/pl/Water-softeners-Water-filtration-water-softeners-Plumbing/4294822072"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Filtration & Water Softeners",
                    "Water Softening & Filtration Accessories"
                ],
                "url": "https://www.lowes.com/pl/Water-softening-filtration-accessories-Water-filtration-water-softeners-Plumbing/4294822073"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Filtration & Water Softeners",
                    "Water Test Kits"
                ],
                "url": "https://www.lowes.com/pl/Water-test-kits-Water-filtration-water-softeners-Plumbing/3306617806"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Filtration & Water Softeners",
                    "Whole House Filtration Systems"
                ],
                "url": "https://www.lowes.com/pl/Whole-house-filtration-systems-Water-filtration-water-softeners-Plumbing/218816294"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Pumps & Tanks",
                    "Pressure Tanks"
                ],
                "url": "https://www.lowes.com/pl/Pressure-tanks-Water-pumps-tanks-Plumbing/4294820777"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Pumps & Tanks",
                    "Water Pump Accessories"
                ],
                "url": "https://www.lowes.com/pl/Water-pump-accessories-Water-pumps-tanks-Plumbing/4294763912"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Water Pumps & Tanks",
                    "Water Pumps"
                ],
                "url": "https://www.lowes.com/pl/Water-pumps-Water-pumps-tanks-Plumbing/4294820778"
            },
            {
                "categoryTags" : [
                    "Plumbing Tools & Cements"
                ],
                "url" : "https://www.lowes.com/pl/Plumbing-tools-cements-Plumbing/4294607602"
            },
            {
                "categoryTags" : [
                    "Utility Sinks & Faucets"
                ],
                "url" : "https://www.lowes.com/pl/Utility-sinks-faucets-Plumbing/4294639563"
            },
            
            {
                "categoryTags": [
                    "Plumbing",
                    "Augers, Plungers & Drain Openers",
                    "Drain Openers"
                ],
                "url": "https://www.lowes.com/pl/Drain-openers-Augers-plungers-drain-openers-Plumbing/4294796687"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Augers, Plungers & Drain Openers",
                    "Hand Augers"
                ],
                "url": "https://www.lowes.com/pl/Hand-augers-Augers-plungers-drain-openers-Plumbing/4294821970"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Augers, Plungers & Drain Openers",
                    "Machine Auger Parts & Accessories"
                ],
                "url": "https://www.lowes.com/pl/Machine-auger-parts-accessories-Augers-plungers-drain-openers-Plumbing/4020178464799"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Augers, Plungers & Drain Openers",
                    "Machine Augers"
                ],
                "url": "https://www.lowes.com/pl/Machine-augers-Augers-plungers-drain-openers-Plumbing/4294821971"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Augers, Plungers & Drain Openers",
                    "Plungers"
                ],
                "url": "https://www.lowes.com/pl/Plungers-Augers-plungers-drain-openers-Plumbing/4294821972"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Outdoor Drainage",
                    "Drainage Pipe & Pipe Fittings"
                ],
                "url": "https://www.lowes.com/pl/Drainage-pipe-pipe-fittings-Outdoor-drainage-Lawn-garden/2010564111572"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Outdoor Drainage",
                    "Outdoor Drainage Accessories"
                ],
                "url": "https://www.lowes.com/pl/Outdoor-drainage-accessories-Outdoor-drainage-Lawn-garden/4294612448"
            },
            
            {
                "categoryTags": [
                    "Plumbing",
                    "Irrigation",
                    "Drip Irrigation"
                ],
                "url": "https://www.lowes.com/pl/Drip-irrigation-Irrigation-Lawn-garden/4294612492"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Irrigation",
                    "Irrigation Repair"
                ],
                "url": "https://www.lowes.com/pl/Irrigation-repair-Irrigation-Lawn-garden/797512282"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Irrigation",
                    "Irrigation Timers & Accessories"
                ],
                "url": "https://www.lowes.com/pl/Irrigation-timers-accessories-Irrigation-Lawn-garden/4294612470"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Irrigation",
                    "Rain Barrels"
                ],
                "url": "https://www.lowes.com/pl/Rain-barrels-Irrigation-Lawn-garden/4294612466"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Irrigation",
                    "Rain Chain Accessories"
                ],
                "url": "https://www.lowes.com/pl/Rain-chain-accessories-Irrigation-Lawn-garden/4294410385"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Irrigation",
                    "Rain Chains"
                ],
                "url": "https://www.lowes.com/pl/Rain-chains-Irrigation-Lawn-garden/4294410386"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Irrigation",
                    "Sprinkler Systems"
                ],
                "url": "https://www.lowes.com/pl/Sprinkler-systems-Irrigation-Lawn-garden/2568833479"
            },
            {
                "categoryTags": [
                    "Plumbing",
                    "Irrigation",
                    "Water Storage"
                ],
                "url": "https://www.lowes.com/pl/Water-storage-Irrigation-Lawn-garden/2010349694860"
            },
        
        
        
        
            {
                "categoryTags": [
                    "Kitchen",
                    "Kitchen & Bar Sinks"
                ],
                "url": "https://www.lowes.com/pl/Kitchen-bar-sinks-Kitchen/4294735693"
            },
            {
                "categoryTags": [
                    "Kitchen",
                    "Kitchen Faucets & Water Dispensers"
                ],
                "url": "https://www.lowes.com/pl/Kitchen-faucets-water-dispensers-Kitchen/3231755289"
            },
            {
                "categoryTags": [
                    "Kitchen",
                    "Backsplash Panels"
                ],
                "url": "https://www.lowes.com/pl/Backsplash-panels-Kitchen/4294395588"
            },
        
            
            {
                "categoryTags": [
                    "Kitchen",
                    "Kitchen Cabinetry",
                    "Kitchen Cabinet Accessories"
                ],
                "url": "https://www.lowes.com/pl/Kitchen-cabinet-accessories-Kitchen-cabinetry-Kitchen/4294735661"
            },
            {
                "categoryTags": [
                    "Kitchen",
                    "Kitchen Cabinetry",
                    "Kitchen Cabinet Doors"
                ],
                "url": "https://www.lowes.com/pl/Kitchen-cabinet-doors-Kitchen-cabinetry-Kitchen/2443790774"
            },
            {
                "categoryTags": [
                    "Kitchen",
                    "Kitchen Cabinetry",
                    "Kitchen Cabinet Samples"
                ],
                "url": "https://www.lowes.com/pl/Kitchen-cabinet-samples-Kitchen-cabinetry-Kitchen/2228736298"
            },
            {
                "categoryTags": [
                    "Kitchen",
                    "Kitchen Cabinetry",
                    "Kitchen Cabinets"
                ],
                "url": "https://www.lowes.com/pl/Kitchen-cabinets-Kitchen-cabinetry-Kitchen/1898196271"
            },
        
            
            {
                "categoryTags": [
                    "Kitchen",
                    "Kitchen Countertops & Accessories",
                    "Kitchen Countertop Accessories"
                ],
                "url": "https://www.lowes.com/pl/Kitchen-countertop-accessories-Kitchen-countertops-accessories-Kitchen/4294696738"
            },
            {
                "categoryTags": [
                    "Kitchen",
                    "Kitchen Countertops & Accessories",
                    "Kitchen Countertop End Caps"
                ],
                "url": "https://www.lowes.com/pl/Kitchen-countertop-end-caps-Kitchen-countertops-accessories-Kitchen/718800786"
            },
            {
                "categoryTags": [
                    "Kitchen",
                    "Kitchen Countertops & Accessories",
                    "Kitchen Countertop Samples"
                ],
                "url": "https://www.lowes.com/pl/Kitchen-countertop-samples-Kitchen-countertops-accessories-Kitchen/4294735654"
            },
            {
                "categoryTags": [
                    "Kitchen",
                    "Kitchen Countertops & Accessories",
                    "Kitchen Countertop Side Splashes"
                ],
                "url": "https://www.lowes.com/pl/Kitchen-countertop-side-splashes-Kitchen-countertops-accessories-Kitchen/2715620879"
            },
            {
                "categoryTags": [
                    "Kitchen",
                    "Kitchen Countertops & Accessories",
                    "Kitchen Countertops"
                ],
                "url": "https://www.lowes.com/pl/Kitchen-countertops-Kitchen-countertops-accessories-Kitchen/4294696736"
            },
            {
                "categoryTags": [
                    "Kitchen",
                    "Kitchen Countertops & Accessories",
                    "Laminate Sheets"
                ],
                "url": "https://www.lowes.com/pl/Laminate-sheets-Kitchen-countertops-accessories-Kitchen/272195692"
            },
        
            
            {
                "categoryTags": [
                    "Flooring",
                    "Floor Moulding & Trim"
                ],
                "url": "https://www.lowes.com/pl/Floor-moulding-trim-Flooring/4294417445"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Flooring Underlayment"
                ],
                "url": "https://www.lowes.com/pl/Flooring-underlayment-Flooring/4294418636"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Garage Flooring"
                ],
                "url": "https://www.lowes.com/pl/Garage-flooring-Flooring/4294642654"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Gym Flooring"
                ],
                "url": "https://www.lowes.com/pl/Gym-flooring-Flooring/4294515431"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Surface Preparation"
                ],
                "url": "https://www.lowes.com/pl/Surface-preparation-Flooring/4294859046"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Underfloor Heating"
                ],
                "url": "https://www.lowes.com/pl/Underfloor-heating-Flooring/4294856527"
            },
        
            
            {
                "categoryTags": [
                    "Flooring",
                    "Carpet & Carpet Tile",
                    "Carpet"
                ],
                "url": "https://www.lowes.com/pl/Carpet-Carpet-carpet-tile-Flooring/4294825283"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Carpet & Carpet Tile",
                    "Carpet Padding"
                ],
                "url": "https://www.lowes.com/pl/Carpet-padding-Carpet-carpet-tile-Flooring/4294865564"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Carpet & Carpet Tile",
                    "Carpet Samples"
                ],
                "url": "https://www.lowes.com/pl/Carpet-samples-Carpet-carpet-tile-Flooring/4294775312"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Carpet & Carpet Tile",
                    "Carpet Tile"
                ],
                "url": "https://www.lowes.com/pl/Carpet-tile-Carpet-carpet-tile-Flooring/4294742218"
            },
            
            {
                "categoryTags": [
                    "Flooring",
                    "Vinyl Flooring",
                    "Sheet Vinyl (Cut-to-Length)"
                ],
                "url": "https://www.lowes.com/pl/Sheet-vinyl-cut-to-length-Vinyl-flooring-Flooring/952903120"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Vinyl Flooring",
                    "Sheet Vinyl (Pre-Cut)"
                ],
                "url": "https://www.lowes.com/pl/Sheet-vinyl-pre-cut-Vinyl-flooring-Flooring/1311730602756"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Vinyl Flooring",
                    "VCT Tile"
                ],
                "url": "https://www.lowes.com/pl/VCT-tile-Vinyl-flooring-Flooring/1737092063"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Vinyl Flooring",
                    "Vinyl Flooring Samples"
                ],
                "url": "https://www.lowes.com/pl/Vinyl-flooring-samples-Vinyl-flooring-Flooring/1556390006"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Vinyl Flooring",
                    "Vinyl Plank"
                ],
                "url": "https://www.lowes.com/pl/Vinyl-plank-Vinyl-flooring-Flooring/4294608591"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Vinyl Flooring",
                    "Vinyl Tile"
                ],
                "url": "https://www.lowes.com/pl/Vinyl-tile-Vinyl-flooring-Flooring/4294773819"
            },
            
            {
                "categoryTags": [
                    "Flooring",
                    "Hardwood",
                    "Hardwood Flooring"
                ],
                "url": "https://www.lowes.com/pl/Hardwood-flooring-Hardwood-Flooring/4294856493"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Hardwood",
                    "Hardwood Samples"
                ],
                "url": "https://www.lowes.com/pl/Hardwood-samples-Hardwood-Flooring/4136876684"
            },
        
            
            {
                "categoryTags": [
                    "Flooring",
                    "Tile & Tile Accessories",
                    "Accent & Trim Tile"
                ],
                "url": "https://www.lowes.com/pl/Accent-trim-tile-Tile-tile-accessories-Flooring/4294761653"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Tile & Tile Accessories",
                    "Backer Board"
                ],
                "url": "https://www.lowes.com/pl/Backer-board-Tile-tile-accessories-Flooring/4294745067"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Tile & Tile Accessories",
                    "Indoor Floor Sealers"
                ],
                "url": "https://www.lowes.com/pl/Indoor-floor-sealers-Tile-tile-accessories-Flooring/4294395577"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Tile & Tile Accessories",
                    "Tile"
                ],
                "url": "https://www.lowes.com/pl/Tile-Tile-tile-accessories-Flooring/4294856525"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Tile & Tile Accessories",
                    "Tile Board Moulding"
                ],
                "url": "https://www.lowes.com/pl/Tile-board-moulding-Tile-tile-accessories-Flooring/4294395580"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Tile & Tile Accessories",
                    "Tile Edge Trim"
                ],
                "url": "https://www.lowes.com/pl/Tile-edge-trim-Tile-tile-accessories-Flooring/4294395581"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Tile & Tile Accessories",
                    "Tile Membranes"
                ],
                "url": "https://www.lowes.com/pl/Tile-membranes-Tile-tile-accessories-Flooring/4294395582"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Tile & Tile Accessories",
                    "Tile Samples"
                ],
                "url": "https://www.lowes.com/pl/Tile-samples-Tile-tile-accessories-Flooring/1283681260"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Flooring Tools & Accessories",
                    "Carpet Tools & Accessories"
                ],
                "url": "https://www.lowes.com/pl/Carpet-tools-accessories-Flooring-tools-accessories-Flooring/4294417358"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Flooring Tools & Accessories",
                    "Flooring Accessories"
                ],
                "url": "https://www.lowes.com/pl/Flooring-accessories-Flooring-tools-accessories-Flooring/4294856496"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Flooring Tools & Accessories",
                    "Installation Tools"
                ],
                "url": "https://www.lowes.com/pl/Installation-tools-Flooring-tools-accessories-Flooring/3192764815"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Flooring Tools & Accessories",
                    "Tile Tools & Accessories"
                ],
                "url": "https://www.lowes.com/pl/Tile-tools-accessories-Flooring-tools-accessories-Flooring/509604447"
            },
        
            {
                "categoryTags": [
                    "Flooring",
                    "Grout & Mortar",
                    "Grout"
                ],
                "url": "https://www.lowes.com/pl/Grout-Grout-mortar-Flooring/4294856532"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Grout & Mortar",
                    "Grout Additives"
                ],
                "url": "https://www.lowes.com/pl/Grout-additives-Grout-mortar-Flooring/4294425047"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Grout & Mortar",
                    "Grout Bags"
                ],
                "url": "https://www.lowes.com/pl/Grout-bags-Grout-mortar-Flooring/979334909"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Grout & Mortar",
                    "Grout Removers"
                ],
                "url": "https://www.lowes.com/pl/Grout-removers-Grout-mortar-Flooring/4294414307"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Grout & Mortar",
                    "Grout Saws"
                ],
                "url": "https://www.lowes.com/pl/Grout-saws-Grout-mortar-Flooring/4294414308"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Grout & Mortar",
                    "Grout Tint"
                ],
                "url": "https://www.lowes.com/pl/Grout-tint-Grout-mortar-Flooring/4294542230"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Grout & Mortar",
                    "Mortar"
                ],
                "url": "https://www.lowes.com/pl/Mortar-Grout-mortar-Flooring/4294856533"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Laminate",
                    "Laminate Flooring"
                ],
                "url": "https://www.lowes.com/pl/Laminate-flooring-Laminate-Flooring/4294856495"
            },
            {
                "categoryTags": [
                    "Flooring",
                    "Laminate",
                    "Laminate Samples"
                ],
                "url": "https://www.lowes.com/pl/Laminate-samples-Laminate-Flooring/225108758"
            }
        ];

    await getSubCategories(plLinks.map(item => {
        return {
            ...item,
            url : item.url + "/products"
        }
    }).slice(0, 1), subCategoryLinksArr);

    console.table(subCategoryLinksArr);

    downloadEncodedText(subCategoryLinksArr, {categoryLinks : "all-category-links"});

}());