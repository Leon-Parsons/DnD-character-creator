const classDropDown = document.getElementById('char-class');
const raceDropDown = document.getElementById('race');

let dropDowns = [raceDropDown,classDropDown];

// Loops through each array in object by key, adding dropdown options per key
export function fillRaceDropDown(obj) {
    const keys = Object.keys(obj);
    const objArrays = Object.entries(obj);
    for( let i = 0; i < keys.length; i++) {
        for (let j = 0; j < objArrays[i][1].length; j ++) {
            let newOption = new Option(objArrays[i][1][j]);
            dropDowns[i].add(newOption);
        }
    }
};

