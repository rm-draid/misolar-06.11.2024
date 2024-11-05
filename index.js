// function getRandomElements(arr, n) {
//   let result = [];
//   let usedIndices = new Set();
//   while (result.length < n) {
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     if (!usedIndices.has(randomIndex)) {
//       result.push(arr[randomIndex]);
//       usedIndices.add(randomIndex);
//     }
//   }
//   return result;
// }

// console.log(getRandomElements([1, 2, 3, 4, 5, 6, 7, 8], 3));
//2
// function getUniqueWords(str) {
//   let words = str.split(" ");
//   let uniqueWords = [...new Set(words)];
//   return uniqueWords;
// }

// console.log(getUniqueWords("apple banana apple orange banana"));
//3
// function flattenArray(arr) {
//   return arr.flat(Infinity);
// }

// console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
//4
// function capitalizeWords(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(capitalizeWords("hello world from javascript"));
