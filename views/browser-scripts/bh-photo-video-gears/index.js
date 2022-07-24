console.log("We are firing it up");


/*

    NOTE : 

    We have to make api requests inside the browser so from their own website so their servers would allow us to do so.


    From their site we can make any request to our locally running server and that will be our way to store their data from their site to ours.



*/



let linkObjectsUnparsed = [
    {
        "descriptionForUrl": "Digital-Cameras",
        "categoryId": "9811",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "SLR-Camera-Lenses",
        "categoryId": "274",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Mirrorless-Camera-Lenses",
        "categoryId": "17912",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Rangefinder-Camera-Lenses",
        "categoryId": "8423",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "digital-cine-lenses",
        "categoryId": "25249",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Special-Effects-Lenses",
        "categoryId": "11751",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Medium-Format-Lenses",
        "categoryId": "467",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Large-Format-Lenses",
        "categoryId": "40",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "consumer",
        "categoryId": "40227",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "professional-cinema",
        "categoryId": "40228",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "starter",
        "categoryId": "40226",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fpv-racing",
        "categoryId": "40220",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "enterprise",
        "categoryId": "40229",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "aerial-quadcopters",
        "categoryId": "23396",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-batteries-chargers",
        "categoryId": "40255",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-battery-chargers",
        "categoryId": "51898",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-battery-cables-adapters",
        "categoryId": "51900",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-battery-cases",
        "categoryId": "51899",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-cases-backpacks",
        "categoryId": "40253",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drones-soft-cases",
        "categoryId": "51912",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drones-backpacks",
        "categoryId": "51913",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drones-cases-accessories",
        "categoryId": "51914",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-gimbals-lens-filters",
        "categoryId": "40254",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-thermal-cameras",
        "categoryId": "51901",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "gimbal-lenses",
        "categoryId": "51743",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "nd-filters",
        "categoryId": "51201",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "cpl-filter",
        "categoryId": "51202",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "uv-filters",
        "categoryId": "51200",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "variable-nd-filters",
        "categoryId": "51203",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "light-pollution-filters",
        "categoryId": "51204",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "nd-filter-set",
        "categoryId": "51205",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "nd-cpl-filter-set",
        "categoryId": "51206",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "filter-bundles",
        "categoryId": "51207",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "all-filters",
        "categoryId": "51208",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-gimbal-mounts",
        "categoryId": "51904",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-gimbal-protector",
        "categoryId": "51905",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "lens-attachments",
        "categoryId": "51906",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "gimbal-hardware-tools",
        "categoryId": "51911",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "gimbal-warranties",
        "categoryId": "52047",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-motors",
        "categoryId": "51915",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "propellers",
        "categoryId": "51916",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "propellers",
        "categoryId": "52322",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "flight-controller",
        "categoryId": "51917",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "esc-boards",
        "categoryId": "51918",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-body-frames",
        "categoryId": "51919",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-body-parts",
        "categoryId": "51920",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-landing-gear",
        "categoryId": "51921",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-hardware-parts",
        "categoryId": "51922",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-decals",
        "categoryId": "51924",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "wings-set",
        "categoryId": "52612",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fpv-drone-parts-components-accessories",
        "categoryId": "28008",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fpv-head-set",
        "categoryId": "51925",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fpv-antena",
        "categoryId": "51926",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fpv-video-transmision",
        "categoryId": "51927",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fpv-sun-hoods",
        "categoryId": "51928",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fpv-mounts",
        "categoryId": "51929",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fpv-cables-parts",
        "categoryId": "51930",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fpv-receivers",
        "categoryId": "51988",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fpv-cameras-lens",
        "categoryId": "52154",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-controllers-transmitters",
        "categoryId": "28007",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "radio-controller-parts",
        "categoryId": "51931",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "radio-controller-sticks",
        "categoryId": "51932",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "radio-controller-batteries",
        "categoryId": "51933",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "radio-controller-receivers",
        "categoryId": "51934",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "servos-gears",
        "categoryId": "52031",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "landing-pads",
        "categoryId": "51965",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-lighting-mounts",
        "categoryId": "51967",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-software",
        "categoryId": "51974",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "recording-media",
        "categoryId": "51968",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drone-safety-parachute",
        "categoryId": "51975",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "warranties-services",
        "categoryId": "51966",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "flight-zone-accessories",
        "categoryId": "52033",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dji",
        "categoryId": "27995",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "autel-robotics",
        "categoryId": "31186",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "freefly",
        "categoryId": "27999",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "parrot",
        "categoryId": "28002",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "yuneec",
        "categoryId": "28006",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ryze-tech-accessories",
        "categoryId": "39244",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "3dr",
        "categoryId": "27992",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "blade",
        "categoryId": "27994",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "aee",
        "categoryId": "27993",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dromida",
        "categoryId": "27996",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "hubsan",
        "categoryId": "28001",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "e-flite",
        "categoryId": "27997",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "emax-accessories",
        "categoryId": "39959",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "estes",
        "categoryId": "27998",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "micro-drone-accessories",
        "categoryId": "30828",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "heli-max",
        "categoryId": "28000",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "power-vision-accessories",
        "categoryId": "34575",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "sony-aerial-accessories",
        "categoryId": "51714",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "swellpro-accessories",
        "categoryId": "39575",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "team-blacksheep-accessories",
        "categoryId": "32043",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "traxxas-accessories",
        "categoryId": "31832",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "udi-rc-accessories",
        "categoryId": "28513",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "walkera",
        "categoryId": "28004",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "xcraft-accessories",
        "categoryId": "29960",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "xfold",
        "categoryId": "28012",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Instant-Film-Cameras",
        "categoryId": "14536",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Disposable-Single-Use-Cameras",
        "categoryId": "2171",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "SLR-TLR-Film-Cameras",
        "categoryId": "269",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "medium-format-film-cameras",
        "categoryId": "465",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "pinhole-cameras",
        "categoryId": "22892",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Field-View-Cameras",
        "categoryId": "27",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Tripods-Support",
        "categoryId": "8159",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Tripod-Heads-Accessories",
        "categoryId": "10835",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "quick-release-systems",
        "categoryId": "38005",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Tripod-Tripod-Head-Cases",
        "categoryId": "193",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Straps",
        "categoryId": "3936",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "tripod-feet-spikes",
        "categoryId": "10830",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Dollies",
        "categoryId": "3930",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Center-Columns-Accessories",
        "categoryId": "402",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Tripod-Leg-Protectors",
        "categoryId": "13061",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Leg-Assembly-Parts-Accessories",
        "categoryId": "399",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Sandbags-Weight-Bags",
        "categoryId": "1373",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Camera-Tripod-Levelers",
        "categoryId": "10832",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Gimbal-Head-Accessories",
        "categoryId": "15207",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "tripod-extension-arms-horizontal",
        "categoryId": "10829",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Tripod-Head-Cases",
        "categoryId": "19872",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Camera-Platforms",
        "categoryId": "10831",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Tripod-Leg-Accessories",
        "categoryId": "8165",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Digital-SLR-Video-Stabilizers",
        "categoryId": "3926",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "telescoping-camera-poles",
        "categoryId": "22820",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Counter-Chest-Strap-Pods",
        "categoryId": "10834",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Camcorder-Mounts",
        "categoryId": "13931",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Camera-Stands",
        "categoryId": "415",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Camera-Stand-Heads",
        "categoryId": "413",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Camera-Stands",
        "categoryId": "414",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Shoulder-Gadget-Bags",
        "categoryId": "174",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Backpacks-Daypacks",
        "categoryId": "176",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "sling-bags",
        "categoryId": "32677",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Rolling-Cases",
        "categoryId": "191",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camera-bags-for-women",
        "categoryId": "21202",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camera-holster-bags",
        "categoryId": "182",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camera-duffle-bags",
        "categoryId": "195",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camera-hard-cases-waterproof",
        "categoryId": "16460",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Waterproof-Bags",
        "categoryId": "9437",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Belt-Hip-Packs",
        "categoryId": "177",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Compact-Camera-Pouches",
        "categoryId": "187",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Dedicated-Compact-Camera-Cases",
        "categoryId": "2837",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Filter-Pouches-Cases",
        "categoryId": "238",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camera-flash-cases-pouches",
        "categoryId": "252",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "General-Pouches-Wallets",
        "categoryId": "244",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lens-Pouches-Cases",
        "categoryId": "4529",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dslr-camera-cases",
        "categoryId": "173",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camera-straps-harnesses",
        "categoryId": "31261",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camera-skins-silicone-cases",
        "categoryId": "12670",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "LensCoats-TravelCoats",
        "categoryId": "12668",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camera-protective-wraps",
        "categoryId": "104",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Rain-Capes-Covers-Slickers",
        "categoryId": "3313",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dry-cabinets-dehumidifer-box",
        "categoryId": "27853",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camera-battery-bags-pouches",
        "categoryId": "31592",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "inserts-compartments",
        "categoryId": "29736",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "bag-straps",
        "categoryId": "29792",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "case-and-luggage-locks",
        "categoryId": "31552",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "other-bag-case-accessories",
        "categoryId": "31593",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "keychains",
        "categoryId": "25223",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "watertight-case-dividers",
        "categoryId": "31197",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "watertight-case-foam-inserts",
        "categoryId": "31198",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "watertight-case-organizers",
        "categoryId": "31199",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Hard-Watertight-Case-Accessories",
        "categoryId": "16645",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Memory-Cards",
        "categoryId": "1097",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "sd-micro-sd-card-readers-memory-card-readers",
        "categoryId": "1096",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "sd-micro-sd-card-holders-memory-card-cases",
        "categoryId": "19697",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Stand-Alone-Data-Storage",
        "categoryId": "3369",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Memory-Card-Carry-Cases-Accessories",
        "categoryId": "3688",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "sd-micro-sd-card-duplicators",
        "categoryId": "38264",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "sdxc-microsdxc-memory-cards",
        "categoryId": "53237",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "sdhc-microsdhc-memory-cards",
        "categoryId": "53235",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "64gb-sd-microsd-memory-cards",
        "categoryId": "53402",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "32gb-sd-microsd-memory-cards",
        "categoryId": "53399",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "16gb-sd-microsd-memory-cards",
        "categoryId": "53239",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "class-10-sd-microsd-memory-cards",
        "categoryId": "53238",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "On-Camera-Batteries",
        "categoryId": "1100",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "photography-battery-chargers",
        "categoryId": "37498",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Battery-Holders-Grips",
        "categoryId": "10044",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "AC-DC-Adapters-Chargers",
        "categoryId": "1099",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "charger-plates",
        "categoryId": "37499",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Battery-Packs",
        "categoryId": "7382",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Standard-Rechargeable-Batteries-Chargers",
        "categoryId": "436",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "button-coin-cell-batteries",
        "categoryId": "27257",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "battery-cases",
        "categoryId": "36523",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "aa-battery-testers-power-supply-accessories",
        "categoryId": "451",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "detachable-camera-flash-external",
        "categoryId": "643",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "On-Flash-Light-Controls",
        "categoryId": "655",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Adapters",
        "categoryId": "8946",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ttl-cables",
        "categoryId": "654",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Macro-Ringlight-Flashes",
        "categoryId": "5648",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "pc-hot-shoe-adapters",
        "categoryId": "652",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Sync-Cords",
        "categoryId": "1214",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Flash-Accessories",
        "categoryId": "658",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "hot-cold-shoe-mounts-adapters",
        "categoryId": "18944",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "extended-warranties",
        "categoryId": "37331",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "On-Camera-Lights",
        "categoryId": "2026",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Batteries-Power",
        "categoryId": "9832",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Adapters-Cables",
        "categoryId": "3685",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Light-Controls",
        "categoryId": "3678",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Background-Lighting-Kits",
        "categoryId": "12293",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Mounts-Brackets",
        "categoryId": "3686",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "articulating-camera-arms-monitor-mounts",
        "categoryId": "10461",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Video-Camera-Light-Lamps",
        "categoryId": "2185",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "grip-gloves",
        "categoryId": "31441",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Accessories",
        "categoryId": "3679",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "flash-triggers",
        "categoryId": "1174",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Battery-Packs-Accessories",
        "categoryId": "645",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Flash-Brackets-Accessories",
        "categoryId": "4938",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Standard-Filters",
        "categoryId": "132",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Neutral-Density-Filters",
        "categoryId": "16773",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Diffusion-Soft-Focus-Filters",
        "categoryId": "16775",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Color-Balance-Black-White-Contrast",
        "categoryId": "16772",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Color-Effects-Filters",
        "categoryId": "16774",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Optical-Effects-Filters",
        "categoryId": "16776",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Special-Effect-Filters",
        "categoryId": "3676",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Kits",
        "categoryId": "2347",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Filter-Accessories",
        "categoryId": "121",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lens-Caps-Hoods",
        "categoryId": "14548",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Teleconverters",
        "categoryId": "278",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lens-Adapters",
        "categoryId": "3420",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drop-in-rear-filters-holders",
        "categoryId": "41262",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "t-mount-adapters",
        "categoryId": "24706",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Auxiliary-Add-On-Lenses",
        "categoryId": "15550",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lens-Extended-Warranties",
        "categoryId": "4410",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lens-Optics-Cleaning",
        "categoryId": "18804",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Macro-Close-Up",
        "categoryId": "10487",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Cases-Pouches-Protective-Gear",
        "categoryId": "15493",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Remote-Controls",
        "categoryId": "4948",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "lcd-viewfinder-accessories",
        "categoryId": "27985",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "On-Camera-Accessories",
        "categoryId": "16033",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lightmeters-Accessories",
        "categoryId": "900",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "light-meter-accessories",
        "categoryId": "21919",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Light-White-Balancing-Accessories",
        "categoryId": "12260",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dust-air-blower-compressed-air-can",
        "categoryId": "18806",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Sensor-Cleaning",
        "categoryId": "18805",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Photo-Vests-Jackets",
        "categoryId": "18683",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "photo-gloves",
        "categoryId": "26450",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "photographer-t-shirts-hats-apparel",
        "categoryId": "16733",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "lens-calibration-tools-camera-repair",
        "categoryId": "1090",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Extended-Warranties",
        "categoryId": "4416",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Digital-View-Camera-Bodies",
        "categoryId": "11361",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camera-backs",
        "categoryId": "31277",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Digital-Film-Back-Adapters",
        "categoryId": "152",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Digital-Back-Accessories",
        "categoryId": "2790",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "film-back-accessories",
        "categoryId": "31307",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Format-Sets-Reducing-Backs",
        "categoryId": "76",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Viewfinders-Folding-Hoods-Reflex-Housings",
        "categoryId": "85",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "viewfinder-masks-adapters",
        "categoryId": "488",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Focusing-Screens-Accessories",
        "categoryId": "78",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Focusing-Cloths",
        "categoryId": "84",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Monorails-Accessories",
        "categoryId": "101",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camera-bellows",
        "categoryId": "3062",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Format-Frames-Function-Carriers",
        "categoryId": "166",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Lens-Accessories",
        "categoryId": "47",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lens-Shutters",
        "categoryId": "44",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lensboards",
        "categoryId": "99",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Compendium-Lens-Hoods",
        "categoryId": "5291",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Accessories",
        "categoryId": "498",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "polaroid-instant-film",
        "categoryId": "327",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "35mm-film",
        "categoryId": "39569",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "120-film",
        "categoryId": "39570",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Sheet-Film",
        "categoryId": "335",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "other-film-formats",
        "categoryId": "39571",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Movie-Film",
        "categoryId": "341",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Film-Accessories",
        "categoryId": "324",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "smartphone-gimbal-stabilizers",
        "categoryId": "51774",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "phone-vlogging-kits",
        "categoryId": "51782",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "attachment-cases-kits",
        "categoryId": "24357",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "smartphone-tripod-adapter",
        "categoryId": "51816",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "smartphone-mini-tripods",
        "categoryId": "51788",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "tracking-smartphone-mount",
        "categoryId": "51889",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "grips-support",
        "categoryId": "24359",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "tablets-attachment-cases-kits",
        "categoryId": "29796",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "add-on-lenses-filters",
        "categoryId": "24358",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "lights-mics",
        "categoryId": "24360",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "microphones-for-iphone-wireless-bluetooth",
        "categoryId": "22909",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "smartphone-add-on-cameras",
        "categoryId": "28110",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "mobile-printers",
        "categoryId": "32845",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "wireless-shutter-releases",
        "categoryId": "28682",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "action-camming-underwater",
        "categoryId": "24361",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "smartphone-digiscoping-adapters",
        "categoryId": "39704",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "other-photo-video-accessories",
        "categoryId": "24363",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "light-panels",
        "categoryId": "48383",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "floodlights-led",
        "categoryId": "48384",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ring-lights",
        "categoryId": "48386",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "LED-Light-Sources",
        "categoryId": "12248",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fresnels",
        "categoryId": "48387",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "monolight-style",
        "categoryId": "48388",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "outdoor-spotlights",
        "categoryId": "48389",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "par-lights",
        "categoryId": "48390",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "light-wands-led-tubes",
        "categoryId": "48391",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "border-strip-cyc-lights",
        "categoryId": "48392",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "on-camera-lights",
        "categoryId": "48393",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "special-designs",
        "categoryId": "48394",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dj-effects-lights",
        "categoryId": "48395",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "stage-lighting",
        "categoryId": "48396",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "architectural-lighting",
        "categoryId": "48397",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ellipsoidal-light",
        "categoryId": "48398",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Light-Sources",
        "categoryId": "1201",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fresnels",
        "categoryId": "48568",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "floodlights",
        "categoryId": "48457",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "focusing-floods",
        "categoryId": "48741",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lights-Kits",
        "categoryId": "2247",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "spotlights",
        "categoryId": "48458",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "soft-lights",
        "categoryId": "48743",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "softbox-lights",
        "categoryId": "48742",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "stage-lighting",
        "categoryId": "48746",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dj-effects-lights",
        "categoryId": "48747",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "architectural-lighting",
        "categoryId": "48748",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "on-camera-lights",
        "categoryId": "48745",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "hmi-plasma-light",
        "categoryId": "1377",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dj-party-lights-led",
        "categoryId": "18875",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "par-lights",
        "categoryId": "51870",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "linear-bar-lights",
        "categoryId": "51872",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "led-strips",
        "categoryId": "51874",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "spotlights",
        "categoryId": "51873",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "moving-heads",
        "categoryId": "51871",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dj-lighting-scanners",
        "categoryId": "51875",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "gobo-projectors",
        "categoryId": "51876",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "black-lights-uv",
        "categoryId": "51881",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "strobes",
        "categoryId": "51882",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "specialized-effects",
        "categoryId": "52391",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dj-lighting-kits",
        "categoryId": "53118",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "stage-spot-lights",
        "categoryId": "6435",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "architectural-lights",
        "categoryId": "27098",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dj-lighting-accessories",
        "categoryId": "27495",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "architectural-lighting-accessories",
        "categoryId": "28048",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "work-lights",
        "categoryId": "17882",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Monolights",
        "categoryId": "1225",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Flash-Heads",
        "categoryId": "1211",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Strobe-Power-Packs",
        "categoryId": "20390",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Kits",
        "categoryId": "2250",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Slave-Strobes-AC-DC",
        "categoryId": "1239",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Standard-Softboxes",
        "categoryId": "1337",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Speed-Rings",
        "categoryId": "1381",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Speed-Ring-Accessories",
        "categoryId": "1382",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Eggcrates-Honeycomb-Grids",
        "categoryId": "6252",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Front-Diffusers",
        "categoryId": "3752",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Wands-Poles-Rods",
        "categoryId": "3751",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Barndoors",
        "categoryId": "6251",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Softbox-Accessories",
        "categoryId": "1338",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Umbrellas",
        "categoryId": "1325",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Flash-Mounts-Umbrella-Mounting-Accessories",
        "categoryId": "3536",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "umbrella-diffusers",
        "categoryId": "31190",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "umbrella-grids",
        "categoryId": "35850",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "other-umbrella-accessories",
        "categoryId": "31189",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "reflectors-accessories",
        "categoryId": "31160",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Barndoors",
        "categoryId": "1180",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Barndoor-Accessories",
        "categoryId": "6384",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Snoots",
        "categoryId": "6351",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Egg-Crates-Honeycomb-Grids",
        "categoryId": "18962",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Wire-Scrims",
        "categoryId": "1187",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "color-correction-filters-gels",
        "categoryId": "24442",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lighting-Filters",
        "categoryId": "1329",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "diffusers-diffusion-material",
        "categoryId": "24480",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Filter-Diffuser-Holders",
        "categoryId": "5702",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "filter-holder-accessories",
        "categoryId": "36675",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Projection-Attachments-Lenses",
        "categoryId": "1676",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "projection-lens-accessories",
        "categoryId": "39700",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Gobos-Discs-Patterns",
        "categoryId": "1733",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Gobos-Patterns",
        "categoryId": "1734",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Glass",
        "categoryId": "1672",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Frames-for-Frame-Panel-Reflectors",
        "categoryId": "1340",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Fabrics-for-Frame-Panel-Reflectors",
        "categoryId": "1341",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Frame-Panel-Reflector-Kits",
        "categoryId": "1339",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "butterfly-panel-reflector-accessories",
        "categoryId": "30370",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "reflector-bounce-boards",
        "categoryId": "12974",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Collapsible-Reflectors",
        "categoryId": "1327",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Collapsible-Reflectors",
        "categoryId": "1328",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "flags-dots-cucoloris",
        "categoryId": "28876",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Filter-Diffuser-Holders",
        "categoryId": "5706",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lightstands",
        "categoryId": "5799",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "boom-arms-stands-equipment",
        "categoryId": "1362",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "trussing-equipment",
        "categoryId": "27767",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lightstand-Risers-Columns",
        "categoryId": "2448",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Extension-Poles",
        "categoryId": "1371",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lightstand-Bases",
        "categoryId": "2449",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Casters-Wheel-Sets",
        "categoryId": "1370",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Studs-Receptors-Pins",
        "categoryId": "1358",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Adapters",
        "categoryId": "1350",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Clamps",
        "categoryId": "1353",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Brackets",
        "categoryId": "1352",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Grip-Heads",
        "categoryId": "1355",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Arms",
        "categoryId": "1351",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Grip-Accessories",
        "categoryId": "1700",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Suction-Cups-Accessories",
        "categoryId": "8110",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Accessories-for-Lightstands",
        "categoryId": "2227",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "AC-DC-Power-Supplies",
        "categoryId": "20391",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dc-power-supplies",
        "categoryId": "27725",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "electronic-ballasts",
        "categoryId": "20387",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "power-inverters",
        "categoryId": "28678",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "v-mount-batteries-lighting",
        "categoryId": "27617",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Batteries",
        "categoryId": "20389",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "battery-adapter-plates",
        "categoryId": "27613",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "battery-charger-accessories",
        "categoryId": "27691",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Power-Cables",
        "categoryId": "20392",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dmx-cables",
        "categoryId": "27973",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Cables",
        "categoryId": "11884",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "AC-Power-Extension-Cords",
        "categoryId": "1773",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "wireless-flash-triggers-radio-transmitters",
        "categoryId": "8007",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Motor-Cords",
        "categoryId": "2832",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Slave-Accessories",
        "categoryId": "8009",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Optical-Slaves",
        "categoryId": "1736",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "light-meters-accessories",
        "categoryId": "21923",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Bulbs-Lamps",
        "categoryId": "6280",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Cases-Covers",
        "categoryId": "308",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lightstand-Umbrella-Cases",
        "categoryId": "215",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Softbox-Cases",
        "categoryId": "6349",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lamp-Cases-Accessories",
        "categoryId": "8476",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "case-cover-accessories",
        "categoryId": "43850",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Carts-Handtrucks",
        "categoryId": "224",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "hand-truck-accessories",
        "categoryId": "34026",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "lighting-consoles-controllers",
        "categoryId": "26124",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Control-Consoles",
        "categoryId": "8156",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Projection-Accessories",
        "categoryId": "1675",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "lighting-console-accessories",
        "categoryId": "26125",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Sockets-Switches",
        "categoryId": "11887",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Remote-Controls",
        "categoryId": "1674",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "yokes-operating-poles",
        "categoryId": "27852",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Wireguards-Safety-Screens",
        "categoryId": "11327",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lighting-Books-Tutorials",
        "categoryId": "7756",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Flashlights",
        "categoryId": "6898",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "keychain-flashlights-mini-led",
        "categoryId": "26370",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "headlamps",
        "categoryId": "25145",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "portable-lights-led",
        "categoryId": "26388",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "bicycle-lights",
        "categoryId": "27793",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "indoor-area-lighting",
        "categoryId": "28562",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "lanterns",
        "categoryId": "26368",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "batteries-power-accessories",
        "categoryId": "27090",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "carrying-mounting-gear",
        "categoryId": "27091",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "holsters",
        "categoryId": "27095",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "conversion-upgrades",
        "categoryId": "27092",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "reflectors-shrouds",
        "categoryId": "27097",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "filters-lenses",
        "categoryId": "27094",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "lamps-leds",
        "categoryId": "27096",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "diffusers",
        "categoryId": "27093",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "other-accessories",
        "categoryId": "27089",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Cable-Management-Accessories",
        "categoryId": "8313",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Multi-Purpose-Tools",
        "categoryId": "2433",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "multi-tools",
        "categoryId": "22637",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Safety-Security-Cables",
        "categoryId": "16217",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "tools-accessories",
        "categoryId": "44185",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "seamless-paper",
        "categoryId": "23680",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Chroma-Key-Backgrounds",
        "categoryId": "6446",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "muslin-fabric-backgrounds",
        "categoryId": "23716",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "collapsible-backgrounds",
        "categoryId": "23697",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "vinyl-pvc-backgrounds",
        "categoryId": "23694",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Backgrounds-Backdrops",
        "categoryId": "16284",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Floors",
        "categoryId": "2429",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "gold-silver-shimmer-backdrops",
        "categoryId": "6032",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Background-Supports",
        "categoryId": "1396",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Background-Support-Accessories",
        "categoryId": "4815",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Autopoles",
        "categoryId": "1407",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "lasers",
        "categoryId": "51883",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "all-effect-lights",
        "categoryId": "51878",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Shooting-Tables",
        "categoryId": "1409",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Tents-Domes-Blinds",
        "categoryId": "1410",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Shooting-Table-Accessories",
        "categoryId": "6346",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Tabletop-Shooting-Table-Backgrounds",
        "categoryId": "12656",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Copystands",
        "categoryId": "711",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Copystands",
        "categoryId": "713",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Product-Turntables",
        "categoryId": "18679",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Cycs",
        "categoryId": "14478",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Apple-Boxes-Basso-Blocks-Wood",
        "categoryId": "1401",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "photo-booths",
        "categoryId": "26405",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Posing-Equipment",
        "categoryId": "1408",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Studio-Ladders",
        "categoryId": "1404",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Gaffer-Duve-Specialty-Tapes",
        "categoryId": "1403",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Fog-Special-Effects-Machines",
        "categoryId": "1411",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "bubble-snow-wind-machines",
        "categoryId": "34282",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fog-juice-machine-fluids",
        "categoryId": "28879",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "special-effects-accessories",
        "categoryId": "28880",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Special-Effects-Projectors",
        "categoryId": "16518",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Paints",
        "categoryId": "1406",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Stage-Equipment",
        "categoryId": "2421",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "woodworking-clamps",
        "categoryId": "27957",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Props-Special-Effects",
        "categoryId": "2427",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Paint-Brushes",
        "categoryId": "7843",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Rail-Systems-Accessories",
        "categoryId": "11940",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "rise-accessories",
        "categoryId": "31831",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "underwater-cameras-housings",
        "categoryId": "16477",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "underwater-drones-rov",
        "categoryId": "25732",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lenses-Lens-Ports-Lens-Gears",
        "categoryId": "16480",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "underwater-camera-trays-handles-accessories",
        "categoryId": "7894",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "underwater-lights-dive-lights",
        "categoryId": "16482",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Power-Connections",
        "categoryId": "16483",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Equipment-Accessories",
        "categoryId": "16484",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Monitors",
        "categoryId": "6278",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "underwater-scooters",
        "categoryId": "39572",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Enlargers",
        "categoryId": "546",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Enlarger-Heads",
        "categoryId": "550",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Enlarger-Head-Accessories",
        "categoryId": "5670",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Enlarging-Lenses-Accessories",
        "categoryId": "543",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Enlarger-Accessories",
        "categoryId": "544",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Black-White",
        "categoryId": "802",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Color",
        "categoryId": "801",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Display-Materials-Specialty-Paper",
        "categoryId": "809",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "black-white-film-developing-chemicals",
        "categoryId": "576",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Miscellaneous-Chemistry",
        "categoryId": "598",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "For-Color-Film",
        "categoryId": "595",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "For-Color-Paper",
        "categoryId": "596",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "film-developing-kits",
        "categoryId": "751",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "film-processing-developing-supplies",
        "categoryId": "761",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Safelights-Darkroom-Setup",
        "categoryId": "528",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Plastic-Fiberglass-Sinks",
        "categoryId": "509",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "stainless-steel-sinks",
        "categoryId": "508",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "sink-stands-shelves",
        "categoryId": "10787",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "stainless-steel-sink-cabinets",
        "categoryId": "10786",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Temperature-Controls-Monitors",
        "categoryId": "517",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "sink-accessories-mats",
        "categoryId": "505",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Pencils",
        "categoryId": "885",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Darkroom-Retouching-Books-Tutorials",
        "categoryId": "1052",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Retouching-Brushes",
        "categoryId": "886",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "light-tables-led-light-boxes",
        "categoryId": "1558",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Loupes-Magnifiers",
        "categoryId": "987",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Viewing-Stations-Lights",
        "categoryId": "3617",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Slide-Viewers-Slide-Sorters",
        "categoryId": "1560",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Slide-Projectors-Accessories",
        "categoryId": "1495",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lightbox-Viewer-Lamps",
        "categoryId": "632",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Power-Supplies",
        "categoryId": "8370",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Lightbox-Viewer-Accessories",
        "categoryId": "1559",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "archival-photo-sleeves-pages",
        "categoryId": "728",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "archival-photo-storage-boxes",
        "categoryId": "922",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "corrugated-boards-interleaving-paper",
        "categoryId": "12425",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Film-Cleaning",
        "categoryId": "18802",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "photo-mailers-envelopes",
        "categoryId": "894",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "glassine-translucent-envelopes",
        "categoryId": "12426",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Photo-Imaging-Software",
        "categoryId": "13290",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "photography-books-cheat-sheets",
        "categoryId": "19977",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Film-Scanners",
        "categoryId": "1151",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "document-flatbed-scanners",
        "categoryId": "1152",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Portable-Scanners",
        "categoryId": "13404",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "barcode-scanners",
        "categoryId": "25602",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "3d-scanners",
        "categoryId": "23907",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Scanner-Accessories",
        "categoryId": "9611",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Film-Holders-Adapters",
        "categoryId": "9608",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "scanner-software",
        "categoryId": "23853",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "scanner-extended-warranties",
        "categoryId": "25676",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "3d-scanner-accessories",
        "categoryId": "35852",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "USB-Cables",
        "categoryId": "13351",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Inkjet-Printers",
        "categoryId": "1109",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "printer-paper",
        "categoryId": "1118",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "brother-printer-ink-toner-cartridges",
        "categoryId": "30029",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "canon-printer-ink-toner-pixma-cartridges",
        "categoryId": "30030",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dell-ink-toner",
        "categoryId": "38450",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "epson-ink-toner",
        "categoryId": "30031",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fujifilm-ink-toner",
        "categoryId": "31404",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "hewlett-packard-ink-toner",
        "categoryId": "30032",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "konica-ink-toner",
        "categoryId": "30033",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "lexmark-ink-toner",
        "categoryId": "46236",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "microboards",
        "categoryId": "42035",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "oki-ink-toner",
        "categoryId": "30034",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "primera-ink-toner",
        "categoryId": "30035",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ricoh-ink-toner",
        "categoryId": "30036",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "xerox-ink-toner",
        "categoryId": "30038",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "samsung-ink-toner",
        "categoryId": "30037",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "inkjet-printers-accessories",
        "categoryId": "28249",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "inkjet-printers-warranties",
        "categoryId": "28250",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Print-Finishing-Lacquers",
        "categoryId": "862",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Print-Servers",
        "categoryId": "9908",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "printer-stands",
        "categoryId": "29182",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "shredders-accessories",
        "categoryId": "30375",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Laser-Printers",
        "categoryId": "9997",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "laser-printers-accessories",
        "categoryId": "28252",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "laser-printers-warranties",
        "categoryId": "28253",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Large-Format-Printers",
        "categoryId": "18353",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Roll-Paper",
        "categoryId": "19443",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "banner-paper",
        "categoryId": "24974",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "large-format-printers-accessories",
        "categoryId": "28244",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "large-format-printer-warranties",
        "categoryId": "28245",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Dye-Sub-Thermal-Printers",
        "categoryId": "1108",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Paper-Ribbons-for-Dye-Sub",
        "categoryId": "1122",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dye-sub-printer-accessories",
        "categoryId": "28242",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "printer-paper",
        "categoryId": "29712",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "photo-albums",
        "categoryId": "918",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Album-Refill-Pages",
        "categoryId": "3553",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "scrapbook-photo-albums",
        "categoryId": "25768",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "photo-mounting-corners-tapes",
        "categoryId": "865",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Album-Scrapbook-Accessories",
        "categoryId": "921",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "book-binding-kits-cloths",
        "categoryId": "22571",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "photo-frames-float-frames",
        "categoryId": "927",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Digital-Picture-Frames-Albums",
        "categoryId": "2394",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "picture-framing-tools-accessories",
        "categoryId": "931",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "metal-aluminum-photo-prints",
        "categoryId": "22896",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Portfolio-Cases",
        "categoryId": "674",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Presentation-Cases",
        "categoryId": "12422",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "project-binders-presentation-books",
        "categoryId": "682",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "presentation-portfolio-boxes",
        "categoryId": "678",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Storage-Binders",
        "categoryId": "925",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "print-artwork-shipping-cases",
        "categoryId": "669",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Mounts-Masks-Mats-Folders",
        "categoryId": "681",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Refills",
        "categoryId": "689",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Presentation-Case-Accessories",
        "categoryId": "4158",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "photo-mounting-boards",
        "categoryId": "850",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "uncut-mat-boards-pre-cut-frame-mats",
        "categoryId": "851",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "paper-cutter-photo-trimmer",
        "categoryId": "860",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "paper-shredders-micro-cross-cut",
        "categoryId": "23930",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "die-cutting-machines",
        "categoryId": "34969",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "stamp-maker-machines",
        "categoryId": "50416",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Trimmers",
        "categoryId": "2473",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "die-cutting-accessories",
        "categoryId": "34970",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "craft-knives-scissors-blades-hole-punchers",
        "categoryId": "852",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "shredder-accessories",
        "categoryId": "30376",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Dry-Mount-Presses-Laminating-Machines",
        "categoryId": "838",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Dry-Mount-Tissue",
        "categoryId": "847",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "laminating-pouches-film",
        "categoryId": "2475",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Dry-Mount-Presses-Laminators",
        "categoryId": "839",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "mounting-wax-spray-mount-adhesive-rolls",
        "categoryId": "849",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "picture-photo-mounting-supplies",
        "categoryId": "872",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Pro-Camcorders-Cameras",
        "categoryId": "1881",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "digital-cine-cameras",
        "categoryId": "28624",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Studio-EFP-Cameras",
        "categoryId": "16764",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ptz-cameras",
        "categoryId": "25266",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ptz-camera-controllers",
        "categoryId": "24578",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ptz-camera-controller-cables",
        "categoryId": "24583",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ptz-camera-controller-accessories",
        "categoryId": "24585",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ptz-camera-interface-units",
        "categoryId": "47379",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ptz-camera-mounts",
        "categoryId": "24605",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ptz-camera-accessories",
        "categoryId": "24606",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ptz-camera-tracking-audio-components",
        "categoryId": "24604",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ptz-microphone-components",
        "categoryId": "47395",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "warranties-services",
        "categoryId": "52747",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "hdmi-to-ndi-encoders",
        "categoryId": "47370",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "pro-video-switchers",
        "categoryId": "47367",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Computer-Video-Hardware",
        "categoryId": "16557",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "recording-monitors",
        "categoryId": "38198",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "portable-video-recorders",
        "categoryId": "38199",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "studio-video-recorders-players",
        "categoryId": "38200",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Signal-Converters",
        "categoryId": "16642",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Distribution-Amplifiers-DA-S",
        "categoryId": "16663",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Display-Management-Systems",
        "categoryId": "17509",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Processors-Accessories",
        "categoryId": "7511",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Video-Delays",
        "categoryId": "5721",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "SDI-Embedded-Audio",
        "categoryId": "8070",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Noise-Eliminators-Isolaters",
        "categoryId": "2135",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories",
        "categoryId": "7510",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Multi-Viewer-Accessories",
        "categoryId": "18509",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ip-converter",
        "categoryId": "41781",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "network-switches",
        "categoryId": "47413",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "nas-drives",
        "categoryId": "47532",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "power-over-ethernet-poe",
        "categoryId": "47535",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "audio-problem-solvers",
        "categoryId": "47380",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "audio-converter",
        "categoryId": "41784",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "computer-monitors",
        "categoryId": "47537",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Teleprompters",
        "categoryId": "2122",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "HDMI-Cables",
        "categoryId": "8103",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "BNC-to-BNC-Cables-Composite-Component",
        "categoryId": "4188",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Thunderbolt-Cables-Adapters",
        "categoryId": "17952",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Ethernet-Cables",
        "categoryId": "7793",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "industrial-cameras",
        "categoryId": "25265",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "pov-cameras",
        "categoryId": "25267",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "consumer-360-video-cameras",
        "categoryId": "36031",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "professional-360-video-cameras",
        "categoryId": "36033",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "360-spherical-cameras",
        "categoryId": "29202",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "single-camera-accessories",
        "categoryId": "29883",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "vr-360-video-multi-camera-mounts",
        "categoryId": "29203",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "software-post-production",
        "categoryId": "29204",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "headsets-viewing-accessories",
        "categoryId": "29205",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "vr-gaming-computers",
        "categoryId": "31044",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "vr-cpu-processors",
        "categoryId": "31050",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "motherboards",
        "categoryId": "31047",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "vr-graphic-display-cards",
        "categoryId": "31049",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Computer-Memory",
        "categoryId": "13341",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "vr-gaming-cases",
        "categoryId": "31052",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "power-supplies",
        "categoryId": "22357",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fans-cpu-coolers",
        "categoryId": "22358",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "fans-cpu-coolers-accessories",
        "categoryId": "30554",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "motherboard-memory-accessories",
        "categoryId": "30826",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "computer-pc-led-lights",
        "categoryId": "27554",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Sound-Cards",
        "categoryId": "12622",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "internal-power-cables",
        "categoryId": "27506",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "vr-headsets",
        "categoryId": "31153",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lenses",
        "categoryId": "1884",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "industrial-lenses",
        "categoryId": "27731",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lens-Attachments",
        "categoryId": "2103",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lens-Attachment-Adapters",
        "categoryId": "16882",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "35mm-Imaging-Lens-Adapters",
        "categoryId": "17736",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dof-lens-adapter-accessories",
        "categoryId": "23122",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Night-Vision-Video-Lens-Adapters",
        "categoryId": "19863",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "night-vision-accessories",
        "categoryId": "23123",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lens-Mount-Adapters",
        "categoryId": "12013",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "lens-mount-adapter-accessories",
        "categoryId": "38358",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "interchangeable-lens-mount-kits",
        "categoryId": "38265",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Zoom-Focus",
        "categoryId": "12012",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Focusing-Gear",
        "categoryId": "12016",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Focus-Drive-Gears",
        "categoryId": "18497",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lens-Gear-Rings",
        "categoryId": "18498",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Follow-Focus-Accessories",
        "categoryId": "18499",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "wireless-lens-control-systems",
        "categoryId": "23192",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "wireless-lens-control-cables",
        "categoryId": "23203",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "wireless-lens-control-drive-gears",
        "categoryId": "38027",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "wireless-lens-control-brackets",
        "categoryId": "39574",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "wireless-lens-control-accessories",
        "categoryId": "23204",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Matte-Boxes-Shades",
        "categoryId": "2118",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Filter-Holders-Trays",
        "categoryId": "3631",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Adapter-Rings",
        "categoryId": "3651",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "matte-box-flags",
        "categoryId": "39887",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Matte-Box-Accessories",
        "categoryId": "3630",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "kyocera-ink-toner",
        "categoryId": "49125",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "toshiba-ink-toner",
        "categoryId": "49127",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "lens-hoods",
        "categoryId": "23124",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "lens-cases",
        "categoryId": "23075",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "lens-testing-equipment",
        "categoryId": "37476",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Lens-Accessories",
        "categoryId": "1890",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Shotgun",
        "categoryId": "8533",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lavalier",
        "categoryId": "8535",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "handheld-interview-news-microphones",
        "categoryId": "8534",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "condenser-microphones-small-diaphragm",
        "categoryId": "14703",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "podcast-microphones",
        "categoryId": "8537",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Boundary",
        "categoryId": "8546",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Stereo-Specialty",
        "categoryId": "15472",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "wireless-microphone-receivers-transmitters",
        "categoryId": "15419",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Wireless-Transmitters",
        "categoryId": "15420",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Wireless-Receivers",
        "categoryId": "15421",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "mini-microphones",
        "categoryId": "3779",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Portable-Digital-Recorders",
        "categoryId": "14934",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "portable-recorder-cases",
        "categoryId": "29017",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "windscreens-for-portable-recorders",
        "categoryId": "29021",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "remote-controls-for-digital-recorders",
        "categoryId": "45087",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "microphones-for-digital-recorders",
        "categoryId": "45086",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Recorders",
        "categoryId": "12107",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Field-Mixers",
        "categoryId": "4962",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Camcorder-XLR-Adapters",
        "categoryId": "8673",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Press-Boxes",
        "categoryId": "10455",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "field-mixer-cases-bags",
        "categoryId": "29030",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Mixers",
        "categoryId": "6427",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Boompoles-Fishpoles",
        "categoryId": "8659",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Boompole-Accessories",
        "categoryId": "8660",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Shotgun-Wind-Protection",
        "categoryId": "15545",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Grips-Mic-Suspensions",
        "categoryId": "15555",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Shock-Mounts-Shoe-Clips",
        "categoryId": "8650",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lavalier-Windscreens",
        "categoryId": "8663",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Lavalier-Mic-Clips",
        "categoryId": "8662",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Mic-Flags",
        "categoryId": "8666",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Microphone-Cases",
        "categoryId": "8669",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "In-Line-Mic-Accessories",
        "categoryId": "14723",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Modular-Microphone-Components",
        "categoryId": "14828",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Antennas",
        "categoryId": "9760",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Antenna-Accessories",
        "categoryId": "15491",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Microphone-Capsules",
        "categoryId": "16068",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Handheld-Windscreens",
        "categoryId": "8667",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Receiver-Camera-Mounts",
        "categoryId": "3741",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Cables-Power-Accessories",
        "categoryId": "9764",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Cables-Adapters",
        "categoryId": "16494",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Cases-Carrying-Gear",
        "categoryId": "9758",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Telephone-Audio-Interfaces",
        "categoryId": "8815",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Battery-Power-Distribution",
        "categoryId": "5693",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Time-Code-Generators-Readers",
        "categoryId": "6940",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Slates-Time-Code-Accessories",
        "categoryId": "15449",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Broadcast-Processors",
        "categoryId": "15517",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "microphone-boom-arms",
        "categoryId": "8681",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Wired-Intercoms",
        "categoryId": "1792",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Intercom-Systems",
        "categoryId": "8309",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Transmitters-Receivers",
        "categoryId": "1798",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Base-Stations",
        "categoryId": "11980",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Wireless-Intercom-Accessories",
        "categoryId": "15521",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "intercom-communications-headsets",
        "categoryId": "1794",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "headset-accessories",
        "categoryId": "28783",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ifb-earpiece-audio-kits",
        "categoryId": "12652",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Megaphones",
        "categoryId": "10686",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "walkie-talkies-2-way-radios",
        "categoryId": "15507",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "radio-headsets-earpieces",
        "categoryId": "15506",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Tripod-Systems",
        "categoryId": "3909",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Tripod-Legs",
        "categoryId": "3910",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Video-Tripod-Heads",
        "categoryId": "3918",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "pedestals-accessories",
        "categoryId": "21524",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Spreaders",
        "categoryId": "3929",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "other-tripod-accessories",
        "categoryId": "21525",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "hi-hats",
        "categoryId": "39841",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Base-Adapters",
        "categoryId": "3940",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Quick-Release-Plates-Wedges",
        "categoryId": "3938",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Quick-Release-Assemblies",
        "categoryId": "3937",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Handles-Accessories",
        "categoryId": "3941",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "video-head-cases",
        "categoryId": "39852",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Head-Accessories",
        "categoryId": "3994",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "digital-cine-camera-gimbal-stabilizers",
        "categoryId": "42795",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dslr-camera-gimbal-stabilizers",
        "categoryId": "42796",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "smartphone-gimbal-stabilizers",
        "categoryId": "42798",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "brushless-gimbal-stabilizers",
        "categoryId": "28767",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "rc-vehicles",
        "categoryId": "40373",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "batteries-power",
        "categoryId": "40545",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "gimbal-controllers",
        "categoryId": "40578",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "gimbal-handles-grips",
        "categoryId": "40709",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "gimbal-handlebar-accessory-mounts",
        "categoryId": "40714",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camera-mounts-brackets",
        "categoryId": "40717",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "gimbal-stabilizer-arm-systems",
        "categoryId": "40727",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "rc-vehicle-components",
        "categoryId": "40725",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "wirecam-support-systems",
        "categoryId": "40722",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "other-mounting-components",
        "categoryId": "40738",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "gimbal-cases",
        "categoryId": "40187",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "gimbal-accessories",
        "categoryId": "28769",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Stabilizer-Systems",
        "categoryId": "3927",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Stabilizer-Accessories",
        "categoryId": "3928",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Hand-Shoulder-Waist-Stabilizers",
        "categoryId": "3925",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Rod-Accessories",
        "categoryId": "12019",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "rod-adapters",
        "categoryId": "26738",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Plates-Brackets",
        "categoryId": "12018",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Baseplates-Mounts",
        "categoryId": "18123",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Handles-Grips",
        "categoryId": "18124",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Hardware-Other-Components",
        "categoryId": "18127",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Cranes-Jibs",
        "categoryId": "3917",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Cranes-Jibs",
        "categoryId": "13198",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Pan-Tilt-Rigs",
        "categoryId": "4013",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Pan-Tilt-Rig-Accessories",
        "categoryId": "3922",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camera-sliders-accessories",
        "categoryId": "21012",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camera-slider-accessories",
        "categoryId": "23081",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "motion-control-systems",
        "categoryId": "37562",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "motion-control-components",
        "categoryId": "37563",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "motion-control-trigger-cables",
        "categoryId": "37566",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camera-slider-cases",
        "categoryId": "39770",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "table-top-dollies",
        "categoryId": "37602",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "skater-dollies",
        "categoryId": "37603",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Track-Cine-Dollies-Accessories",
        "categoryId": "3931",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dolly-tracks",
        "categoryId": "37942",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Dolly-Accessories",
        "categoryId": "3932",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "transport-cases",
        "categoryId": "37943",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "pan-tilt-heads",
        "categoryId": "24940",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "college-sports",
        "categoryId": "51370",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "On-Camera-Batteries",
        "categoryId": "3469",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "battery-charger-kits",
        "categoryId": "38869",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "professional-camcorder-battery-kits",
        "categoryId": "52155",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Battery-Packs-Belts",
        "categoryId": "3722",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "battery-power-stations",
        "categoryId": "38870",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Mounting-Plates",
        "categoryId": "3720",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Adapter-Cables",
        "categoryId": "3728",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dc-couplers",
        "categoryId": "37946",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Accessories-for-Batteries",
        "categoryId": "2223",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Chargers",
        "categoryId": "3726",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "power-supplies",
        "categoryId": "38871",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "charger-accessories",
        "categoryId": "39960",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Charger-Accessories",
        "categoryId": "3731",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "travel-adapters",
        "categoryId": "27039",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Camera-Camcorder-Bags-Soft",
        "categoryId": "2044",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Backpacks-Daypacks",
        "categoryId": "4091",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Belt-Hip-Packs",
        "categoryId": "4094",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Camera-Covers",
        "categoryId": "2214",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Rain-Storm-Cases",
        "categoryId": "231",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Polar-Bear-Cases",
        "categoryId": "2205",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Portable-Monitor-Cases",
        "categoryId": "2042",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Large-Monitor-Cases",
        "categoryId": "11757",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Portable-Recorder-Cases",
        "categoryId": "4096",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Monitor-Case-Accessories",
        "categoryId": "9867",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Equipment-Production-Cases",
        "categoryId": "2050",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Director-s-Cut-Cases",
        "categoryId": "13998",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Rack-Cases",
        "categoryId": "1781",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Cases",
        "categoryId": "10231",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Pouches",
        "categoryId": "4099",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Vests-Harnesses",
        "categoryId": "18684",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Camcorder-Straps",
        "categoryId": "4263",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Bags-Cases",
        "categoryId": "2046",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camcorder-boards-upgrades",
        "categoryId": "24568",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camcorder-cables",
        "categoryId": "24569",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "internal-cine-camera-filters",
        "categoryId": "38357",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "camcorder-accessories",
        "categoryId": "24570",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "studio-efp-camera-components",
        "categoryId": "24561",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "industrial-camera-accessories",
        "categoryId": "24575",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ccus-base-stations",
        "categoryId": "24565",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "rcps-mcps",
        "categoryId": "24566",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "On-Camera-LCD-Monitors",
        "categoryId": "1984",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Finders-Accessories",
        "categoryId": "1894",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "viewfinder-accessories",
        "categoryId": "22398",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "viewfinder-eye-cushions",
        "categoryId": "22396",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "LCD-Hoods",
        "categoryId": "6247",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "lcd-hood-loupe-accessories",
        "categoryId": "23068",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Wireless-A-V-Transmitters-Receivers",
        "categoryId": "16427",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "wireless-transmission-accessories",
        "categoryId": "21819",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "battery-mounting-plates",
        "categoryId": "41690",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "power-adapter-cables",
        "categoryId": "41693",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "mounting-brackets",
        "categoryId": "41692",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "antennas",
        "categoryId": "41691",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "cases",
        "categoryId": "41694",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "vfx-motion-tracking-equipment",
        "categoryId": "46058",
        "pageNumber": 1,
        "filters": []
    }
],
    primaryCategoryLinks = [],
    processedUrls = [],
    cliReqIdInitials,
    currentReqIdCount,
    cliReqId,
    weHaveLinkObjects = false,
    aperture,
    totalNumberOfProducts = 0,
    linkObjectIndex = 0,
    productsPerCategory = 0;


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
        
    });
    
    await Promise.all(promises.map(item => item()));

}


