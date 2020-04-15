//random generator
export function pickRandomProduct(array) {
    const randomIndex = Math.floor(Math.random() * 20);
    return array[randomIndex];
}

export function findById(productData, productId){
    for (let i = 0; i < productData.length; i++) {
        if (productData[i] === productId) {
            return productData;
        }
    }
}


// function findById
    // function productId
    // function productName
// function productRadioTag

// function timesClicked
// function gameCounter