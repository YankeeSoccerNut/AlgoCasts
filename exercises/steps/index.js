// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {

//     let stepsArray = [...Array(n).fill(" ")];

//     let i = 0;

//     while (i < n) {
//         stepsArray[i] = "#";
//         console.log(stepsArray.join("").toString());
//         i++;
//     }

//     return n;
// }

// recursive solution....
// didn't realize we could change the function signature
// though technically the change is internal to the function
// it doesn't change how it would be called

function steps(n, row = 0, stair = "") {

    // base case...how we break out of recursive loop
    if (n === row) {
        return;
    };

    if (n === stair.length) {
        console.log(stair);
        steps(n, row += 1);
        return;
    };

    if (stair.length <= row) {
        stair += "#";
    } else {
        stair += " ";
    };

    steps(n, row, stair);
}

module.exports = steps;