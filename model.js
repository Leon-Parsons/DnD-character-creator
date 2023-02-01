export const raceOptions = {
    races: ["Dragonborn", "Dwarf", "Elf", "Gnome", "Halfling"],
    get allRaces() {
        return this.races;
    }
};

export const classOptions = {
    classes: ["Barbarian", "Bard", "Cleric", "Druid"],
    get allClasses() {
        return this.classes;
    }
}

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
    newChar.race = document.getElementById('race').value;
    console.log(newChar.name, newChar.race);
    console.log("new character created");
};


