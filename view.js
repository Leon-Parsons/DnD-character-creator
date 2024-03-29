const optionDropDowns = document.getElementsByClassName('option-dd');
const statDropDowns = document.getElementsByClassName('stat-dd');
// const randRollDis = document.getElementsByClassName('dis-roll');
const nameField = document.getElementById('name-input');

export function updateRandName(name) {
    nameField.value = name;
}

// Fills char option dropdown options
export function fillOptionsDropDown(opObj) {
    const keys = Object.keys(opObj);
    const objArrays = Object.entries(opObj);
    
    for( let i = 0; i < keys.length; i++) {
        for (let j = 0; j < objArrays[i][1].length; j++) {
            let newOption = new Option(objArrays[i][1][j]);
            optionDropDowns[i].add(newOption);
        }
    }
};

// Fill character stats drop downs options
export function fillStatsDropDown(statObj) {
    const objArrays = Object.entries(statObj);
    for (let i = 0; i < 6; i++ ) {
        statDropDowns[i].innerHTML = "";
        for (let j = 0; j < 6; j++) {
            let newStatOption = new Option(objArrays[0][1][j]);
            statDropDowns[i].add(newStatOption);
            statDropDowns[j].value = objArrays[0][1][j];
        }
    }
    return objArrays[0][1];
};

//Disable of stat drop down options
export function disableOp(val) {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if (statDropDowns[i].options[j].value == val.value) {
                statDropDowns[i].options[j].disabled = true;
            }
        }
    }
};

export function statsDisabled(val) {
    for(let i = 0; i < statDropDowns.length; i++) {
        statDropDowns[i].disabled = val;
    }
};

//Displays rand stat dice roll information
export function displayRandRollInfo(vals) {
    const randTotal = Object.values(vals[2]);
    for(let i = 0; i < 6; i++) {
        randRollDis[i].textContent = 
        `You rolled: ${vals[0][i]}... 
        The roll with the lowest dice removed: ${vals[1][i]}...
        The sum of these three dice = ${randTotal[0][i]}`;
    }
};
