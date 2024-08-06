let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True



// another solution 
console.log(word.toLowerCase().includes(letterZ)); // Output => True
console.log(word.startsWith(letterE.toUpperCase())); // Output => True
console.log(word.endsWith(letterO.toLowerCase())); // Output => True