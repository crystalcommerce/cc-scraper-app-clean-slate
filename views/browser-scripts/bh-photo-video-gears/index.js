console.log("We are firing it up");


/*

    NOTE : 

    We have to make api requests inside the browser so from their own website so their servers would allow us to do so.


    From their site we can make any request to our locally running server and that will be our way to store their data from their site to ours.



*/



let linkObjectsUnparsed = [
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
        "descriptionForUrl": "USB-Cables",
        "categoryId": "13351",
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
        "descriptionForUrl": "digital-cine-lenses",
        "categoryId": "25249",
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
        "descriptionForUrl": "Lens-Optics-Cleaning",
        "categoryId": "18804",
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
        "descriptionForUrl": "microphones-for-iphone-wireless-bluetooth",
        "categoryId": "22909",
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
        "descriptionForUrl": "way-radios",
        "categoryId": "52953",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "way-radios",
        "categoryId": "52954",
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
        "descriptionForUrl": "way-radios",
        "categoryId": "52922",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "way-radios",
        "categoryId": "52921",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "way-radios",
        "categoryId": "52919",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "way-radios",
        "categoryId": "52931",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "way-radios",
        "categoryId": "52935",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "way-radios",
        "categoryId": "52939",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "way-radios",
        "categoryId": "52940",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "way-radios",
        "categoryId": "52941",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "way-radios",
        "categoryId": "52927",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "way-radios",
        "categoryId": "52964",
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
        "descriptionForUrl": "Tripod-Leg-Accessories",
        "categoryId": "8165",
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
        "descriptionForUrl": "Digital-SLR-Video-Stabilizers",
        "categoryId": "3926",
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
        "descriptionForUrl": "articulating-camera-arms-monitor-mounts",
        "categoryId": "10461",
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
        "descriptionForUrl": "camera-hard-cases-waterproof",
        "categoryId": "16460",
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
        "descriptionForUrl": "case-and-luggage-locks",
        "categoryId": "31552",
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
    },
    {
        "descriptionForUrl": "streaming-media-switchers",
        "categoryId": "37927",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "4k-switchers",
        "categoryId": "53242",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "hdmi-switchers",
        "categoryId": "53241",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ndi-switchers",
        "categoryId": "53244",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "portable-switchers",
        "categoryId": "53243",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "built-in-recorder-switchers",
        "categoryId": "53245",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Production-Recording-Systems",
        "categoryId": "18203",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Live-Switcher",
        "categoryId": "2865",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "control-panel",
        "categoryId": "53246",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "control-panel-modules-accessories",
        "categoryId": "53247",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Video-Servers",
        "categoryId": "19284",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "input-modules",
        "categoryId": "53248",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "switchers-cases",
        "categoryId": "53249",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "tally-lights",
        "categoryId": "53254",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "switcher-s-power-supplies",
        "categoryId": "53253",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Live-Switcher-Accessories",
        "categoryId": "10230",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "switcher-software",
        "categoryId": "23908",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "virtual-sets",
        "categoryId": "53251",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "support-warranties",
        "categoryId": "53252",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "conference-teleprompters",
        "categoryId": "33876",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "-teleprompter-software",
        "categoryId": "23909",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "teleprompter-controllers",
        "categoryId": "23719",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "mounts-brackets",
        "categoryId": "23720",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "teleprompter-monitors",
        "categoryId": "33875",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Teleprompters",
        "categoryId": "2501",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Chroma-Key-Kits",
        "categoryId": "7051",
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
        "descriptionForUrl": "chroma-key-software",
        "categoryId": "39427",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Character-Generators-Graphic-Solutions",
        "categoryId": "16753",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Closed-Caption-Video-Alert-Systems",
        "categoryId": "16754",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Vector-Scopes-Waveform-Monitors",
        "categoryId": "2143",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Test-Measurement-Accessories",
        "categoryId": "6946",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "waveform-monitor-scope-software",
        "categoryId": "23998",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Test-Measurement-Tools",
        "categoryId": "6943",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Test-Chart-Accessories",
        "categoryId": "18186",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "White-Balancing-Cards-Filters",
        "categoryId": "18182",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Directors-Accessories",
        "categoryId": "5724",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "director-s-viewfinder-accessories",
        "categoryId": "23558",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Production-Slates",
        "categoryId": "16664",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "production-slate-accessories",
        "categoryId": "23557",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "on-air-lights",
        "categoryId": "5722",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Video-Monitors",
        "categoryId": "2199",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "battery-mounting-plates",
        "categoryId": "41562",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "power-adapter-cables",
        "categoryId": "41559",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "monitor-power-supplies",
        "categoryId": "41560",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "other-power-accessories",
        "categoryId": "41561",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Monitor-Hoods",
        "categoryId": "10468",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "monitor-cases",
        "categoryId": "41328",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "production-monitor-brackets",
        "categoryId": "41326",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "director-s-monitor-brackets",
        "categoryId": "36613",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "director-s-monitor-bracket-accessories",
        "categoryId": "42036",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Rackmounts-Slides-for-Monitors",
        "categoryId": "3763",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "monitor-wall-mounts",
        "categoryId": "27605",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "monitor-table-top-stand-mounts",
        "categoryId": "27607",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "monitor-ceiling-mounts",
        "categoryId": "27609",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "monitor-floor-stands",
        "categoryId": "27608",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "monitor-pole-truss-mounts",
        "categoryId": "27611",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Enclosures-Mounts",
        "categoryId": "17221",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "video-wall-mounts",
        "categoryId": "32432",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "monitor-riser-stands",
        "categoryId": "40612",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Mounting-Adapters",
        "categoryId": "10463",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Arms",
        "categoryId": "11419",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Mounting-Accessories",
        "categoryId": "10464",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Boards-Interface-Cards",
        "categoryId": "10466",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Speakers-Accessories",
        "categoryId": "5169",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "video-wall-components",
        "categoryId": "41332",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "screen-protectors",
        "categoryId": "41331",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "touch-panel-overlays",
        "categoryId": "41330",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "monitor-color-calibration-tools",
        "categoryId": "12000",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Monitor-Accessories",
        "categoryId": "2146",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "computer-lcd-macbook-screen-cleaners-sprays",
        "categoryId": "18803",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "portable-raid-recorders",
        "categoryId": "28035",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Hard-Disk-Recorder-Accessories",
        "categoryId": "7242",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "mounting-brackets",
        "categoryId": "39703",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "battery-mounting-plates",
        "categoryId": "39701",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "power-adapter-cables",
        "categoryId": "39702",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "video-recording-media",
        "categoryId": "39484",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "video-recording-media-accessories",
        "categoryId": "39485",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "vtr-accessories",
        "categoryId": "39737",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Optical-Drives-Burners",
        "categoryId": "13277",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dvd-duplicators-cd-printer-machines",
        "categoryId": "13278",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Tape-DLT-Drives",
        "categoryId": "6684",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "archiving-accessories",
        "categoryId": "22446",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "streaming-media-internal-boards",
        "categoryId": "37926",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "streaming-media-software",
        "categoryId": "23888",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Video-Server-Accessories",
        "categoryId": "19285",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "encoding-software",
        "categoryId": "23039",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "wireless-streaming-devices",
        "categoryId": "38525",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "streaming-camcorders",
        "categoryId": "38526",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "streaming-ptz-cameras",
        "categoryId": "39492",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "streaming-ptz-camera-kits",
        "categoryId": "46756",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "mobile-streaming-microphones",
        "categoryId": "46782",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "mobile-lights",
        "categoryId": "46799",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "mobile-devices-mounts-stands",
        "categoryId": "46779",
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
        "descriptionForUrl": "attachment-cases-kits",
        "categoryId": "24357",
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
        "descriptionForUrl": "live-streaming-cameras",
        "categoryId": "46772",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "web-streaming-microphones",
        "categoryId": "46784",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "webcam-lighting",
        "categoryId": "46773",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "backgrounds",
        "categoryId": "46794",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "external-capture-devices",
        "categoryId": "46766",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "smart-displays",
        "categoryId": "46829",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "tripods-for-streaming",
        "categoryId": "46800",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "usb-cables-for-streaming",
        "categoryId": "46788",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "hdmi-cables-for-streaming",
        "categoryId": "46791",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Composite-Video-Cables",
        "categoryId": "4184",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "computer-usb-hubs",
        "categoryId": "8411",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Podcasting-Solutions",
        "categoryId": "14837",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "USB-Microphones",
        "categoryId": "14713",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "portable-digital-recorders-for-podcasting",
        "categoryId": "48172",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "podcasting-mixers-recorders",
        "categoryId": "46432",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Audio-Interfaces-Systems",
        "categoryId": "14834",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Music-Production-Software",
        "categoryId": "14793",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Studio-Headphones",
        "categoryId": "12223",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Mic-Stands-Boom-Arms",
        "categoryId": "14715",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Headphone-Amplifiers",
        "categoryId": "1817",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "microphone-pop-filters-reflection",
        "categoryId": "14719",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "microphone-windscreens-foam-cover-balls-muffs",
        "categoryId": "14720",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "cross-converter",
        "categoryId": "41780",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "scan-converter",
        "categoryId": "41782",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "scaler",
        "categoryId": "41783",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Converters",
        "categoryId": "6246",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Routers-Switchers",
        "categoryId": "16749",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Patchbays",
        "categoryId": "5667",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "cables-adapters",
        "categoryId": "44856",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "expansion-board",
        "categoryId": "44861",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "bulkhead-panel",
        "categoryId": "44857",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "chasis-components",
        "categoryId": "44858",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "controllers",
        "categoryId": "44860",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "mounts-racks-accessories",
        "categoryId": "44863",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "power-accessories",
        "categoryId": "44867",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "software-license-support",
        "categoryId": "44870",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "touch-panels",
        "categoryId": "44872",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "trasmitters-receivers",
        "categoryId": "44875",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Modules",
        "categoryId": "5676",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "distribution-amplifiers-accessories",
        "categoryId": "44888",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Twisted-Pair-Fiber-Optics-Interface",
        "categoryId": "5728",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dvi-vga-kvm-extenders",
        "categoryId": "24193",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "cables-connectors",
        "categoryId": "44911",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "power-accessories",
        "categoryId": "44912",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "controllers",
        "categoryId": "44913",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "transmitters-receivers",
        "categoryId": "44914",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "rack-frames",
        "categoryId": "44910",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "expansion-board",
        "categoryId": "44916",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "kvm-accessories",
        "categoryId": "44915",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Distribution-Amplifiers",
        "categoryId": "5230",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Black-Burst-Sync-Pattern-Generators",
        "categoryId": "6945",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories-for-Signal-Generators",
        "categoryId": "6947",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Test-Generators",
        "categoryId": "2144",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "test-equipment-accessories",
        "categoryId": "42043",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "rf-equipment",
        "categoryId": "23795",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "video-editing-software",
        "categoryId": "16546",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "video-plug-ins",
        "categoryId": "23118",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "computer-video-animation-software",
        "categoryId": "23037",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "pre-production-software",
        "categoryId": "23038",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Royalty-Free-Video-Media",
        "categoryId": "6711",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Post-Production-Training",
        "categoryId": "16579",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Complete-Video-Editing-Systems",
        "categoryId": "13533",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Application-Editing-Keyboards",
        "categoryId": "13367",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Event-Controllers",
        "categoryId": "4018",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Video-Hardware-Accessories",
        "categoryId": "13554",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Virtual-Processor-Plug-Ins",
        "categoryId": "14795",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Virtual-Instruments",
        "categoryId": "14794",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Notation-Utility-Software",
        "categoryId": "14797",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Instructional-Tutorial",
        "categoryId": "14796",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "USB-License-Keys",
        "categoryId": "12454",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "AD-DA-Converters",
        "categoryId": "14831",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "DSP-Accelerators",
        "categoryId": "14833",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Format-Converters",
        "categoryId": "14832",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "WordClock-Syncronization",
        "categoryId": "14835",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "MIDI-Interfaces",
        "categoryId": "14836",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories",
        "categoryId": "14838",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "midi-keyboard-controllers-usb",
        "categoryId": "14840",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "midi-control-surfaces-fader-controllers",
        "categoryId": "14841",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Drum-Pad-Controllers",
        "categoryId": "14842",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Wind-Controllers",
        "categoryId": "14843",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Accessories",
        "categoryId": "14844",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "audio-interfaces",
        "categoryId": "22903",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "iphone-ios-midi-controllers-bluetooth",
        "categoryId": "22904",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "midi-interfaces",
        "categoryId": "22906",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "mixers",
        "categoryId": "22907",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "iphone-ipad-ios-guitar-interfaces",
        "categoryId": "22911",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ios-iphone-cables-adapters",
        "categoryId": "22913",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "stands-mounts",
        "categoryId": "22914",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "microphone-accessories",
        "categoryId": "22910",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Mac-Pro",
        "categoryId": "12517",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "apple-macbook-laptops",
        "categoryId": "13223",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "iMac",
        "categoryId": "6490",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Windows-Computers",
        "categoryId": "16360",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "external-hard-drives-portable-usb",
        "categoryId": "6543",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Computer-Monitors",
        "categoryId": "6559",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Audio-Application-Keyboards",
        "categoryId": "12410",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Sample-CDs-DVDs",
        "categoryId": "15019",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Sound-Effects-CDs-DVDs",
        "categoryId": "15021",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Royalty-Free-Production-Music",
        "categoryId": "15022",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "creative-video-editing-laptops",
        "categoryId": "35807",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "mobile-workstations",
        "categoryId": "24895",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "thunderbolt-hard-drives",
        "categoryId": "51319",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "usb-hard-drives",
        "categoryId": "51321",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "portable-hard-drives",
        "categoryId": "50717",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "external-hard-drive-accessories",
        "categoryId": "30546",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Controller-Cards",
        "categoryId": "13357",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "usb-controller-cards",
        "categoryId": "27004",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Hard-Drive-Enclosures",
        "categoryId": "8413",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "internal-hard-drives",
        "categoryId": "6525",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "expansion-drives",
        "categoryId": "25993",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "internal-hard-drive-accessories",
        "categoryId": "30547",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "hard-drive-cage-tray",
        "categoryId": "25559",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "degaussers-erasers",
        "categoryId": "38075",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "drive-duplicators",
        "categoryId": "32095",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "desktop-ssds",
        "categoryId": "30901",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "portable-ssds",
        "categoryId": "30902",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "internal-ssds",
        "categoryId": "30903",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ssd-arrays",
        "categoryId": "30905",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "expansion-ssds",
        "categoryId": "30904",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ssd-nas-drives",
        "categoryId": "35364",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "ssd-nas-expansion-drives",
        "categoryId": "35365",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "usb-flash-drives",
        "categoryId": "35683",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Hard-Drive-Arrays",
        "categoryId": "14075",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "hard-drive-array-accessories",
        "categoryId": "30548",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Servers",
        "categoryId": "15779",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "cloud-storage",
        "categoryId": "26901",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "nas-enclosures",
        "categoryId": "26903",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "nas-expansion-drives",
        "categoryId": "30532",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "nas-server-drive-trays",
        "categoryId": "30531",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "nas-memory-ram",
        "categoryId": "52808",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Server-Accessories",
        "categoryId": "16487",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "server-nas-warranties",
        "categoryId": "24320",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "enterprise-raid-software",
        "categoryId": "23873",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Optical-Media-Printers",
        "categoryId": "6177",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "blank-cd-dvd-blu-ray-discs",
        "categoryId": "13279",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "CD-DVD-Media-Cases-Albums",
        "categoryId": "5252",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Optical-Media-Duplicator-Accessories",
        "categoryId": "8452",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "dvd-blu-ray-ripping-burning-software",
        "categoryId": "13282",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "optical-media-printer-accessories",
        "categoryId": "23929",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "tapes-archiving-lto-data-storage",
        "categoryId": "26928",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "encrypted-hard-drives",
        "categoryId": "50381",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "CPUs",
        "categoryId": "19865",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Motherboards",
        "categoryId": "19864",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "server-power-supplies",
        "categoryId": "30501",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "computer-cases",
        "categoryId": "22356",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Cardbus-Chassis",
        "categoryId": "13355",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "desktop-computer-mounts-stands",
        "categoryId": "28458",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "desktop-computer-case-accessories",
        "categoryId": "30827",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "server-rackmount-chassis",
        "categoryId": "30368",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Graphic-Cards",
        "categoryId": "6567",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Display-Card-Accessories",
        "categoryId": "7581",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "gpus",
        "categoryId": "22505",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "controller-cards",
        "categoryId": "30910",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "server-systems",
        "categoryId": "26932",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "terminal-thin-clients",
        "categoryId": "26455",
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
        "descriptionForUrl": "hmi-plasma-light",
        "categoryId": "1377",
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
        "descriptionForUrl": "Sandbags-Weight-Bags",
        "categoryId": "1373",
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
        "descriptionForUrl": "lamps",
        "categoryId": "25279",
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
        "descriptionForUrl": "sd-micro-sd-card-holders-memory-card-cases",
        "categoryId": "19697",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "SxS-PRO-Memory-Cards",
        "categoryId": "13581",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "archiving-media",
        "categoryId": "22445",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Video-Tapes",
        "categoryId": "14725",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Broadcast-Video-Tapes",
        "categoryId": "4140",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Cleaning-Cassettes",
        "categoryId": "1986",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Tape-Degaussers-Erasers",
        "categoryId": "1987",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Other-Accessories",
        "categoryId": "12695",
        "pageNumber": 1,
        "filters": []
    },
    {
        "descriptionForUrl": "Media-Storage-Units",
        "categoryId": "2215",
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

    linkObjectIndex = 696; //497; //163; // 160; //6; // 5;
    totalNumberOfProducts = 42772; // 138340; // 134129; // 77917; // 74083; // 73174; // 48653; // 4606;
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
            "https://www.bhphotovideo.com/c/browse/Professional-Video/ci/3755/N/4294545851",
            // "https://www.bhphotovideo.com/c/browse/Lighting-Studio/ci/1161/N/4294551176",
            // "https://www.bhphotovideo.com/c/browse/optics/ci/978/",
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