// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    let newArray = [];
    let numChunks = (array.length % size === 0) ? array.length / size : Math.round(array.length / size);

    for (let i = 0; i < array.length; i + size) {

        // can't splice off more than remaining elements....
        if (i + size > array.length) {
            newArray.push(array.splice(i, array.length - i));
        } else {
            newArray.push(array.splice(i, size));
        }
    };

    return (newArray);
}

module.exports = chunk;