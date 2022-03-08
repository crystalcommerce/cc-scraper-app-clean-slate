const axios = require("axios");
const fileDownloader = require("../core/file-downloader");
const { getMimeType, getFileObject, getFileExt, getFileExtensionsByMimeType, getSpecifiedExt, createDirPath } = require("../utilities/file-system");
const path = require("path");





async function getContentType(url)    {

    

    let initialRequest = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        }),
        mimeType = initialRequest.headers["content-type"],
        fileExtensions = getFileExtensionsByMimeType(mimeType),
        urlObject = new URL(url);
        webDeclaredExt = getSpecifiedExt(url, fileExtensions);

    return {
        url,
        mimeType,
        fileExtensions,
        webDeclaredExt,
        urlObject,
        // data : initialRequest.data,
    }

}
(async () => {

    let jpeg1 = "https://img.freepik.com/free-vector/abstract-colorful-wave-transparent-stylish-background_1055-6965.jpg?size=338&ext=jpg",
        jpeg2 = "https://product-images.tcgplayer.com/257760.jpg?sample=true&not-doing-anything=false",
        jpeg3 = "https://i.pinimg.com/originals/cf/b8/75/cfb875ac3b1c8575b051af65e3f00488.png",
        jpeg4 = "https://media.comicbook.com/files/images/default.jpg?auto=webp";

    // console.log(await getContentType(jpeg1));
    // console.log(await getContentType(jpeg2));
    // console.log(await getContentType(jpeg3));
    // console.log(await getContentType(jpeg4));

    let downloadResult1 = await fileDownloader(jpeg4, "sample-image-test", path.join(__dirname, "sample-folder-3", "another-sample-folder-4"), "jpg");

    // let dirResult = await createDirPath(__dirname, "sample-folder-2", "another-sample-folder-2");
    // console.log(dirResult);

    let downloadResult2 = await fileDownloader(jpeg1, "The new image", path.join(__dirname, "test1", "test-2"));

    console.log(downloadResult1);
    console.log(downloadResult2);

})()

