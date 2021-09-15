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

function selectSize(){
    let size = document.getElementsByName('size-select')[0].value;
    console.log(size);
    return size;
}
document.getElementsByName('size-select')[0].onchange = selectSize;

function selectColor(){
    let style = document.querySelector('input[name="color-select"]:checked').value;
    console.log(style);
    return style;
}
document.getElementsByName('color-select')[0].onchange = selectColor;
document.getElementsByName('color-select')[1].onchange = selectColor;

// first instance of color picker
document.getElementsByName('color-select')[0].addEventListener('onChange', function() {
    let style = document.querySelector('input[name="color-select"]:checked').value;
    console.log(style);
    return style;
});

let dataSkuCode = sizeChoice + styleChoice;
let btnAddToOrder = document.getElementById('add-to-order');
if (dataSkuCode){
    document.getElementById('add-to-order').setAttribute('data-sku-code', dataSkuCode);
}
