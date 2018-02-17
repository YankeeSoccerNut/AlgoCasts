// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {

//     if (str === "") {
//         return str
//     };

//     charArray = str.split("").sort();
//     prevChar = "";
//     mostUsed = charArray[0]; //priming the pump
//     maxCount = 0;
//     currCount = 0;

//     for (char of charArray) {
//         if (char === prevChar) {
//             currCount++;
//             if (currCount > maxCount) {
//                 maxCount = currCount;
//                 mostUsed = char;
//             };
//         } else {
//             currCount = 1;
//         };
//         prevChar = char;
//     };

//     return (mostUsed);
// }

// // A better solution that uses a map......
// function maxChar(str) {

//     let chars = {};
//     // using new syntax for for loop
//     // this is a safe way to iterate over strings!
//     // truthy...add 1, falsey set to 1
//     for (let char of str) {
//         chars[char] = chars[char] + 1 || 1;
//     };

//     // at this point, chars is a map of all the unique
//     // chars in the string and their frequency
//     let maxFreq = 0;
//     let mostChar = "";

//     // get an enumerable (iterable) array of keys
//     let charsKeys = Object.keys(chars);

//     for (let char of charsKeys) {
//         if (chars[char] >= maxFreq) {
//             mostChar = char;
//             maxFreq = chars[char];
//         }
//     }
//     return mostChar;
// }

// An improved version using "for x in y"...
// in is used with objects, of with iterables

function maxChar(str) {

    let chars = {};
    // using new syntax for for loop
    // this is a safe way to iterate over strings!
    // truthy...add 1, falsey set to 1
    for (let char of str) {
        chars[char] = chars[char] + 1 || 1;
    };

    // at this point, chars is a map of all the unique
    // chars in the string and their frequency
    let maxFreq = 0;
    let mostChar = "";

    for (let char in chars) {
        if (chars[char] >= maxFreq) {
            mostChar = char;
            maxFreq = chars[char];
        }
    }
    return mostChar;
}

module.exports = maxChar;