/******************************************
* 
* 
*   Initial part:
*   Getting the link objects.
* 
* 
******************************************/


async function getCategoryPayloadObjectFromUrl(url) {
    let href = new URL(url),
        pathname = href.pathname,
        [c, type, descriptionForUrl, ci, categoryId, n, nValue] = pathname.split("/").filter(item => item && item !== ""),
        payloadObject = {descriptionForUrl, categoryId, nValue};

    payloadObject = Object.keys(payloadObject).reduce((object, key) => {

        if(payloadObject[key] && typeof payloadObject[key] !== "undefined")   {
            object[key] = payloadObject[key];
        }

        return object;
    }, {});

    console.log(payloadObject);

    return {payloadObject, type};

}

function extractUrlsFromCategoryGroups(categoryGroups)  {
    let extractedUrls = [];

    categoryGroups.forEach(categoryGroup => {
        let {categories} = categoryGroup,
            urls = categories.map(item => `https://www.bhphotovideo.com${item.url}`);
        for(let url of urls)    {
            if(!extractedUrls.includes(url))    {
                extractedUrls.push(url);
            }
        }
    })

    return extractedUrls;
}

async function getNestedCategoryLinks(ccUtilities, categoryLinks) {
    let { objectToQueryString, moderator, isObjectInArray, slowDown } = ccUtilities,
        categoryUrl = "https://www.bhphotovideo.com/api/category/info",
        urlWithParams = `${categoryUrl}/${objectToQueryString({aperture, cliReqId})}`,
        extractedCategoryPaths = [],
        interval = setInterval(function(){
            console.clear();
        }, 70000);


    

    await moderator(categoryLinks, async (slicedArr) => {

        let promises = slicedArr.map((item, index) => {
            async function getCategories() {

                let payload = await getCategoryPayloadObjectFromUrl(item),
                    {payloadObject, type : urlType} = payload;


                if(urlType === "buy")  {
                    let {descriptionForUrl, categoryId} = payloadObject,
                        linkObject = {descriptionForUrl, categoryId, pageNumber : 1, filters : []};
                    if(!isObjectInArray(linkObject, linkObjectsUnparsed, ["descriptionForUrl", "categoryId"]))    {
                        linkObjectsUnparsed.push(linkObject);
                        
                        
                    }
                    

                    if(!processedUrls.includes(item))    {
                        processedUrls.push(item);
                    }

                    console.log({
                        totalLinkObjects : linkObjectsUnparsed.length,
                        totalProcessedUrls : processedUrls.length,
                        urlType,
                        payloadObject
                    });


                } else  {
                    try {
                        let res = await fetch(categoryUrl, {
                                method : "POST",
                                body : JSON.stringify(payloadObject),
                                headers : {
                                    "Content-Type" : "application/json",
                                }
                            }),
                            decodedRes = await res.json(),
                            {type, status, data} = decodedRes;

                        if(type === "ok")   {
                            let {categoryGroups} = data,
                                extractedUrls = extractUrlsFromCategoryGroups(categoryGroups);
                            console.log(extractedUrls);
                            for(let url of extractedUrls)    {
                                if(!extractedCategoryPaths.includes(url) && !processedUrls.includes(url))    {
                                    extractedCategoryPaths.push(url);
                                }
                            }

                            console.log({
                                totalLinkObjects : linkObjectsUnparsed.length,
                                totalProcessedUrls : processedUrls.length,
                                totalExtractedCategoryPaths : extractedCategoryPaths.length,
                            });


                        }

                        


                    } catch(err)    {
                        
                        if(!extractedCategoryPaths.includes(item) && !processedUrls.includes(item))    {
                            extractedCategoryPaths.push(item);
                        }
                        
                    }
                    
                }

                
                
            }

            return getCategories;
        });

        await Promise.all(promises.map(item => item()));

        await slowDown(3434);

        if(extractedCategoryPaths.length)  {
            await getNestedCategoryLinks(ccUtilities, extractedCategoryPaths);


            console.log({
                totalLinkObjects : linkObjectsUnparsed.length,
                totalProcessedUrls : processedUrls.length,
                totalExtractedCategoryPaths : extractedCategoryPaths.length,
            });
        }

        clearInterval(interval);

        let [primaryLink] = slicedArr;
        if(primaryCategoryLinks.includes(primaryLink)) {
            console.log({
                message : "We have finished one of the primary Category Links",
                url : primaryLink,
            });
        }
    }, 1);


    console.table(linkObjectsUnparsed);


}


