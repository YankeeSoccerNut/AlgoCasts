// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// my original version....didn't know about Math.sign and explictly
// handled the sign

// function reverseInt(n) {

//     let sign = 1;
//     let digitArray = n.toString().split("");

//     if (parseInt(n) < 0) {
//         sign = -1;
//         digitArray = digitArray.splice(1, digitArray.length - 1); 
//     };

//     return (parseInt(digitArray.reverse().join("")) * sign);
// }

// improved version....using Math.sign and taking advantage of 
// of parseInt 'dropping' the sign after reversal

function reverseInt(n) {

    let digitArray = n.toString().split("");

    return (parseInt(digitArray.reverse().join("")) * Math.sign(n));
}

module.exports = reverseInt;