import { newCharObj, charOptions, statOptions} from './model.js';
import { fillRaceDropDown, fillStatOptions } from './view.js';

fillRaceDropDown(charOptions);
fillStatOptions(statOptions);

const createChar = document.getElementById('createChar');
createChar.addEventListener("click", function() {
    newCharObj();
});
