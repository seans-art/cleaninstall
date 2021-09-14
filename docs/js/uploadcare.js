console.log("scripts appear");
UPLOADCARE_PUBLIC_KEY = '2281dd5738c1eb6ea46c';
// import uploadcare from '../../node_modules/uploadcare-widget/uploadcare.js';


// get a widget reference
const widget = uploadcare.SingleWidget("[role=uploadcare-uploader]");

// listen to the "upload completed" event
widget.onUploadComplete(fileInfo => {
  // get a CDN URL from the file info
  console.log(fileInfo.cdnUrl);
});

