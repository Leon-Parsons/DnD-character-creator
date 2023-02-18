//Selectable values
export const charOptions = {
    races: ["Dragonborn", "Dwarf", "Elf", "Gnome", "Halfling"],
    classes: ["Barbarian", "Bard", "Cleric", "Druid"],
    alignment: ["Lawful-Good", "Lawful-Neutral", "Lawful-Evil",
                "Neutral-Good", "True-Neutral", "Neutral-Evil",
                "Chaotic-Good", "Chaotic-Neutral", "Chaotic-Evil"],
    background: ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero"],
};

export const statOptions = {
    stats: [15,14,13,12,10,8],
};

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

//Creates new object with entered values
export function newCharObj(allChosenValues) {
    let newChar = new CharTemplate;

    newChar.name = allChosenValues[0];
    newChar.race = allChosenValues[1];
    newChar.classType = allChosenValues[2];
    newChar.alignment = allChosenValues[3];
    newChar.background = allChosenValues[4];
    newChar.strength = allChosenValues[5];
    newChar.dexterity = allChosenValues[6];
    newChar.constitution = allChosenValues[7];
    newChar.intelligence = allChosenValues[8];
    newChar.wisdom = allChosenValues[9];
    newChar.charisma = allChosenValues[10];
    console.log(newChar);

//    const keys = Object.keys(newChar);

//     Object.entries(newChar).forEach(entry => {
//         let [key,value] = entry;

//         for (let i = 0; i < key.length; i++) {
//             value = statVals[i];
//         }
//         console.log(key, value);
//     });

    console.log(newChar[2]);
};

