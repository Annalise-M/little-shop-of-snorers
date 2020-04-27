
import { productData } from './productData.js';

//random generator
export function pickRandomProduct(array) {
    const randomIndex = Math.floor(Math.random() * 20);
    return array[randomIndex];
}

// function findById
export function findById(productData, productId){
    for (let i = 0; i < productData.length; i++) {
        if (selectedGood[i].id === productId) {
            return selectedGood;
        }
    }
    return null;
}

export function incrementTimesSeen() {
    let voteItem = findById(productData, id);
  
    if (!voteItem) {
        addInitialVoteItem(id, productData);
        voteItem = findById(productData, id);
    }
  
    voteItem.timesSeen++;  
}
  
export function incrementTimesPicked(id, productData) {
    let voteItem = findById(productData, id);
  
    if (!voteItem) {
        addInitialVoteItem(id, productData);
        voteItem = findById(productData, id);
    }
  
    voteItem.votes++;
}
  
export function addInitialVoteItem(randomObj, array) {
    const voteItem = {
        id: randomObj.id,
        timesViewed: 0,
        votes: 0
    
    };
  
    array.push(voteItem);
    const stringed = JSON.parsed(array);
    localStorage.setItem('chartData', stringed);
}

function seedProductsIntoLocalStorage(){
    const productsAlreadyExist = localStorage.getItem('results');

    if (!productsAlreadyExist){
        const stringyProducts = JSON.stringify(productsData);
        localStorage.setItem('results', stringyProducts);
    };
};


export function getProducts(){
    //seeding products into local storage
    const storedProducts = localStorage.getItem('results');
    const parsedProducts = JSON.parse(storedProducts);

    return parsedProducts;
}