//read from csv file and parse to array
const fs = require('fs');
const input = fs.readFileSync('input.csv', 'utf8').split('\n');

function calculateInc(arr) {
    let inc = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) continue;
        if (arr[i] < arr[i - 1]) continue;
        inc++;
    }

    console.log(inc);
}

calculateInc(input);


function calcAvr (arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 3] == undefined) break;
        
    }
}

console.log(input[input.length + 3]);