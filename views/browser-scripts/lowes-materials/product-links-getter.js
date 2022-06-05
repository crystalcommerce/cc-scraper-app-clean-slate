let categoryLinks = divContainers.map(div => {
    let mainCategory = div.querySelector("div > a h2").innerText.trim(),
        url = div.querySelector("div > a").href;

    return {
        categoryTags : [mainCategory],
        url
    }

});
function productLinksGetter(parentElement, ...categoryTagList)   {
    return Array.from(parentElement.querySelectorAll("li a")).map(item => {
        let categoryTags = [],
            additionalTag = item.innerText.trim(),
            url = item.href;
        categoryTags.push(...categoryTagList);
        categoryTags.push(additionalTag);
        return {
            categoryTags,
            url
        }
    });
}