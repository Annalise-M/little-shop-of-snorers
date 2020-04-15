import { productData } from './productData.js';
import { pickRandomProduct } from './utils.js';

// Need Id, Image, Name, Radio
/* eslint-disable */

   
const productId = document.getElementById('id');
const productImg = document.querySelectorAll('img');
const productName = document.getElementById('name');
const productRadioTag = document.querySelectorAll('input');
const nextButton = document.getElementById('nextButton');


const gameCounter = 25;
    //keep track of total clicks, id's clicked and within a 25 click limit + reset after
let timesClicked = 0;

// let productsSelected = 0;

const product1 = pickRandomProduct(productData);
const product2 = pickRandomProduct(productData);
const product3 = pickRandomProduct(productData);

const productRadioTag1 = document.getElementById('radio-1');
const productRadioTag2 = document.getElementById('radio-2');
const productRadioTag3 = document.getElementById('radio-3');

const productImg1 = productImg[0];
const productImg2 = productImg[1];
const productImg3 = productImg[2];

productImg1.src = product1.image;
productImg2.src = product2.image;
productImg3.src = product3.image;

//for event click listener
productRadioTag1.value = product1.id;
productRadioTag2.value = product2.id;
productRadioTag3.value = product3.id;


const render = () => {
    const product1 = pickRandomProduct(productData);
    let product2 = pickRandomProduct(productData);
    let product3 = pickRandomProduct(productData);

    productRadioTag1.value = product1.id;
    productRadioTag2.value = product2.id;
    productRadioTag3.value = product3.id;

    while (product1 === product2) {
        product2 = pickRandomProduct(productData);
    }
    while (product3 === product2 || product3 === product1) {
        product3 = pickRandomProduct(productData);
    }
    productImg1.src = product1.image;
    productImg2.src = product2.image;
    productImg3.src = product3.image;
};

nextButton.addEventListener('click', () => {
    render();
});

render();


// myRadioTags.forEach((radioTag)); {
//     radioTag.addEventListener('click', (event)) 
//     if (event.target.value === correctAnswer.id) {
//         myClicks;
//         data = remove;

//     }
// };