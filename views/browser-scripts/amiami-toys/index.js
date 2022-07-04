console.log("We are firing it up");

let linkObjectsUnparsed = [
    {
        "category": "Bishoujo Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9713",
        "subcategory": "Completed Figures"
    },
    {
        "category": "Bishoujo Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1202",
        "subcategory": "Nendoroid"
    },
    {
        "category": "Bishoujo Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1209",
        "subcategory": "figma"
    },
    {
        "category": "Bishoujo Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9709",
        "subcategory": "Plastic Kit / Plastic Models"
    },
    {
        "category": "Bishoujo Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1123",
        "subcategory": "Action Figures"
    },
    {
        "category": "Bishoujo Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9711",
        "subcategory": "Garage Kits"
    },
    {
        "category": "Character Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=10080",
        "subcategory": "Action Figures"
    },
    {
        "category": "Character Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9726",
        "subcategory": "Completed Figures"
    },
    {
        "category": "Character Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1223",
        "subcategory": "Nendoroid (General)"
    },
    {
        "category": "Character Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9723",
        "subcategory": "figma"
    },
    {
        "category": "Character Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9722",
        "subcategory": "Plastic Kit / Plastic Models"
    },
    {
        "category": "Character Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1033",
        "subcategory": "Garage Kits"
    },
    {
        "category": "Character Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9728",
        "subcategory": "Scenery Set/Accessories"
    },
    {
        "category": "Character Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1212",
        "subcategory": "Others"
    },
    {
        "category": "Foreign Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9727",
        "subcategory": "Military Action Figures"
    },
    {
        "category": "Foreign Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1094",
        "subcategory": "TV Series"
    },
    {
        "category": "Foreign Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=8510",
        "subcategory": "Video Game Characters"
    },
    {
        "category": "Foreign Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1110",
        "subcategory": "Other Anime Titles"
    },
    {
        "category": "Foreign Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1101",
        "subcategory": "Other American Comics"
    },
    {
        "category": "Foreign Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1108",
        "subcategory": "Other Movies"
    },
    {
        "category": "Foreign Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1102",
        "subcategory": "Musicians/Celebrities"
    },
    {
        "category": "Foreign Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1084",
        "subcategory": "Alien/Predator"
    },
    {
        "category": "Foreign Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1086",
        "subcategory": "Star Wars"
    },
    {
        "category": "Foreign Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1090",
        "subcategory": "Star Trek"
    },
    {
        "category": "Foreign Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1096",
        "subcategory": "X-MEN"
    },
    {
        "category": "Foreign Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1097",
        "subcategory": "Spider-Man"
    },
    {
        "category": "Foreign Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1099",
        "subcategory": "Batman"
    },
    {
        "category": "Foreign Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9731",
        "subcategory": "Iron Man"
    },
    {
        "category": "Foreign Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1366",
        "subcategory": "Other Genres"
    },
    {
        "category": "Dolls",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9626",
        "subcategory": "Furniture"
    },
    {
        "category": "Dolls",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=41",
        "subcategory": "Azone"
    },
    {
        "category": "Dolls",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1042",
        "subcategory": "Pullip"
    },
    {
        "category": "Dolls",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1043",
        "subcategory": "Blythe"
    },
    {
        "category": "Dolls",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1367",
        "subcategory": "momoko DOLL"
    },
    {
        "category": "Dolls",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=541",
        "subcategory": "Barbie"
    },
    {
        "category": "Dolls",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=46",
        "subcategory": "CUTIES"
    },
    {
        "category": "Dolls",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1461",
        "subcategory": "Display Stands"
    },
    {
        "category": "Dolls",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1041",
        "subcategory": "Non-Character Bodies"
    },
    {
        "category": "Dolls",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1044",
        "subcategory": "Other Character Bodies"
    },
    {
        "category": "Dolls",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1329",
        "subcategory": "Foreign Manufacturers"
    },
    {
        "category": "Dolls",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1312",
        "subcategory": "Other Character Dolls"
    },
    {
        "category": "Dolls",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=48",
        "subcategory": "Other Groove Companies"
    },
    {
        "category": "Dolls",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9744",
        "subcategory": "Tokyo Doll"
    },
    {
        "category": "Gundam Toys",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate4=10100",
        "subcategory": "Action Figures"
    },
    {
        "category": "Gundam Toys",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate4=938",
        "subcategory": "Plastic Model Kits"
    },
    {
        "category": "Gundam Toys",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate4=942",
        "subcategory": "Other"
    },
    {
        "category": "Robots",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate4=9687",
        "subcategory": "Plastic Models (Main Body)"
    },
    {
        "category": "Robots",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate4=9721",
        "subcategory": "Plastic Models (Option Parts)"
    },
    {
        "category": "Robots",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate4=9688",
        "subcategory": "Complete Figures"
    },
    {
        "category": "Robots",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate4=1005",
        "subcategory": "Garage Kits"
    },
    {
        "category": "Tokusatsu Toys",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate4=971",
        "subcategory": "Figures"
    },
    {
        "category": "Tokusatsu Toys",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate4=979",
        "subcategory": "Arsenal Toys"
    },
    {
        "category": "Tokusatsu Toys",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate4=969",
        "subcategory": "Sentai Series"
    },
    {
        "category": "Tokusatsu Toys",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate4=976",
        "subcategory": "Kamen (Masked) Rider"
    },
    {
        "category": "Tokusatsu Toys",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate4=953",
        "subcategory": "Ultraman"
    },
    {
        "category": "Tokusatsu Toys",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate4=968",
        "subcategory": "Godzilla/Gamera, etc."
    },
    {
        "category": "Tokusatsu Toys",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate4=9725",
        "subcategory": "Action Figures"
    },
    {
        "category": "Tokusatsu Toys",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate4=984",
        "subcategory": "Other"
    },
    {
        "category": "Scale/Military",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=8488",
        "subcategory": "Plastic Model Kits"
    },
    {
        "category": "Scale/Military",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=945",
        "subcategory": "Radio Control"
    },
    {
        "category": "Scale/Military",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=950",
        "subcategory": "Wooden Models"
    },
    {
        "category": "Scale/Military",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=8489",
        "subcategory": "Other Completed Models"
    },
    {
        "category": "Scale/Military",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=973",
        "subcategory": "Sci-Fi Movies"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=947",
        "subcategory": "Choro-Q"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9921",
        "subcategory": "TOMICA"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9923",
        "subcategory": "TOMICA Limited"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9932",
        "subcategory": "KYOSHO"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9935",
        "subcategory": "GOOD SMILE RACING"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9917",
        "subcategory": "Wit's"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9919",
        "subcategory": "EBBRO"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9925",
        "subcategory": "RAI'S"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9930",
        "subcategory": "Spark"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9931",
        "subcategory": "ixo"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9934",
        "subcategory": "WELLY"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9918",
        "subcategory": "GREENLIGHT"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9920",
        "subcategory": "AUTOart"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9924",
        "subcategory": "Interallied"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9933",
        "subcategory": "Make Up"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9936",
        "subcategory": "Slot Cars"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9927",
        "subcategory": "Motorcycle Models"
    },
    {
        "category": "Car Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9928",
        "subcategory": "Others"
    },
    {
        "category": "Train Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9806",
        "subcategory": "Other sizes"
    },
    {
        "category": "Train Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9792",
        "subcategory": "N Gauge"
    },
    {
        "category": "Train Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9817",
        "subcategory": "HO/16.5mm"
    },
    {
        "category": "Train Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9805",
        "subcategory": "Z Gauge"
    },
    {
        "category": "Train Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9832",
        "subcategory": "Train Toys"
    },
    {
        "category": "Train Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9808",
        "subcategory": "Structures"
    },
    {
        "category": "Train Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9881",
        "subcategory": "Scenery"
    },
    {
        "category": "Train Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9829",
        "subcategory": "Other Goods"
    },
    {
        "category": "Train Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9841",
        "subcategory": "Books"
    },
    {
        "category": "Train Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9815",
        "subcategory": "Tools"
    },
    {
        "category": "Train Models",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9816",
        "subcategory": "Others"
    },
    {
        "category": "Tools / Paints / Material",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9592",
        "subcategory": "Paints / Solvent"
    },
    {
        "category": "Tools / Paints / Material",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9566",
        "subcategory": "Painting Tools"
    },
    {
        "category": "Tools / Paints / Material",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9590",
        "subcategory": "Adhesives / Putty"
    },
    {
        "category": "Tools / Paints / Material",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9588",
        "subcategory": "Polishing"
    },
    {
        "category": "Tools / Paints / Material",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9576",
        "subcategory": "Craft Tools"
    },
    {
        "category": "Tools / Paints / Material",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9585",
        "subcategory": "Material"
    },
    {
        "category": "Tools / Paints / Material",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9571",
        "subcategory": "Decal"
    },
    {
        "category": "Tools / Paints / Material",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=10138",
        "subcategory": "Other"
    },
    {
        "category": "Trading Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=230",
        "subcategory": "Bishoujo"
    },
    {
        "category": "Trading Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=397",
        "subcategory": "General"
    },
    {
        "category": "Trading Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=398",
        "subcategory": "Tokusatsu (SFX) / Live Action"
    },
    {
        "category": "Trading Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=405",
        "subcategory": "Robots"
    },
    {
        "category": "Trading Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=403",
        "subcategory": "Family Characters"
    },
    {
        "category": "Trading Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=399",
        "subcategory": "Miniatures"
    },
    {
        "category": "Trading Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=611",
        "subcategory": "Talents / Sports"
    },
    {
        "category": "Trading Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=401",
        "subcategory": "Vehicles, Military"
    },
    {
        "category": "Trading Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=406",
        "subcategory": "Animals"
    },
    {
        "category": "Trading Figures",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=407",
        "subcategory": "Other"
    },
    {
        "category": "Character Goods",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=413",
        "subcategory": "Bishoujo"
    },
    {
        "category": "Character Goods",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=414",
        "subcategory": "Anime"
    },
    {
        "category": "Character Goods",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=1462",
        "subcategory": "Robot Anime"
    },
    {
        "category": "Character Goods",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=639",
        "subcategory": "Games"
    },
    {
        "category": "Character Goods",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=418",
        "subcategory": "Tokusatsu (SFX)"
    },
    {
        "category": "Character Goods",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=415",
        "subcategory": "Family Characters"
    },
    {
        "category": "Character Goods",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=185",
        "subcategory": "Hugging Pillows / Cushions"
    },
    {
        "category": "Character Goods",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=10037",
        "subcategory": "Prepaid Cards"
    },
    {
        "category": "Character Goods",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=417",
        "subcategory": "Movies / Talents"
    },
    {
        "category": "Character Goods",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=8516",
        "subcategory": "History / Sengoku Era"
    },
    {
        "category": "Character Goods",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=416",
        "subcategory": "Other"
    },
    {
        "category": "Character Goods",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=10065",
        "subcategory": "Character Goods"
    },
    {
        "category": "Fashion",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=9902",
        "subcategory": "Men's Fashion"
    },
    {
        "category": "Fashion",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=9883",
        "subcategory": "Ladies' Fashion"
    },
    {
        "category": "Fashion",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=508",
        "subcategory": "Cosplay Goods"
    },
    {
        "category": "Fashion",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=9890",
        "subcategory": "Goods"
    },
    {
        "category": "Fashion",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=9897",
        "subcategory": "Accessories"
    },
    {
        "category": "Books/Mangas",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=204",
        "subcategory": "Manga (single volume)"
    },
    {
        "category": "Books/Mangas",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9836",
        "subcategory": "Novels"
    },
    {
        "category": "Books/Mangas",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=193",
        "subcategory": "Artbooks"
    },
    {
        "category": "Books/Mangas",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=203",
        "subcategory": "Idols Photobooks"
    },
    {
        "category": "Books/Mangas",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=158",
        "subcategory": "Anime Magazines / Mooks"
    },
    {
        "category": "Books/Mangas",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=165",
        "subcategory": "Figure / Hobby Magazines"
    },
    {
        "category": "Books/Mangas",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=223",
        "subcategory": "Other Magazines"
    },
    {
        "category": "Books/Mangas",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=205",
        "subcategory": "Game Guidebooks"
    },
    {
        "category": "Books/Mangas",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=160",
        "subcategory": "Card Games"
    },
    {
        "category": "Books/Mangas",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=167",
        "subcategory": "TRPG"
    },
    {
        "category": "Books/Mangas",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9664",
        "subcategory": "Manga/Novel Sets"
    },
    {
        "category": "Books/Mangas",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=166",
        "subcategory": "Other Books"
    },
    {
        "category": "Books/Mangas",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=9659",
        "subcategory": "Books/Comics"
    },
    {
        "category": "Video Games",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=10054",
        "subcategory": "Nintendo Switch"
    },
    {
        "category": "Video Games",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9772",
        "subcategory": "PlayStation 4"
    },
    {
        "category": "Video Games",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=10108",
        "subcategory": "PlayStation 5"
    },
    {
        "category": "Blu-ray Discs",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=9997",
        "subcategory": "Anime"
    },
    {
        "category": "Blu-ray Discs",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=10006",
        "subcategory": "Tokusatsu (SFX)"
    },
    {
        "category": "Blu-ray Discs",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=10008",
        "subcategory": "Japanese Films"
    },
    {
        "category": "Blu-ray Discs",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=10009",
        "subcategory": "Foreign Films"
    },
    {
        "category": "Blu-ray Discs",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=10005",
        "subcategory": "Female Idols"
    },
    {
        "category": "Blu-ray Discs",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=10004",
        "subcategory": "Other"
    },
    {
        "category": "DVDs",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=10069",
        "subcategory": "Live Action DVD"
    },
    {
        "category": "DVDs",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1373",
        "subcategory": "Anime"
    },
    {
        "category": "DVDs",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1392",
        "subcategory": "Tokusatsu (SFX)"
    },
    {
        "category": "DVDs",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1397",
        "subcategory": "Japanese Films"
    },
    {
        "category": "DVDs",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1374",
        "subcategory": "Foreign Films"
    },
    {
        "category": "DVDs",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1403",
        "subcategory": "Female Idols"
    },
    {
        "category": "DVDs",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=1382",
        "subcategory": "Other"
    },
    {
        "category": "DVDs",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate3=8552",
        "subcategory": "Anime DVD"
    },
    {
        "category": "DVDs",
        "url": "https://api.amiami.com/api/v1.0/items?s_cate2=10067",
        "subcategory": "DVD"
    },
];


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



