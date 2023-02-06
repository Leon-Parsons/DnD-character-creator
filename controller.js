import { newCharObj, charOptions, statOptions} from './model.js';
import { fillOptionsDropDown, fillStatsDropDown } from './view.js';

fillOptionsDropDown(charOptions);
fillStatsDropDown(statOptions);

const createChar = document.getElementById('createChar');
createChar.addEventListener("click", function() {
    newCharObj();
});
