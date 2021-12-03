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
    let inc = 0;
    let prevAvr;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 2] == undefined) break;
        averagedList = new Avr(arr, i);
        if (i == 0) {
            prevAvr = averagedList.average; 
            continue;
        }
        if (averagedList.average > prevAvr) inc++;
        prevAvr = averagedList.average;
    }
    console.log(inc)
}

class Avr {
    constructor(index, loopPos) {
        for (let i = 0; i < 3; i++) {
            this.average += index[loopPos + i];
        }
        if (loopPos < 3) {
            console.log(this.average);
        }
       
    }

}

calcAvr(input);