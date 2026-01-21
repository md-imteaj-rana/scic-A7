// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

function capitalizeWords(str) {
  let words = str.split(" ");
  let capitalizedWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      let capitalizedWord = word[0].toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    }
  }

  return capitalizedWords.join(" ");
}

console.log(capitalizeWords("hello world")); 