function getLinkObjects(linkObjectsUnparsed, linkObjectsKey) {

    if(window.localStorage.getItem(linkObjectsKey)) {
        return JSON.parse(window.localStorage.getItem(linkObjectsKey));
    } else  {
        window.localStorage.setItem(linkObjectsKey, JSON.stringify(linkObjectsUnparsed));

        return linkObjectsUnparsed;
    }
}

async function getCategoryLinkObjects({ccUtilities, weHaveLinkObjects, linkObjectsUnparsed, categoryLinkObjectsKey}) {
    
    if(!weHaveLinkObjects)  {
        await getNestedCategoryLinks(ccUtilities, primaryCategoryLinks);
    }

    return getLinkObjects(linkObjectsUnparsed, categoryLinkObjectsKey);

}

















/******************************************
* 
* 
*   Second part:
*   Getting the product objects.
* 
* 
******************************************/



// get the products details;
function setProductProps(ccUtilities, productObject) {

    let { getValidatedPropValues } = ccUtilities,
        productName = getValidatedPropValues(productObject, ["core", "shortDescription"]),
        productImage = null,
        categoryArray = function() {
            let categories = getValidatedPropValues(productObject, ["categoryInfo", "primaryCategoryPath"]);

            return Array.isArray(categories) ? categories.map(item => item.name) : [];
        }(),
        category = function()   {
            return categoryArray.length ? categoryArray[0] : "Uncategorized";
        }(),
        subcategory = function()   {
            return categoryArray.length > 2 ? categoryArray[1] : "No Subcategory Given";
        }(),
        description = function()    {
            let itemsInOverview = getValidatedPropValues(productObject, ["overview", "items"]),
                firstItem = Array.isArray(itemsInOverview) && itemsInOverview.length ? itemsInOverview[0] : null,
                description = getValidatedPropValues(firstItem, ["overview", "longDescription"]);

            return description;
        }(),
        imageUris = function(){

            let imagesArray = getValidatedPropValues(productObject, ["mainImage", "largeImages"]),
                largestImage = Array.isArray(imagesArray) && imagesArray.length ? imagesArray.reduce((a, b) => {

                    return a.height < b.height ? b : a;

                }) : null;

            return getValidatedPropValues(largestImage, ["url"]) ? [getValidatedPropValues(largestImage, ["url"])] : [];
        }(),
        productUri = `https://www.bhphotovideo.com${getValidatedPropValues(productObject, ["core", "detailsUrl"])}`,
        productManufacturer = getValidatedPropValues(productObject, ["brand", "name"]),
        model = getValidatedPropValues(productObject, ["core", "brandSeriesModel"]),
        manufacturerCatalogNumber = getValidatedPropValues(productObject, ["core", "manufacturerCatalogNumber"]),
        price = getValidatedPropValues(productObject, ["priceInfo", "price"]) ? `$${getValidatedPropValues(productObject, ["priceInfo", "price"])}` : getValidatedPropValues(productObject, ["priceInfo", "price"]),
        additionalCategoryTags = function(){

            let catArray = [category, subcategory];

            return categoryArray.filter(item => !catArray.includes(item)).join(", ");

        }(),
        specifications = function(){
            let specificationObjectArray = getValidatedPropValues(productObject, ["specifications", "items"]),
                firstItem = Array.isArray(specificationObjectArray) ? specificationObjectArray[0] : null;
                groupsArray = getValidatedPropValues(firstItem, ["groups"]);


            return groupsArray ? groupsArray.reduce((dlString, item) => {

                let specs = getValidatedPropValues(item, ["specs"]),
                    specsArr = Array.isArray(specs) ? specs : [];

                dlString += specsArr.reduce((a, b) => {

                    let title = getValidatedPropValues(b, ["name"]),
                        value = getValidatedPropValues(b, ["value"]);

                    a += `${title} : ${value}<br/>`;

                    return a;

                }, "");

                return dlString;

            }, "Specifications <br/>") : null;
            
        }();
        

    return {
        productName,
        productImage,
        category,
        subcategory,
        additionalCategoryTags,
        description,
        productManufacturer,
        model,
        manufacturerCatalogNumber,
        specifications,
        price,
        imageUris,
        productUri,
    }

}


