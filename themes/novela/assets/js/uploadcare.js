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
function selectSize(){
    let size = document.getElementsByName('size-select')[0].value;
    console.log(size);
    sizeChoice = size;
    return sizeChoice;
}
document.getElementsByName('size-select')[0].onchange = selectSize;

// Get value from Radio Selectors
// document.getElementsByName('color-select');
// document.getElementsByName('color-select')[0].value;
// document.querySelector('input[name="color-select"]:checked').value;
let colorList = document.getElementsByName('color-select');
let previous = null;
let colorChoice;
for (let i = 0; i < colorList.length; i++) {
    colorList[i].addEventListener('change', function() {
        if (this !== previous) {
            previous = this;
        }
        console.log("current value is: " + this.value)
        colorChoice = this.value;
    });
}

let dataSkuCode = sizeChoice + scolorChoice;
let btnAddToOrder = document.getElementById('add-to-order');
if (dataSkuCode){
    document.getElementById('add-to-order').setAttribute('data-sku-code', dataSkuCode);
}
