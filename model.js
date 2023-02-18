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

//Creates new object, loops through setting the values with user entered values
export function newCharObj(allChosenValues) {
    let newChar = new CharTemplate;

    var changeValues = function(newChar){
        let i = 0;
        Object.keys(newChar).forEach(function(key) {
        newChar[key] = allChosenValues[i];
        i++;
    });
    };
    changeValues(newChar);

    console.log(newChar);
};

