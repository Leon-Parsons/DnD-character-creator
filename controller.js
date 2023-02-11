import { newCharObj, charOptions, statOptions} from './model.js';
import { fillOptionsDropDown, fillStatsDropDown, disableOp } from './view.js';

fillOptionsDropDown(charOptions);
fillStatsDropDown(statOptions);

const chosenName = document.getElementById('name-input');
const createChar = document.getElementById('createChar');

const charOps = document.getElementsByClassName('option-dd');

//Loops through the stat select elements, adding event listeners
const statOps = document.getElementsByClassName('stat-dd');
for(let i = 0; i < statOps.length; i++) {
    statOps[i].addEventListener("change", function() {
        disableOp(statOps[i]);
    })
}

//Fetches the current selected values, creates array to pass to model
const selectedOps = [];
const selectedStats =[];
createChar.addEventListener("click", function() {
    for (let i =0; i < charOps.length; i++) {
        selectedOps.push(charOps[i].value);
    }
    for (let i =0; i < statOps.length; i++) {
        selectedStats.push(statOps[i].value);
    }
    newCharObj(chosenName.value, selectedOps, selectedStats);
});