// get all products by category
async function getAllProductsByCategory({ccUtilities, categoryLinkObject})   {

    let { objectToQueryString, moderator, isObjectInArray, slowDown, apiRequest } = ccUtilities,
        itemKeys = await getAllProductsItemKeyByCategory({ccUtilities, categoryLinkObject}),
        productObjects = [];

    await moderator(itemKeys, async (slicedArr) => {

        await slowDown();

        let url = "https://www.bhphotovideo.com/api/item/p/product-details",
            payload = {
                "params": {
                    "itemList": slicedArr,
                    "channels": [
                        "core",
                        "brand",
                        "mainImage",
                        "categoryInfo",
                        "priceInfo",
                        "overview",
                        "specifications"
                    ],
                    "channelParams": {
                        "imageInfo": {
                            "IMAGE_INFO_CONTEXT": "ITEM_DETAILS"
                        }
                    }
                }
            },
            response = await apiRequest(url, {
                method : "POST",
                body : JSON.stringify(payload),
                headers : {
                    "Content-Type" : "application/json",
                }
            }),
            {data, type} = response;
            if(type === "ok")   {

                let cleansedData = data.map(item => {
                    let cleansedProductObject = setProductProps(ccUtilities, item);

                    console.table(cleansedProductObject); // showing single product;

                    return cleansedProductObject;
                });

                totalNumberOfProducts += cleansedData.length;



                productObjects.push(...cleansedData);
            }

            console.log({
                totalNumberOfProducts,
                linkObjectIndex
            });


            await slowDown();
            console.clear();

    }, 30);

    // return rawProductObjects;

    // productObjects = rawProductObjects.map(item => {
    //     return setProductProps(ccUtilities, item);
    // });

    return productObjects;
}


