const callback = () => {

    let setName = Array.from(document.querySelector("select#set").options).find(item => item.hasAttribute("selected")).innerText.trim(),
        set = setName.split(":").pop().trim();

    return Array.from(document.querySelectorAll(".priceGuideTable tbody tr"))
        .map(item => {
            let cardName = `${item.querySelector("td:first-child").innerText.trim()}`,
                multiFaced = cardName.includes(" // ") ? true : false,
                cardUri = item.querySelector("td:first-child .productDetail a").href + "?Language=English&Printing=Normal%7CFoil";                    
                

            return {    
                imagePaths : [],
                cardName,
                cardNumber : null,  
                productImage : '',

                cardEffect : null,
                clan : null,
                critical : null,
                finish : null,
                grade : null,
                skill : null,
                [`Grade / Skill`] : null,
                nation : null,
                power : null,
                shield : null,
                race : null,
                rarity : null,
                set,
                setName,
                trigger : null,
                unit : null,

                multiFaced,
                imageUris : [],
                cardUri,
            };
        });
}


const waitMethods = [
];


const type = "list";


const paginated = false;


module.exports =  {callback, waitMethods, type, paginated};