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

// ^ prep for event click listener

//creating blank array to track views and clicks
const initializeNewProducts = () => {
    const product1 = pickRandomProduct(productData);
    let product2 = pickRandomProduct(productData);
    let product3 = pickRandomProduct(productData);
    
    while (product1.id === product2.id) {
        product2 = pickRandomProduct(productData);
    }
    while (product3.id === product2.id || product3.id === product1.id) {
        product3 = pickRandomProduct(productData);
    }
    
    const product1Object = newProduct1;
    product1Object.textContent = product1Object.name;
    const product1Image = document.getElementById('productImg1');
    productImg1.src = product1Object.image;
    const radioButton1 = document.getElementById('product1');
    productRadioTag1.value = product1.id;
    const product1Name = document.getElementById('product1Name');
    product1Name.textContent = product1Object.name;

    const product2Object = newProduct2;
    product2Object.textContent = product2Object.name;
    const product2Image = document.getElementById('productImg2');
    productImg2.src = product2Object.image;
    const radioButton2 = document.getElementById('product2');
    productRadioTag2.value = product2.id;
    const product2Name = product2Object.name;
    product2Name.textContent;
    
    const product3Object = newProduct3;
    product3Object.textContent = product3Object.name;
    const product3Image = document.getElementById('productImg3');
    productImg3.src = product3Object.image; 
    const radioButton3 = document.getElementById('product3');
    productRadioTag3.value = product3.id;
    const product3Name = product3Object.name;
    product3Name.textContent;

};

function renderProductsResults(){
    
    let answersArray = [];
    let allTimeArrayStorage = localStorage.getItem('allTimeAnswersArrayKey');
    if (allTimeArrayStorage) {
        allTimeArrayStorage = parsed_AllTimeArrayStorage;
    }
    else { 
        allTimeArray = [];
        let allTimeArrayStorage;
    };
    // //we need to increment the times seen for these three products, cause now we've seen them
    incrementTimesSeen(productId, incrementTimesPicked);
    incrementTimesPicked(productId, incrementTimesPicked);
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
    const possibleResults = localStorage.getItem('results');
    let storageResults;
    if (possibleResults) {
        storageResults = JSON.parse(possibleResults);
    }
    else {
        storageResults = [];
        
    }
    const productSelected = document.querySelector('input:clicked');
    let productChoiceResults = findById(storageResults, productSelected.value);
    
    //now we need to increment this id
    if (!productChoiceResults){
        const selectedResultsObject = {
            id: productSelected.value,
            votes: 1
        };
        storageResults.push(selectedResultsObject);
    } else {
        productChoiceResults.votes++;
    }
    //then we need to stringify the array then store in local storage
    const newResultsState = JSON.stringify(storageResults);
    
    localStorage.setItem('results', newResultsState);
}
    //then we need to create 3 more products  /

);
console.log(localStorage);

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
