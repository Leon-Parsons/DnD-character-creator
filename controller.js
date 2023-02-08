import { newCharObj, charOptions, statOptions} from './model.js';
import { fillOptionsDropDown, fillStatsDropDown, greyOut} from './view.js';

fillOptionsDropDown(charOptions);
fillStatsDropDown(statOptions);

const createChar = document.getElementById('createChar');
createChar.addEventListener("click", function() {
    newCharObj();
});

// const dexDropDownEvent = document.getElementById('dex-dd');
// dexDropDownEvent.addEventListener('change', (event) => {
//     greyOut(dexDropDownEvent.value);
// });

const statDropDownSel = document.getElementsByClassName('stat-dd');
for(let i = 0; i < statDropDownSel.length; i++) {
    statDropDownSel[i].addEventListener("change", function() {
        greyOut(statDropDownSel[i]);
        console.log("clicked index: " + i);
    })
}

