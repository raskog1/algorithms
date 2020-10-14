// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

var validBrackets = function (str) {
    let pars = true;
    let squares = true;
    let curlies = true;
    let parIndex, squareIndex, curlyIndex;

    for (let i = 0; i < str.length; i++) {

        switch (str[i]) {
            case "(":
                pars = !pars;
                parIndex = i;
                break;
            case "[":
                squares = !squares;
                squareIndex = i;
                break;
            case "{":
                curlies = !curlies;
                curlyIndex = i;
                break;
        }

        switch (str[i]) {
            case ")":
                pars = !pars;
                if (squareIndex > parIndex || curlyIndex > parIndex) {
                    console.log("failed on closed pars");
                    return false;
                }
                parIndex = -1;
                break;
            case "]":
                squares = !squares;
                if (parIndex > squareIndex || curlyIndex > squareIndex) {
                    console.log("failed on closed squares");
                    return false;
                }
                squareIndex = -1;
                break;
            case "}":
                curlies = !curlies;
                if (parIndex > curlyIndex || squareIndex > curlyIndex) {
                    console.log("failed on closed curly");
                    return false;
                }
                curlyIndex = -1;
                break;
        }

    }
    if (pars && squares && curlies) {
        return true;
    } else { return false; }
};

// Solved on 10/14/2020