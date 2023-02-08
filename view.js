//Select (dropdown elements) retrieved by class
const optionDropDowns = document.getElementsByClassName('option-dd');
const statDropDowns = document.getElementsByClassName('stat-dd');


// Loops through each array in object by key, adding dropdown options per key
export function fillOptionsDropDown(obj) {

    const keys = Object.keys(obj);
    const objArrays = Object.entries(obj);

    for( let i = 0; i < keys.length; i++) {
        for (let j = 0; j < objArrays[i][1].length; j++) {
            let newOption = new Option(objArrays[i][1][j]);
            optionDropDowns[i].add(newOption);
        }
    }
    optionDropDowns[2].options[2].disabled = true;
};

//Fill stats drop downs
export function fillStatsDropDown(obj) {

    const keys = Object.keys(obj);
    const objArrays = Object.entries(obj);

    for (let i = 0; i < 6; i++ ) {
        for (let j = 0; j < 6; j++) {
            let newStatOption = new Option(objArrays[0][1][j]);
            statDropDowns[i].add(newStatOption);
            statDropDowns[j].value = objArrays[0][1][j];
        }
    }

console.log("hi");

};


