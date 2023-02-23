import { newCharObj, charOptions, statOptions, generateRandStats, randNameOptions} from './model.js';
import { fillOptionsDropDown, fillStatsDropDown, disableOp, displayRandRollInfo, updateRandName } from './view.js';

fillOptionsDropDown(charOptions);
fillStatsDropDown(statOptions);

const charName = document.getElementById('name-input');
let charOps = document.getElementsByClassName('option-dd');
const statOps = document.getElementsByClassName('stat-dd');
const createChar = document.getElementById('createChar');
const randOpsBtns = document.getElementsByClassName('rand-op-btn');
const randStatsBtn = document.getElementById('rand-stats-btn');
const randNameButton = document.getElementById('rand-name');
const randAllBtn = document.getElementById('random-all');

function setRandOps(val) {
    for (let i = 0; i < charOps.length; i++) {
        let clickedBtn = val;
        let opValues = Object.values(charOptions);
        let randNum = Math.floor(Math.random() * opValues[clickedBtn].length);
        charOps[clickedBtn].value = opValues[clickedBtn][randNum];
    };
}

function setRandStats() {
    const randStatData = generateRandStats();
    fillStatsDropDown(randStatData[2]);
    displayRandRollInfo(randStatData);
};

function setRandName() {
    let vals = Object.values(randNameOptions);
    let randNumFn = Math.floor(Math.random() * vals[0].length);
    let randNumLn = Math.floor(Math.random() * vals[1].length);
    let randFullName = vals[0][randNumFn].concat(" ", vals[1][randNumLn]);
    console.log(randFullName);
    updateRandName(randFullName);
};

randAllBtn.addEventListener("click", function(){
    setRandName();
    setRandStats();
    for(let i = 0; i < 4; i++) {
        randOpsBtns[i].click();
    }
});

randNameButton.addEventListener("click", function(){
    setRandName();
});

const randOps = document.querySelectorAll('.rand-op-btn');
    randOps.forEach(randOps => {
    randOps.addEventListener('click', function() {
        console.log('clicked');
        setRandOps(this.id);
    });
});

randStatsBtn.addEventListener("click", function(){
    setRandStats();
});

//Disable option
for(let i = 0; i < statOps.length; i++) {
    statOps[i].addEventListener("change", function() {
        disableOp(statOps[i]);
    })
}

//Creates array of current selected/entered values, this is passed to model
createChar.addEventListener("click", function() {
    let allChosenValues = [charName.value];

    if(charName.value ===''){
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

