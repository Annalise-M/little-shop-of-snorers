//random generator
export function pickRandomProduct(array) {
    const randomIndex = Math.floor(Math.random() * 20);
    return array[randomIndex];
}

export function findById(productData, productId){
    for (let i = 0; i < productData.length; i++) {
        if (productData[i].id === productId) {
            return productData;
        }
    }
}

// export function addInitalVoteItem(id, votes){
//     return {
//         id: id,
//         timesClicked: 0,
//         timesSeen: 0,
// //     };
// // }

// export function incrementTimesClicked(id, insertObject){
//     const clickedItem = findById(insertObject, id);
//     // is this id in this array?
//     if (!incrementTimesClicked) {
//         addInitial
//     }
//     // if so, incrementtimes clicked ++


//     //if not, then insert object function
// }
// export function incrementTimesSeen()
// function findById
    // function productId
    // function productName
// function productRadioTag

// function timesClicked
// function gameCounter

export function incrementTimesSeen(id, productData) {
    let voteItem = findById(productData, id);
  
    if (!voteItem) {
        addInitialVoteItem(id, productData);
        voteItem = findById(productData, id);
    }
  
    voteItem.timesViewed++;  
}
  
export function incrementTimesPicked(id, productData) {
    let voteItem = findById(productData, id);
  
    if (!voteItem) {
        addInitialVoteItem(id, productData);
        voteItem = findById(productData, id);
    }
  
    voteItem.votes++;
}
  
function addInitialVoteItem(id, productData) {
    const voteItem = {
        id: id,
        timesViewed: 0,
        votes: 0
    };
  
    productData.push(voteItem);
}