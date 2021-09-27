colorArray = ['yellow', 'blue', 'red', 'orange']

// let x = 0
// while (x < colorArray.length) {
//     console.log(colorArray[x]);
//     x++;
// }

// for (i = 0; i < colorArray.length; i++) {
//     console.log(colorArray[i])
// }

colorArray.forEach(x => console.log(x));
// colorArray.map(x => console.log(x));

// Antwoorden:
// 1. Mijn for-loop neemt 3 regels in beslag; mijn while-loop neemt 5 regels in beslag.
// 2. Mijn forEach-method neemt maar één regel in beslag.
// 3. Een forEach method is beter leesbaar en duidelijker omdat je niet met een extra variabele/counter hoeft te werken.
// 4. Nee. Een object heeft geen geordende elementen waarover je kunt loopen.

const suki = {
    species: 'cat',
    name: 'Suki',
    age: 2,
    color: 'brown',
    hobby: 'sleeping'
};

for (let item in suki) {
    console.log(item + ': ' + suki[item]);
}

// We printen nu weliswaar alle properties en values naar de console, dus in zekere zin zijn we aan het itereren.