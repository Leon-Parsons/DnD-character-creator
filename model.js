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
    stats: [15,14,13,12,10,8]
};

export function statRandRoll() {
    const fourD6Roll = Array.from({length: 4}, () => Math.floor(Math.random() * (7 - 1) + 1));
    const minToRemove = fourD6Roll.indexOf(Math.min(...fourD6Roll));
    const updatedFourD6 = fourD6Roll.slice();
    updatedFourD6.splice(minToRemove, 1);
    const sumOfDice = updatedFourD6[0] + updatedFourD6[1] + updatedFourD6[2];
    const rollInfo = [fourD6Roll, updatedFourD6, sumOfDice];
    return rollInfo;
};

export function generateRandStats() {
    const diceRolled = [];
    const diceAdjusted = [];
    const randResult = [];
    for(let i = 0; i < 6; i++) {
        let diceInfo = statRandRoll();
        diceRolled.push(diceInfo[0]);
        diceAdjusted.push(diceInfo[1]);
        randResult.push(diceInfo[2]);
    }
    const randStatsOptions = {
        stats: [...randResult]
    }
    const allRandData = [diceRolled,diceAdjusted,randStatsOptions];
    return allRandData;
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


