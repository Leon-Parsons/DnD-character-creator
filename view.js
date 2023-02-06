const classDropDown = document.getElementById('class-dd');
const raceDropDown = document.getElementById('race-dd');
const alignmentOptions = document.getElementById('alignment-dd');
const backgroundOptions = document.getElementById('background-dd');

let dropDowns = [raceDropDown, classDropDown, alignmentOptions, backgroundOptions];

// Loops through each array in object by key, adding dropdown options per key
export function fillOptionsDropDown(obj) {

    const keys = Object.keys(obj);
    const objArrays = Object.entries(obj);

    for( let i = 0; i < keys.length; i++) {

        for (let j = 0; j < objArrays[i][1].length; j ++) {
            let newOption = new Option(objArrays[i][1][j]);
            dropDowns[i].add(newOption);
        }
    }
};

//Fill stats drop downs
export function fillStatsDropDown(obj) {
     const statDropDowns = document.getElementsByClassName('stat-dd');

    const keys = Object.keys(obj);
    const objArrays = Object.entries(obj);
    console.log(objArrays[0][1][0]);

    for (let i = 0; i < 7; i++ ) {
    
        for (let j = 0; j < 7; j++) {
            let newStatOption = new Option(objArrays[0][1][j]);
            statDropDowns[i].add(newStatOption);
        }
    }
};