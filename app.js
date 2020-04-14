import { productData } from './productData.js';

// Need Id, Image, Name, Radio
const productId = document.getElementById('id');
const productImg = document.querySelectorAll('img');
const productName = document.getElementById('name');
const productRadioTag = document.querySelectorAll('input');

let productsSelected = 0;
let timesClicked = 0;

const product1 = productData[0];
const product2 = productData[1];
const product3 = productData[2];

const productRadioTag1 = productRadioTag[0];
const productRadioTag2 = productRadioTag[1];
const productRadioTag3 = productRadioTag[2];

const productImg1 = productImg[0];
const productImg2 = productImg[1];
const productImg3 = productImg[2];

const form = document.querySelector('form');

form.addEventListener('submit', (e)=> {
    e.preventDefault ();
    const formData = new FormData(form);
    console.log (formData.get('products'));
});

productImg1.src = product1.image;
productImg2.src = product2.image;
productImg3.src = product3.image;

//helpful for our event click listener
productRadioTag1.value = product1.id;
productRadioTag2.value = product2.id;
productRadioTag3.value = product3.id;








// const data = new dataArray('myDataArray');
// let correctAnswer;

// myRadioTags.forEach((radioTag)); {
//     radioTag.addEventListener('click', (event)) 
//     if (event.target.value === correctAnswer.id) {
//         myClicks;
//         data = remove;

//     }
// };