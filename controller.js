import { newCharObj, charOptions, statOptions} from './model.js';
import { fillOptionsDropDown, fillStatsDropDown, disableOp } from './view.js';

fillOptionsDropDown(charOptions);
fillStatsDropDown(statOptions);

const chosenName = document.getElementById('name-input');
let charOps = document.getElementsByClassName('option-dd');
const statOps = document.getElementsByClassName('stat-dd');
const createChar = document.getElementById('createChar');
let randButtons = document.getElementsByClassName('random-btn');

//Random selection for character options on "Randomize" button click
for (let i = 1; i < charOps.length + 1; i++) {
    randButtons[i].addEventListener("click", function() {
        let clickedBtn = this.id;
        let opValues = Object.values(charOptions);
        let randNum = Math.floor(Math.random() * opValues[clickedBtn].length);
        charOps[clickedBtn].value = opValues[clickedBtn][randNum];
        console.log(opValues[clickedBtn]);
        });
};

//Loops through the stat select elements, adding event listeners
//to disable an option if it has already been used
for(let i = 0; i < statOps.length; i++) {
    statOps[i].addEventListener("change", function() {
        disableOp(statOps[i]);
    })
}

//Fetches the current selected/entered values, creates arrays to pass to 
//model to create new character object
createChar.addEventListener("click", function() {
    let allChosenValues = [chosenName.value];

    if(chosenName.value ===''){
        alert('Please enter a name');
    } else {

        for (let i =0; i < charOps.length; i++) {
            allChosenValues.push(charOps[i].value);
        }
        
        for (let i =0; i < statOps.length; i++) {
            allChosenValues.push(statOps[i].value);
        }

        newCharObj(allChosenValues);
    }
});

