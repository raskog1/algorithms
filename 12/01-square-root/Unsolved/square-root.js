// Write code to create a function that accepts a non-negative integer and returns the square root of the integer. If the square root is a decimal number, round down to the nearest whole integer
// You may not use the built-in `Math.sqrt` method

var sqrt = function (x) {
    if (x === 0) return 0;
    let highSquare, lowSquare, rightSquare;
    let i = 1;
    while (i < x / 2) {
        if (i * i < x) {
            lowSquare = i;
            i++;
        } else {
            highSquare = i;
            break;
        }
    }
    if (x - (lowSquare * lowSquare) > (highSquare * highSquare) - x) {
        rightSquare = highSquare;
    } else { rightSquare = lowSquare }

    let root = ((rightSquare + (x / rightSquare)) / 2);
    console.log(root);
    return Math.floor(root);
};

// Solved on 10/13/2020
// MUCH simpler solution in solved
