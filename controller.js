import { newCharObj, charOptions, statOptions} from './model.js';
import { fillOptionsDropDown, fillStatsDropDown, disableOp } from './view.js';

fillOptionsDropDown(charOptions);
fillStatsDropDown(statOptions);

const chosenName = document.getElementById('name-input');
const createChar = document.getElementById('createChar');
const charOps = document.getElementsByClassName('option-dd');

//Loops through the stat select elements, adding event listeners
//and disables an option if it has already been used
const statOps = document.getElementsByClassName('stat-dd');
for(let i = 0; i < statOps.length; i++) {
    statOps[i].addEventListener("change", function() {
        disableOp(statOps[i]);
    })
}

//Fetches the current selected/entered values, creates arrays to pass to 
//model to create new character object
createChar.addEventListener("click", function() {
    const selectedOps = [];
    const selectedStats =[];

    for (let i =0; i < charOps.length; i++) {
        selectedOps.push(charOps[i].value);
    }
    
    for (let i =0; i < statOps.length; i++) {
        selectedStats.push(statOps[i].value);
    }

    //Consolidates all user selected values into one array
    let allChosenValues = [chosenName.value, ...selectedOps, ...selectedStats];
    newCharObj(allChosenValues);
    console.log(allChosenValues);
});

