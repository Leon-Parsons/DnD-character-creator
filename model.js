export const charOptions = {
    races: ["Dragonborn", "Dwarf", "Elf", "Gnome", "Halfling"],
    classes: ["Barbarian", "Bard", "Cleric", "Druid"],
    alignment: ["Lawful-Good", "Lawful-Neutral", "Lawful-Evil",
                "Neutral-Good", "True-Neutral", "Neutral-Evil",
                "Chaotic-Good", "Chaotic-Neutral", "Chaotic-Evil"],
    background: ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero"],
};

export class CharTemplate {
    constructor() {
        this.name = "",
        this.race = "",
        this.classType = ""
    }
};

export function newCharObj() {
    const newChar = new CharTemplate();
    newChar.name = document.getElementById('name').value;
    newChar.race = document.getElementById('race-dd').value;
    console.log(newChar.name, newChar.race);
    console.log("new character created");
};


