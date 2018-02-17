// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    let strArray = [];
    strArray = str.split("");
    return (strArray.reverse().join(""));
}

// another solution....

// function reverse(str) {

//     let reversed = '';
//     for(let char of str){
//         reversed = char + reversed;
//     };

//     return(reversed);
// }

// yet another solution...
// uses deeper knowledge of the fact that reduce takes starting value
// thing to add and callback function.  Note slick rocket function!
// function reverse(str) {
//     return str.split('').reduce((rev, char) => (char + rev), '');
// }

module.exports = reverse;