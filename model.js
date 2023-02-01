export class CharTemplate {
    constructor() {
        this.name = "",
        this.race = "",
        this.classType = ""
    }
};

//TODO
// const nameOptions = {
// };

export function newCharObj() {
    const char1 = new CharTemplate();
    char1.name = document.getElementById('name').value;
    char1.race = document.getElementById('race').value;
    console.log(char1.name, char1.race);
    console.log("new character created");
};


