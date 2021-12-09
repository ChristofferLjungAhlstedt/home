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


function partTwo(input) {
    let counter = 0;
    let pastCurr = 0;
    for (let i = 0; i < input.length; i++) {
        if (i < 10) console.log(pastCurr);
        if (i + 3 > input.length) break
        let curr = 0;
        for (let j = 0; j < 3; j++) {
            curr += input[i + j];
        }
        if (curr > pastCurr) counter++;
        pastCurr = curr;
        //console.log(pastCurr);
    }
    console.log(counter);
}

partTwo(input);