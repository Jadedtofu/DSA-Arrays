// const ArrayArray = require('./ArrayArray');

// const main = () => {
//     ArrayArray.SIZE_RATIO = 3;

//     // create instance of Array class:
//     let arr = new ArrayArray();

//     // Add item to array:
//     arr.push(3);
//     arr.push(5);
//     arr.push(15);
//     arr.push(19);
//     arr.push(45);
//     arr.push(10);
//     console.log(arr);
//     // when 4th item is added, its capacity is increased to 2x length
//     // whenever length is greater than the capacity, memory size is tripled

//     // arr.pop();
//     // arr.pop();
//     // arr.pop();
//     // console.log(arr);
//     // // Removing the last three = length decreases by 3

//     // // print first item in array:
//     // console.log(`First item in array: ${arr.get(0)}`);

//     // for(let i = 0; i < arr.length; i++) {
//     //     arr.pop();
//     // }

//     // arr.push('tauhida');
//     // console.log(arr.get(0));
//     // // this is NaN b/c 'tauhida' is a string
//     // // 'memory' expects a value of type Float64Array
//     // // ^ represents an array of 64-bit floating point numbers
// }

// main();

// the _resize() function's purpose is to allocate a new, larger chunk of memory
// copying any existing values from the old to the new chunk, 
// and free the old chunk

/************************************************************** */

// 5. URLify a String:
// const urlify = (string) => {
//     return string.split(' ').join('%20');
// }
// console.log(urlify('test this out'));

// 6. Filtering array
// const filterString = (arr) => {
//     let filteredArray = [];
//     for (let i = 0, max = arr.length; i < max; i++) {
//         let num = arr[i];
//         if( num >= 5) {
//             filteredArray.push(num);
//         }
//     }
//     return filteredArray;
// }
// console.log(filterString([2, 4, 18, 29, 10, 3]));

// 7. Max sum in array  // I can probably do this with recursion??
// const maxSum = (array) => {
//     let max = -Infinity;
//     let sum;
//     for (let i = 0, arrLength = array.length; i < arrLength; i++) {
//         for (let j = i, arrLength2 = array.length; j < arrLength2; j++) {
//             sum = 0;
//             for (let k = i; k <= j; k++ ) {
//                 sum += array[k];
//             }
//             if( sum > max) {
//                 max = sum;
//             }
//         }
//     }
//     return max;
// }
// console.log(maxSum([12, -10, 15, -5, -3, 8]));

// 8. Merge arrays, sorted
// const mergeArrays = (arr1, arr2) => {
//     return [...arr1, ...arr2].sort((a, b) => a - b)
//   }
// console.log(mergeArrays([3, 4, 9, 7, 8], [12, 18, 20, 13, 15]));

// 9. Remove characters
// const removeChars = (phrase, charsToRemove) => {
//     let newPhrase = '';
//     for (let i = 0, phraseLength = phrase.length; i < phraseLength; i++) {
//         let char = phrase[i];
//         if(!charsToRemove.includes(char)) {
//             newPhrase += char;
//         }
//     }
//     return newPhrase;
// }
// console.log(removeChars('Testing this out', 'eiu'));

// 10. Products - find out products of every other number except number at each index
// const getProducts = (array) => {
//     let newArray = [];
//     for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
//         let tempArray = array.filter((element, index) => {
//             return index != i;
//         });

//         let part = tempArray[0];
//         for(let j = 1, tempLength = tempArray.length; j < tempLength; j ++) {
//             part *= tempArray[j];
//         }
//         newArray.push(part);
//     }
//     return newArray;
// }
// console.log(getProducts([1, 3, 9, 4]));

// 11. 2D Array - search through 2D array, if finds 0, set entire row and column to 0:

// 12. String Rotation
