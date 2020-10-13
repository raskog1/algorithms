// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function (str, sub) {
    const chars = str.split("");
    const subchars = sub.split("");
    for (let i = 0; i < subchars.length; i++) {
        if (chars.indexOf(subchars[i]) < 0) {
            return false;
        }
        chars.splice(chars.indexOf(subchars[i]), 1);
    }
    return true;
};

// Solved on 10/13/2020