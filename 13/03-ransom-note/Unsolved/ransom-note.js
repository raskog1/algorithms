// Write a function that takes two strings and determines returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var ransomNote = function (magazine, note) {
    const magWords = magazine.split("");
    const noteWords = note.split("");
    for (let i = 0; i < noteWords.length; i++) {
        if (magWords.indexOf(noteWords[i]) < 0) {
            return false;
        }
    }
    return true;
};

// Solved on 10/14/2020
