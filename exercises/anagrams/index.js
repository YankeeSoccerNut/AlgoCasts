// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {

//     // Extract characters only...
//     let charsOnlyA = stringA.match(/[a-zA-Z]+/g);
//     let charsOnlyB = stringB.match(/[a-zA-Z]+/g);

//     let newS1 = charsOnlyA.join("").toString().toLowerCase();
//     let newS2 = charsOnlyB.join("").toString().toLowerCase();

//     let sortedArray1 = newS1.split("").sort();
//     let sortedArray2 = newS2.split("").sort();

//     // at this point we have two characters arrays
//     // can't be anagram if lengths are not equal
//     if (sortedArray1.length !== sortedArray2.length) {
//         return false;
//     };

//     NOTE:  yet another variation would be to transform back to 
//     strings and compare those.

//     // will return false as soon as mismatch...true if all match
//     return (sortedArray1.every((ele, index) => {
//         return (ele === sortedArray2[index]);
//     }))
// };

// another solution using the char map technique....
// function anagrams(stringA, stringB) {


//     let lowerStringA = stringA.toLowerCase();
//     let lowerStringB = stringB.toLowerCase();

//     let charMapA = {};
//     let charMapB = {};

//     for (let char of lowerStringA) {
//         if (char.match(/[a-zA-Z]/)) {
//             charMapA[char] = charMapA[char] + 1 || 1;
//         };
//     };

//     for (let char of lowerStringB) {
//         if (char.match(/[a-zA-Z]/)) {
//             charMapB[char] = charMapB[char] + 1 || 1;
//         };
//     };

//     // At this point our charMaps our loaded up with lowercase chars and counts
//     // number needs to be the same in order to be an anagram
//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//         return false;
//     }

//     for (let char in charMapA) {
//         if (charMapA[char] !== charMapB[char]) {
//             return false;
//         }
//     };

//     return true;
// };

// tweaked version of char map technique with helper function....
function anagrams(stringA, stringB) {

    let charMapA = buildAlphabetMap(stringA.toLowerCase());
    let charMapB = buildAlphabetMap(stringB.toLowerCase());

    // At this point our charMaps our loaded up with lowercase chars and counts
    // number needs to be the same in order to be an anagram
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }

    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false;
        }
    };

    return true;
};

function buildAlphabetMap(str) {
    let charMap = {};
    for (let char of str) {
        if (char.match(/[a-zA-Z]/)) {
            charMap[char] = charMap[char] + 1 || 1
        }
    };

    return charMap;
}


module.exports = anagrams;