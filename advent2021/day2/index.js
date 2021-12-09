const fs = require('fs');
const input = fs.readFileSync('input.csv', 'utf8').split('\n');

function partOne(input) {
    let direction;
    for (let i = 0; i < 10; i++) {
        direction = input[i].split(' ');
        switch (direction[0]) {
            case 'down':

            case 'forward':

            case 'up':
                
            default:
                break
        }
    }
}

partOne(input)