const allGcodes = [];
const invalidCategoryLinkObjects = [];


function getLinkObjects(linkObjectsUnparsed, linkObjectsKey) {

    if(window.localStorage.getItem(linkObjectsKey)) {
        return JSON.parse(window.localStorage.getItem(linkObjectsKey));
    } else  {
        window.localStorage.setItem(linkObjectsKey, JSON.stringify(linkObjectsUnparsed));

        return linkObjectsUnparsed;
    }
}

function getCurrentLinkObjectIndex()    {
    if(window.localStorage.getItem("currentLinkObjectIndex")) {
        return Number(window.localStorage.getItem("currentLinkObjectIndex"));
    } else  {
        return 0;
    }
}

function setCurrentLinkObjectIndex(value)  {
    window.localStorage.setItem("currentLinkObjectIndex", Number(value));
    return value;
}


function getCurrentPageIndex()    {
    if(window.localStorage.getItem("currentPageIndex")) {
        return Number(window.localStorage.getItem("currentPageIndex"));
    } else  {
        return 1;
    }
}

function setCurrentPageIndex(value)  {
    window.localStorage.setItem("currentPageIndex", Number(value));
    return value;
}


function getRequestHeaders()    {

    return {
        "x-user-key": "amiami_dev",
    }
    
}

function getImageUrl(url)   {
    return `https://img.amiami.com${url}`;
}

