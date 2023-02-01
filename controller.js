import { newCharObj, raceOptions, classOptions } from './model.js';
import { fillClassDropDown, fillRaceDropDown } from './view.js';

fillRaceDropDown(raceOptions.allRaces);
fillClassDropDown(classOptions.classes);

const createChar = document.getElementById('createChar');
createChar.addEventListener("click", function() {
    newCharObj();
});
