const callback = () => {


    let set = Array.from(document.querySelector("select#set").options).find(item => item.hasAttribute("selected")).innerText.trim(),
        setName = set.split(":").pop().trim()

    return Array.from(document.querySelectorAll(".priceGuideTable tbody tr"))
        .map(item => {

            let cardName = `${item.querySelector("td:first-child").innerText.trim()}`,
                multiFaced = cardName.includes(" // ") ? true : false,
                cardUri = item.querySelector("td:first-child .productDetail a").href + "?Language=English";

            return {    
                imagePaths : null,
                productName : null,
                productImage : '',
                cardEffect : null,  
                cardName,
                cardNumber : null,
                cardType : null,
                cardSubtype : null,
                class : null,
                cost : null,
                defenseValue : null,
                finish : "Regular",
                intellect : null,
                life : null,
                pitchValue : null,
                power : null,
                rarity : null,
                setName : set,

                multiFaced,
                imageUris : [],
                cardUri,
            };
        });

};


const waitMethods = [
];


const type = "list";


const paginated = false;


module.exports =  {callback, waitMethods, type, paginated};