function yenToDollars(price, roundedUp = false, conversionRate = 0.0074) {

    return roundedUp ? Math.ceil(price * conversionRate) - 0.01 : (price * conversionRate / 10) * 10;

}

function getPrices(price)   {

    return {
        priceInYen : `¥${price}`,
        priceInDollars : `$${yenToDollars(price)}`,
        price : `$${yenToDollars(price, true)}`,
    }

}


async function getProductDetails(ccUtilities, {gcode, category})   {
    let { apiRequest } = ccUtilities,
        apiUrl = `https://api.amiami.com/api/v1.0/item?gcode=${gcode}&lang=eng`;

    try {
        let  response = await apiRequest(apiUrl, {headers : getRequestHeaders()}),
            { item, RSuccess, RMessage } = response;


        console.log(response);

        if(!item && RMessage !== "OK")   {

            throw Error(RMessage);
        }

        let priceObject = item.price ? getPrices(item.price) : {};
        
        if(!RSuccess)    {
            throw Error("Request was not successfull");
        }

        return {
            statusOk : true,
            productObject : {
                category,
                productName : item.gname,
                description : item.spec && item.spec.length ? item.spec.trim().replace(/\r\n/g, "<br />") : null,
                
                ...priceObject,

                vendor : item.maker_name,
                imageUris : getImageUrl(item.main_image_url),
                productUri : apiUrl,
            }
        }

    } catch(err)    {

        console.log(err);

        return {
            statusOk : false,
            productObject : {
                productUri : apiUrl,
            }
        }
    }

}

