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

                    console.log(urlType);
                    console.table(payloadObject);

                if(urlType === "buy")  {
                    let {descriptionForUrl, categoryId} = payloadObject,
                        linkObject = {descriptionForUrl, categoryId, pageNumber : 1, filters : []};
                    if(!isObjectInArray(linkObject, linkObjectsUnparsed, ["descriptionForUrl", "categoryId"]))    {
                        linkObjectsUnparsed.push(linkObject);
                        console.log("\n\n\n===========================\n===========================\n===========================\n\n\n");
                        
                        console.table(linkObjectsUnparsed);
                        
                        

                    }
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
                        }

                        if(!processedUrls.includes(item))    {
                            processedUrls.push(item);
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
            console.log({message : "This is the extracted Category Paths"})
            console.table(extractedCategoryPaths);
            await getNestedCategoryLinks(ccUtilities, extractedCategoryPaths);
        }

        console.log({message : "This is the extracted Category Paths"})
        console.table(extractedCategoryPaths);

        console.log("\n\n\n===========================\n===========================\n===========================\n\n\n");
        console.table(linkObjectsUnparsed);

        clearInterval(interval);

        let [primaryLink] = slicedArr;
        if(primaryCategoryLinks.includes(primaryLink)) {
            console.log({
                message : "We have finished one of the primary Category Links",
                url : primaryLink,
            });
        }
    }, 1);
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
                largestImage = Array.isArray(imagesArray) ? imagesArray.reduce((a, b) => {

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

                
                productObjects.push(...cleansedData);
            }

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


        console.log({
            message : `This is page number : ${pageNumber}`,
            pageNumber,
            totalPages
        })
        console.table(allProducts);

        if(pageNumber < totalPages) {
            pageNumber += 1;

            await getSucceedingPages(categoryId, pageNumber, descriptionForUrl, filters, totalPages);
        }
        
    }

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
}


// get all products
async function getAllProducts({ccUtilities, categoryLinkObjects})  {

    let { downloadEncodedText, moderator, isObjectInArray, slowDown } = ccUtilities;

    await moderator(categoryLinkObjects, async (slicedArr) => {

        let promises = slicedArr.map(categoryLinkObject => {
            return async function() {

                let allProductObjects = await getAllProductsByCategory({ccUtilities, categoryLinkObject}),
                    {category, subcategory} = allProductObjects[0];

                
                console.table(allProductObjects);

                productsPerCategory = allProductObjects.length;
                totalNumberOfProducts += allProductObjects.length;

                console.log({
                    productsPerCategory,
                    totalNumberOfProducts,
                });

                // save data to database  OR download the encoded text files here;

                await downloadEncodedText(allProductObjects, {
                    category, subcategory
                });

                await slowDown()
            }
        });

        await Promise.all(promises.map(item => item()));

    }, 1);


    console.log({
        totalNumberOfProducts,
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

    let productObjects = await getAllProducts({ccUtilities, categoryLinkObjects : categoryLinkObjects.slice(0, 2)});

    console.log(productObjects);
}

(async function(){


    console.log("hello there... Michael Norward");

    let mainDirPath = `H:/My Drive/Crystal Commerce`;



    // these are conditional config for turning things on and off;

    window.localStorage.removeItem("___cc_categoryLinkObjects");

    weHaveLinkObjects = true;

    if(!weHaveLinkObjects) {
        // linkObjectsUnparsed = [];
        primaryCategoryLinks = [
            "https://www.bhphotovideo.com/c/browse/Photography/ci/989/N/4294538916",
            "https://www.bhphotovideo.com/c/browse/Professional-Video/ci/3755/N/4294545851",
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