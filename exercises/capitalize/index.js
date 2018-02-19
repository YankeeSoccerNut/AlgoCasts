// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     let strArray = str.split(" ");
//     let newStr = "";
//     let wordCount = 0;

//     for (let word of strArray) {
//         word = word.slice(0, 1).toUpperCase() + word.slice(1);
//         wordCount++;
//         if (wordCount < strArray.length) {
//             newStr += word + " ";
//         } else {
//             newStr += word;
//         }
//     }
//     return newStr;
// };

// improved version using push....
function capitalize(str) {
    let strArray = str.split(" ");
    let newStrArray = [];;

    for (let word of strArray) {
        word = word[0].toUpperCase() + word.slice(1);
        newStrArray.push(word);
    }
    return newStrArray.join(" ");
};

module.exports = capitalize;