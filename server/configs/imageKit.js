import ImageKit from "imagekit";
var imagekit = new ImageKit({
    publickey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});
I
export default imagekit;