// get the products itemkey by category links  
async function getAllProductsItemKeyByCategory({ccUtilities, categoryLinkObject})    {

    let { objectToQueryString, moderator, isObjectInArray, slowDown, apiRequest } = ccUtilities,
        url = `https://www.bhphotovideo.com/api/navigation/category`,
        {categoryId, pageNumber, descriptionForUrl, filters} = categoryLinkObject;

    await slowDown(3434);


    let response = await apiRequest(url, {
            method : "POST",
            body : JSON.stringify({...categoryLinkObject, categoryId : Number(categoryId)}),
            headers : {
                "Content-Type" : "application/json",
            }
        }),
        {data, type} = response,
        allProducts = [];
    
    async function getSucceedingPages(categoryId, pageNumber, descriptionForUrl, filters, totalPages) {

        await slowDown(4343);
        console.clear();

        let response = await apiRequest(url, {
                method : "POST",
                body : JSON.stringify({pageNumber, descriptionForUrl, filters, categoryId : Number(categoryId)}),
                headers : {
                    "Content-Type" : "application/json",
                }
            }),
            {data, type} = response;

        if(type === "ok")   {
            let {items} = data,
                productObjects = items.map(item => item.itemKey);

            for(let obj of productObjects)  {
                if(!isObjectInArray(obj, allProducts))  {
                    allProducts.push(obj);
                }
            }
            
        }


        
        console.table(allProducts);

        console.log({
            message : `This is page number : ${pageNumber}`,
            pageNumber,
            totalPages,
            totalProductsForCategory : allProducts.length,
            totalNumberOfProducts,
            linkObjectIndex
        });

        if(pageNumber < totalPages) {
            pageNumber += 1;

            await getSucceedingPages(categoryId, pageNumber, descriptionForUrl, filters, totalPages);
        }
        
    }

    try{
        if(type === "ok")   {
            
            let {items, count, itemsPerPage} = data,
                totalPages = Math.ceil(count / itemsPerPage),
                productObjects = items.map(item => item.itemKey);

            for(let obj of productObjects)  {
                if(!isObjectInArray(obj, allProducts))  {
                    allProducts.push(obj);
                }
            }

            console.log({
                message : `This is the first page : ${pageNumber}`,
                pageNumber,
                totalPages
            })
            console.table(allProducts);

            if(pageNumber < totalPages) {
                pageNumber += 1;

                await getSucceedingPages(categoryId, pageNumber, descriptionForUrl, filters, totalPages);
            }

            
        }

        return allProducts;

    } catch (err)   {
        console.log(err);
        console.log(err.message);

        return [];
    }
}


