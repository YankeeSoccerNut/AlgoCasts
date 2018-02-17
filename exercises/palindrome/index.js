// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     reverse = require('../reversestring/index');

//     let revStr = reverse(str);
//     return (str === revStr);
// }

// another solution using the .every() on the array...
// note this is NOT an optimal solution as it does 2x the work necessary
// e.g. no need to check beyond the midpoint...we already checked

function palindrome(str) {

    return str.split("").every((char, i) => {
        return char === str[str.length - i - 1];
    });

}

module.exports = palindrome;