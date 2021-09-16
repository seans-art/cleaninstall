UPLOADCARE_PUBLIC_KEY = '2281dd5738c1eb6ea46c';
// import uploadcare from '../../node_modules/uploadcare-widget/uploadcare.js';

// get a widget reference
const widget = uploadcare.SingleWidget("[role=uploadcare-uploader]");

// Select a canvas size and return the selected value
let sizeChoice;
function selectSize(){
    let size = document.getElementsByName('size-select')[0].value;
    sizeChoice = size;
    if(colorChoice && sizeChoice){
        setSku();
    }
    return sizeChoice;
}
document.getElementsByName('size-select')[0].onchange = selectSize;

// Select a color type and return the selected value
let colorList = document.getElementsByName('color-select');
let previous = null;
let colorChoice;
for (let i = 0; i < colorList.length; i++) {
    colorList[i].addEventListener('change', function() {
        if (this !== previous) {
            previous = this;
        }
        colorChoice = this.value;
        if(colorChoice && sizeChoice){
            setSku();
        }
    });
}

// Set sku to the joined selected values
function setSku() {
    if(colorChoice && sizeChoice){
        let btnAddToOrder = document.getElementById('add-to-order');
        let dataSkuCode = sizeChoice + colorChoice;
        btnAddToOrder.setAttribute('data-sku-code', dataSkuCode);
    }
}