// get all products
async function getAllProducts({ccUtilities, categoryLinkObjects})  {

    let { downloadEncodedText, moderator, isObjectInArray, slowDown } = ccUtilities;

    await moderator(categoryLinkObjects, async (slicedArr) => {
        
        let promises = slicedArr.map((categoryLinkObject) => {
            return async function() {

                let allProductObjects = await getAllProductsByCategory({ccUtilities, categoryLinkObject}),
                    category = "Uncategorized",
                    subcategory = "No Subcategory Given"

                if(allProductObjects.length)    {
                    category = allProductObjects[0].category;
                    subcategory = allProductObjects[0].subcategory;
                }
                

                
                console.table(allProductObjects);

                productsPerCategory = allProductObjects.length;
                // totalNumberOfProducts += allProductObjects.length;
                


                console.table({...categoryLinkObject, linkObjectIndex});

                console.log({
                    productsPerCategory,
                    totalNumberOfProducts,
                    linkObjectIndex
                });

                // save data to database  OR download the encoded text files here;

                await downloadEncodedText(allProductObjects, {
                    category, subcategory, linkObjectIndex : `loi-${linkObjectIndex}`
                });

                await slowDown();

                linkObjectIndex += 1;
            }
        });

        await Promise.all(promises.map(item => item()));

    }, 1);


    console.log({
        totalNumberOfProducts,
        linkObjectIndex
    });

}









