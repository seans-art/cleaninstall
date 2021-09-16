// import uploadcare from '../../node_modules/uploadcare-widget/uploadcare.js';
UPLOADCARE_PUBLIC_KEY = '2281dd5738c1eb6ea46c';

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

// Set Order Reference to Photo filename
document.addEventListener('DOMContentLoaded', function () {
    // Our Target Node to watch for Mutations
    const uploadWidget = document.querySelector('#uploadcare--widget__text');
    
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                console.log(uploadWidget.innerText);
            }
            else if (mutation.type === 'attributes') {
                console.log('The ' + mutation.attributeName + ' attribute was modified.');
            }
        }
    };

    // Create an observer instance linked to the callback function
    let observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(uploadWidget, config);



    uploadWidget.addEventListener('change', function() {
        let filename = document.querySelector('#uploadcare--widget__text div')?.innerText;
        if(filename){
            btnAddToOrder.setAttribute('data-sku-reference', filename);
        }
    })    
}, false);
