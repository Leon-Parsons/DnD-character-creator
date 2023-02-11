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
export function newCharObj(name, opVals, statVals) {
    let newChar = new CharTemplate;
    newChar.name = name;
    newChar.race = opVals[0];
    newChar.classType = opVals[1];
    newChar.alignment = opVals[2];
    newChar.background = opVals[3];
    newChar.strength = statVals[0];
    newChar.dexterity = statVals[1];

    console.log(newChar);
};

