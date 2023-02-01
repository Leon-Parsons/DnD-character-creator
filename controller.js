import { newCharObj } from './model.js';
import { updateNameText } from './view.js';

const createChar = document.getElementById('createChar');
// const randomize = document.getElementById('randomize');

// randomize.addEventListener("click", randomizeName);
createChar.addEventListener("click", function(){
    newCharObj()
    updateNameText()
});
