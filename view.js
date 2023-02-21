//Select (dropdown elements) retrieved by class
const optionDropDowns = document.getElementsByClassName('option-dd');
const statDropDowns = document.getElementsByClassName('stat-dd');

// Loops through each array in object by key, adding char option dropdown options per key
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

// Fill characters stats drop downs options
export function fillStatsDropDown(statObj) {

    const keys = Object.keys(statObj);
    const objArrays = Object.entries(statObj);

    for (let i = 0; i < 6; i++ ) {
        for (let j = 0; j < 6; j++) {
            let newStatOption = new Option(objArrays[0][1][j]);
            statDropDowns[i].add(newStatOption);
            statDropDowns[j].value = objArrays[0][1][j];
        }
    }

    console.log(objArrays[0][1]);
};

//Disable of stat option functionality
export function disableOp(val) {
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 6; j++) {
                    if (statDropDowns[i].options[j].value == val.value) {
                        statDropDowns[i].options[j].disabled = true;
                    }
                }
            }
};