async function getAllProductGcodes(ccUtilities, categoryLinkObject, pageCountLimit = false)    {
    let { apiRequest, isObjectInArray, slowDown } = ccUtilities,
        gcodeItems = [],
        { url } = categoryLinkObject;

    try {

        let response = await apiRequest(url, {headers : getRequestHeaders()}),
            { items, search_result, RSuccess, RMessage } = response;

        console.log(response);

        if(!RSuccess)   {

            console.log({items, search_result, RSuccess});
            console.log({
                message : "API Request failed : " + RMessage,
            })
            throw Error(RMessage);
        }

        let pagecnt = getCurrentPageIndex(),
            totalProducts = search_result.total_results,
            totalPages = pageCountLimit ? pageCountLimit : Math.ceil(search_result.total_results / 20);
       

        async function getNextPages(pagecnt, categoryLinkObject)    {

            await slowDown(5252);
            console.clear();

            let {category, subcategory, url} = categoryLinkObject,
                apiUrl = `${url}&pagecnt=${pagecnt}`,
                { items, RSuccess } = await apiRequest(apiUrl, {headers : getRequestHeaders()}),
                gcodeObjects = items.map(item => {
                    return {
                        gcode : item.gcode,
                        category, 
                        subcategory,
                    }
                }), 
                currentLinkObjectIndex = getCurrentLinkObjectIndex();
            

            for(let gcodeObject of gcodeObjects)    {
                if(!isObjectInArray(gcodeObject, gcodeItems))   {
                    gcodeItems.push(gcodeObject);
                }
            }

            console.table(gcodeItems);

            console.table({apiUrl, RSuccess, category, subcategory, totalPages, totalProducts, pagecnt, total : gcodeItems.length, currentLinkObjectIndex});


            await slowDown(5252);


            await scrapeProductsByCategory(ccUtilities, gcodeItems, category, subcategory, pagecnt, currentLinkObjectIndex);
            gcodeItems = [];
            

            if(pagecnt < totalPages)    {

                pagecnt += 1;

                setCurrentPageIndex(pagecnt);

                await getNextPages(pagecnt, categoryLinkObject);
            }
            
        }

        await getNextPages(pagecnt, categoryLinkObject);
        

        console.table(gcodeItems);

        
        

    } catch(err)    {

        console.log(err);

        await slowDown();

        invalidCategoryLinkObjects.push({categoryLinkObject, message : err.message});

        console.log(gcodeItems);

    }

}

