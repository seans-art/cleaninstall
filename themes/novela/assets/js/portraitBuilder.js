document.addEventListener('DOMContentLoaded', function () {
// import uploadcare from '../../node_modules/uploadcare-widget/uploadcare.js';
UPLOADCARE_PUBLIC_KEY = '2281dd5738c1eb6ea46c';

// get a widget reference, locate button element, locate filename from photo upload if available
const widget = uploadcare.SingleWidget("[role=uploadcare-uploader]");
const btnAddToOrder = document.getElementById('add-portrait');

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

// Get selected color type and return the selected value
let ColorListInputs = document.getElementsByName('color-select');
let previousInput = null;
let colorOptionIds= ['bwselect', 'fcselect'];
let previousSelected = null;
for (let i = 0; i < ColorListInputs.length; i++) {
    ColorListInputs[i].addEventListener('change', function() {
        // Loop through color options by ID
        let colorSelected = document.getElementById(colorOptionIds[i]);
        // Null check whether a value selection has been made
        if (this !== previousInput) {
            previousInput = this;
        }
        // The Value we apply to the SKU, and class added
        colorChoice = this.value;
        colorSelected.classList.add('.color-selected');

        // Null check the id selection has been made
        if(previousSelected){
            previousSelected.classList.remove('.color-selected');
        }
        // Set the previousSelection only after changing class application
        console.log('before: ' + previousSelected);
        previousSelected = document.getElementById(colorOptionIds[i]);
        console.log('after: ' + previousSelected);


        console.log(colorSelected);
        console.log(colorChoice);
        if(colorChoice && sizeChoice){
            setSku();
        }
    });
}

// Set sku to the joined selected values
function setSku() {
    if(colorChoice && sizeChoice){
        let dataSkuCode = sizeChoice + colorChoice;
        let productName = dataSkuCode + ' Portrait';
        btnAddToOrder.setAttribute('data-sku-code', dataSkuCode);
        btnAddToOrder.setAttribute('data-sku-name', productName);
    }
}

// Set Order Reference to Photo filename
    // Our Target Node to watch for Mutations
    const uploadWidget = document.querySelector('#uploadcare--widget__text');
  
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer) {
        const filename = document.querySelector('#uploadcare--widget__text div')?.innerText;
        const fileUrl = document.querySelectorAll('[role="uploadcare-uploader"]')[0];
        const photoSelection = document.getElementById('photo-selection');   
        // Use traditional 'for loops' for IE 11
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                btnAddToOrder.setAttribute('data-sku-reference', filename);
                btnAddToOrder.setAttribute('data-sku-image-url', fileUrl.value);
                photoSelection.setAttribute('src', fileUrl.value);
            }
        }
    };

    // Create an observer instance linked to the callback function
    let observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(uploadWidget, config);
    
}, false);
