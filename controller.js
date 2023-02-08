import { newCharObj, charOptions, statOptions} from './model.js';
import { fillOptionsDropDown, fillStatsDropDown, greyOut} from './view.js';

fillOptionsDropDown(charOptions);
fillStatsDropDown(statOptions);

const createChar = document.getElementById('createChar');
createChar.addEventListener("click", function() {
    newCharObj();
});

const dexDropDownEvent = document.getElementById('dex-dd');
dexDropDownEvent.addEventListener('change', (event) => {
    greyOut(dexDropDownEvent.value);
});