// post the products to our database || print the data to a downloadable encoded text file (though posting will be better as we can filter out immediately any duplicate product);

// then we write a printer of data to our 















/******************************************
* 
* 
*   Final part:
*   Initialization of the entire script.
* 
* 
******************************************/


async function initializeScript(mainDirPath) {
    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTM4ZjNmOTU1YTA1NDJjZDhmNTJiMjciLCJwZXJtaXNzaW9uTGV2ZWwiOjMsImlhdCI6MTY1ODE2NzU2MSwiZXhwIjoxNjU4NzcyMzYxfQ.HawlbhyhNcCR-soYyiDZgXjgFcQCMJqAiF9m9OXAE-E",
        ccUtilities = __cc_getUtilities(authToken),
        categoryLinkObjectsKey = "___cc_categoryLinkObjects",
        { moderator, slowDown, apiRequest } = ccUtilities,
        categoryLinkObjects = await getCategoryLinkObjects({ccUtilities, weHaveLinkObjects, linkObjectsUnparsed, categoryLinkObjectsKey});
        

    // get the products through the category links

    console.table(categoryLinkObjects);


    // {
    //     "totalNumberOfProducts": 77917,
    //     "linkObjectIndex": 183
    // }

    linkObjectIndex = 480; //163; // 160; //6; // 5;
    totalNumberOfProducts = 134129; // 77917; // 74083; // 73174; // 48653; // 4606;
    let productObjects = await getAllProducts({ccUtilities, categoryLinkObjects : categoryLinkObjects.slice(linkObjectIndex)}); // if linkObjects are set, it will just continue where it left off
    

    console.log(productObjects);
}

(async function(){


    console.log("hello there... Michael Norward");

    let mainDirPath = `H:/My Drive/Crystal Commerce`;



    // these are conditional config for turning things on and off;

    window.localStorage.removeItem("___cc_categoryLinkObjects");

    weHaveLinkObjects = true;

    if(!weHaveLinkObjects) {
        linkObjectsUnparsed = [];
        primaryCategoryLinks = [
            // "https://www.bhphotovideo.com/c/browse/Photography/ci/989/N/4294538916",
            // "https://www.bhphotovideo.com/c/browse/Professional-Video/ci/3755/N/4294545851",
            "https://www.bhphotovideo.com/c/browse/Lighting-Studio/ci/1161/N/4294551176",
            "https://www.bhphotovideo.com/c/browse/optics/ci/978/",
        ];
        processedUrls = [];
        cliReqIdInitials = "cbfc825c-c8ed-4b72-91fb-0c6ac0303c4c-cli-";
        currentReqIdCount = 16;
        cliReqId = `${cliReqIdInitials}${currentReqIdCount}`;
        aperture = 1;
    }
    
    // end of conditional config;


    await initializeScript(mainDirPath);

    console.log("Scraping has ended.")

}());