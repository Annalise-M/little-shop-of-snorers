import { productData } from './productData.js';
import { pickRandomProduct, findById, incrementTimesSeen, incrementTimesPicked, addInitialVoteItem } from './utils.js';

// Need Id, Image, Name, Radio
   
const productId = document.getElementById('id');
const productImg = document.querySelectorAll('img');
const productName = document.getElementById('name');
const productRadioTag = document.querySelectorAll('input');
const nextButton = document.getElementById('nextButton');

const gameCounter = 25;
    //keep track of total clicks, id's clicked and within a 25 click limit + reset after
let timesClicked = 0;


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

productRadioTag2.value = product2.id;
productRadioTag3.value = product3.id;
 //creating blank array to track views and clicks
const initializeNewProducts = () => {
    const product1 = pickRandomProduct(productData);
    let product2 = pickRandomProduct(productData);
    let product3 = pickRandomProduct(productData);
    
    
    productRadioTag2.value = product2.id;
    productRadioTag3.value = product3.id;
    
    while (product1.id === product2.id) {
        product2 = pickRandomProduct(productData);
    }
    while (product3.id === product2.id || product3.id === product1.id) {
        product3 = pickRandomProduct(productData);
    }
    
    productImg2.src = product2.image;
    productImg3.src = product3.image; 

    const product1Object = newProduct1;
    product1Object.textContent = product1Object.name;
    const product1Image = document.getElementById('productImg1');
    productImg1.src = product1.image;
    productRadioTag1.value = product1.id;
    const product1Name.textContent = product1Object.name;
    
    // //we need to increment the times seen for these three products, cause now we've seen them
    // incrementTimesSeen(productId, incrementTimesPicked);
    // incrementTimesPicked(productId, incrementTimesPicked);
    saveToLocalStorage(productData);
    localStorage.setItem('results', newResultsState);
    // gameCounter--;

    
    saveToLocalData();
    renderItems();
    
};

initializeNewProducts();

nextButton.addEventListener('click', () => {
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    const productId = selectedRadioButton.value;
    console.log(productId);
    renderProductsResults();
    //now we need to increment this id
    //then we need to stringify the array then store in local storage
    //then we need to create 3 more products  /
    

});
//putting + tracking user info into local storage

export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

export function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}

// myRadioTags.forEach((radioTag)); {
//     radioTag.addEventListener('click', (event)) 
//     if (event.target.value === correctAnswer.id) {
//         myClicks;
//         data = remove;

//     }
// };
