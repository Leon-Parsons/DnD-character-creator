//Selectable values
export const charOptions = {
    races: ["Dragonborn", "Dwarf", "Elf", "Gnome", "Halfling"],
    classes: ["Barbarian", "Bard", "Cleric", "Druid"],
    alignment: ["Lawful-Good", "Lawful-Neutral", "Lawful-Evil",
                "Neutral-Good", "True-Neutral", "Neutral-Evil",
                "Chaotic-Good", "Chaotic-Neutral", "Chaotic-Evil"],
    background: ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero"],
};

export function statRandRoll() {
    const fourD6Roll = Array.from({length: 4}, () => Math.floor(Math.random() * (7 - 1) + 1));
    const minToRemove = fourD6Roll.indexOf(Math.min(...fourD6Roll));
    // console.log(fourD6Roll);
    let updatedFourD6 = fourD6Roll.slice();
    updatedFourD6.splice(minToRemove, 1);
    let sumOfDice = updatedFourD6[0] + updatedFourD6[1] + updatedFourD6[2];
    // console.log(sumOfDice);

    return [fourD6Roll, updatedFourD6, sumOfDice];
};

export const statOptions = {
    stats: [0,15,14,13,12,10,8]
};

export const randStatOptions = {
    stats: [6,34,12,7,9,5]
}



export class CharTemplate {
    constructor() {
        this.name = "",
        this.race = "",
        this.classType = "",
        this.alignment = "",
        this.background = "",
        this.strength = "",
        this.dexterity = "",
        this.constitution = "",
        this.intelligence = "",
        this.wisdom = "",
        this.charisma = ""
    }
};

//Creates new object, loops through setting the values with user entered values
export function newCharObj(allChosenValues) {
    let newChar = new CharTemplate;

    var setValues = function(newChar){
        let i = 0;
        Object.keys(newChar).forEach(function(key) {
        newChar[key] = allChosenValues[i];
        i++;
        });
    };
    setValues(newChar);
    console.log(newChar);
};


