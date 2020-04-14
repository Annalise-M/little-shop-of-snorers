import { myDataArray } from './myDataArray';

// Need Id, Image, Name, Radio
const idTags = document.querySelectorAll('id');
const imageTags = document.querySelectorAll('img');
const nameTags = document.querySelectorAll('name');
const myRadioTags = document.querySelectorAll('input');
// const data = new dataArray('myDataArray');

let myWins = 0;
let correctAnswer;

myRadioTags.forEach((radioTag)) => {
    radioTag.addEventListener('click', (event) => {
        if (event.target.value === correctAnswer.id) {
            myWins++;
            data = remove

        }
    }
    
};