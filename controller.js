import { newCharObj, charOptions } from './model.js';
import { fillRaceDropDown } from './view.js';

fillRaceDropDown(charOptions);

const createChar = document.getElementById('createChar');
createChar.addEventListener("click", function() {
    newCharObj();
});
