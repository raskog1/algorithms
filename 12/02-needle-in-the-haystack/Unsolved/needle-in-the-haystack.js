// Write code to create a function that accepts two strings
// If the second string is found inside of the first string, return its starting index in the first string
// Else return `-1`

var strStr = function (str1, str2) {
    if (str2.length === 0) return 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[0]) {
            let j = 1;
            while (j < str2.length) {
                if (str1[i] === str2[j]) {
                    j++;
                } else {
                    break;
                }
            }
            return i;
        }
    }
    return -1;
};

// Solved on 10/13/2020
// Passes tests, but I don't think this is a good solution