export function fillRaceDropDown(arr) {
     const raceDropDown = document.getElementById('race');
  
    for (let i = 0; i < arr.length; i++) {
        let newOption = new Option(arr[i]);
        raceDropDown.add(newOption);
    };
};

export function fillClassDropDown(arr) {
    const classDropDown = document.getElementById('char-class');
    for(let i = 0; i <arr.length; i++) {
        const newOption = new Option(arr[i]);
        classDropDown.add(newOption);
    }
};