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

// Select a dropdown value and pass it to the clayer sku attribute
window.addEventListener('load', function() {
    console.log('test');
})

// TODO: put a null default for both options
let sizeChoice;
let styleChoice;

document.getElementsByName('size-select')[0].addEventListener('onChange', function() {
    let size = document.getElementsByName('size-select')[0].value;
    sizeChoice = size;
    console.log(sizeChoice);
});

document.getElementsByName('style-select')[0].addEventListener('onChange', function() {
    let style = document.getElementsByName('style-select')[0].value;
    styleChoice = style;
    console.log(styleChoice);
});

let dataSkuCode = sizeChoice + styleChoice;
let btnAddToOrder = document.getElementById('add-to-order');
if (dataSkuCode){
    document.getElementById('add-to-order').setAttribute('data-sku-code', dataSkuCode);
}
