/**
 * WOVEN BACKEND DEVELOPER INTERVIEW ASSESSMENT
 * Author: Emmanuel Popoola
 */

/**
 * Your input is an array containing unsorted words.
 * Suggest an efficient solution for implementing hasWord(word) which receives a word and returns true if it is in the array and false otherwise.
 * You are not allowed to use JS Objects (maps) in your solution but can use Arrays.
 * Solution time complexity is more important than its space complexity.
 */

const words = ["go", "home", "and", "eat", "food"];

function hasWord(word) {
  return words.includes(word);
}

console.log(hasWord("home")); // expect true
console.log(hasWord("ho")); // expect false