async function scrapeProductsByCategory(ccUtilities, gcodeItems, category, subcategory, currentPageIndex, currentLinkObjectIndex)    {

    let { moderator, downloadEncodedText, slowDown } = ccUtilities,
        productObjects = [],
        unscrapedProductObjects = [];
    

    await moderator(gcodeItems, async (slicedArr) => {

        let promises = slicedArr.map(item => {
                return async function(){
                    let {gcode, category} = item;

                    if(allGcodes.includes(gcode))   {
                        return;
                    }

                    allGcodes.push(gcode);

                    await slowDown(3434);

                    let {productObject, statusOk} = await getProductDetails(ccUtilities, {gcode, category});

                    console.log({statusOk});

                    if(!statusOk)   {

                        unscrapedProductObjects.push(productObject);

                        

                    }                    

                    productObjects.push(productObject);

                    
                }
            });


        await Promise.all(promises.map(item => item()));


    }, 5);


    console.log(`\n\n\n`);
    console.log(`============++++++ UNSCRAPED PRODUCT OBJECTS ++++++============`);

    console.table(unscrapedProductObjects);
    
    console.log(`============++++++ end of unscraped product objects ++++++============`);
    console.log(`\n\n\n`);


    console.log(`\n\n\n`);
    console.log(`============++++++ Scraped CATEGORIZED PRODUCT OBJECTS ++++++============`);

    console.table(productObjects);

    console.log(`============++++++ end of Scraped CATEGORIZED product objects ++++++============`);
    console.log(`\n\n\n`);

    // print data here;

    await downloadEncodedText(productObjects, {category, subcategory, pageIndex : `pg-${currentPageIndex}`, linkObjectIndex : `loi-${currentLinkObjectIndex}` });

    
}

