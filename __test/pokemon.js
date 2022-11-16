(name) => {

    function toCapitalize(str)  {
        return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    }

    function toCamelCase(str, url=false, initialCap=false)  {
        let separator = url ? "-" : " ";
        return str.toLowerCase().split(`${separator}`).map((item, index) => index === 0 && !initialCap ? item : toCapitalize(item)).join("");
    }

    function getObject(item)    {
        let object = {},
            keys = item.querySelector("strong").innerText.trim().split(" / ").map(item => toCamelCase(item.trim().replace(/:/, ""))),
            values = function(){
                if(keys.includes("cardText"))   {
                    // special handler for cardText or ability;
                    let abilityContainer = item.querySelector("span strong"),
                        hasAbility = abilityContainer && abilityContainer.innerText.includes("Ability") ? true : false;
                    if(hasAbility)  {
                        let index = keys.findIndex(item => item === "cardText");
                        keys.splice(index, 1, "ability");
                    }
                    console.log(item.querySelector("span").innerText.trim());
                    return [item.querySelector("span").innerText.trim().replace(/\n/g, " <br />")];
                } else  {
                    return item.querySelector("span").innerText.trim().split(" / ").map(item => item.trim().replace(/\n/g, " <br />"));
                }
            }();

        for(let i = 0; i < keys.length; i++)    {
            if(keys[i] === "attack1")   {
                keys[i] = `attack # 1`;
            } else if(keys[i] === "attack2")    {
                keys[i] = `attack # 2`;
            } else if(keys[i] === 'attack3')    {
                keys[i] = `attack # 3`;
            }

            object[keys[i]] = values[i];
        }
        return object;
    }

    function getImages()    {
        return Array.from(document.querySelectorAll(".image-set__square .swiper-wrapper .swiper-slide .lazy-image__wrapper > img"))
            .filter(item => {
                return item.classList.contains("v-lazy-image");
            })
            .map(item => {
                if(item.getAttribute("srcset")) {
                    let imageSrcArr = item.getAttribute("srcset")
                        .split(","),
                        foundImageSrc = function(){
                            if(imageSrcArr.find(item => item.includes(" 2x")))    {
                                return imageSrcArr.find(item => item.includes(" 2x"))
                            } else if(imageSrcArr.find(item => item.includes(" 1.5x"))) {
                                return imageSrcArr.find(item => item.includes(" 1.5x"))
                            } else  {
                                return imageSrcArr.find(item => item.includes(" 1x"))
                            }
                        }();
                    
                    let imageUri = foundImageSrc.split(" ")
                        .shift();
                    return imageUri.replace(/"/g, "").replace("/filters:quality(10)", "");
                } else  {
                    return item.src;
                }
            });
    }

    function findFinish() {
        let foiledFinish = Array.from(document.querySelectorAll(".search-layout .listing-item")).map(item => {
                return item.querySelector(".listing-item__condition").innerText.trim();
            }).find(item => item.includes("Foil") === ""),
            priceHeader = document.querySelector(".price-points__header");
    
        if(name.toLowerCase().includes("foil") || priceHeader.innerText.toLowerCase().includes("foil"))   {
            return "Foil";
        } else  {
            return foiledFinish ? foiledFinish : "Regular";
        }
    }


    let detailsList = Array.from(document.querySelectorAll(".product__item-details__attributes > li"));
        
    let additionalCardObject = {};
    for(let list of detailsList)    {
        Object.assign(additionalCardObject, getObject(list));
    }

    additionalCardObject.imageUris = getImages();

    additionalCardObject.finish = findFinish();

    return additionalCardObject;

}