async function getAllProducts(ccUtilities, categoryLinkObjects)  {
    
    let { slowDown, moderator } = ccUtilities;

    await moderator(categoryLinkObjects, async(slicedArr) => {

        let currentLinkObjectIndex = getCurrentLinkObjectIndex(),
            promises = slicedArr.map(categoryLinkObject => {

            console.log({...categoryLinkObject, currentLinkObjectIndex});

            return async function() {
                
                await getAllProductGcodes(ccUtilities, categoryLinkObject);

                await slowDown();
                console.clear();
                
            }
        });

        await Promise.all(promises.map(item => item()));

        setCurrentLinkObjectIndex(currentLinkObjectIndex + 1);

        setCurrentPageIndex(1);

    }, 1);  

}

async function initializeScript() {
    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTM4ZjNmOTU1YTA1NDJjZDhmNTJiMjciLCJwZXJtaXNzaW9uTGV2ZWwiOjMsImlhdCI6MTY1NDQ2OTYwMiwiZXhwIjoxNjU1MDc0NDAyfQ.t1pSjZ8pSa9OOgaUGwqcuXgjbgpfTEiO9eSGdg7kAyU",
        ccUtilities = __cc_getUtilities(authToken),
        categoryLinkObjectsKey = "___cc_categoryLinkObjects",
        { slowDown } = ccUtilities,
        categoryLinkObjects = getLinkObjects(linkObjectsUnparsed, categoryLinkObjectsKey),
        currentLinkObjectIndex = getCurrentLinkObjectIndex();
        

    console.table(categoryLinkObjects);

    await slowDown();

    // console.clear();


    await getAllProducts(ccUtilities, categoryLinkObjects.slice(currentLinkObjectIndex));


    await slowDown();

    // console.clear();


    if(invalidCategoryLinkObjects.length){
        await downloadEncodedText(invalidCategoryLinkObjects, { status: "failed http requests" });
    }
    
    
    console.log("we have finished scraping the products...");

}

(async function(){


    console.log("hello there... Michael Norward");

    setCurrentLinkObjectIndex(154);

    // setCurrentPageIndex(2702);
    setCurrentPageIndex(12);

    // to be worked on next
    // pageIndex = 2585
    // loi = 58


    await initializeScript();


    console.log({message : "Well Done, Michael Norward!", scraperType : "Browser Scraper", website : "https://www.Amiami.com", author : "Michael Norward"});

}());