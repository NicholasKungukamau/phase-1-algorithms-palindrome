function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
*/
// steps
// 1. Make function called isPalindrome.
// 2. Make constant called wordArray.
// 3. Split our word using .split('')  and assign to wordArray.
// 4. Use .reverse() to reverse our word.
// 5. Assign the reversed word to new const called reverseWordArray.
// 7. Return joined array.
// 6. Compare joined array to word string using strict equality getOperator.



/*
  Add written explanation of your solution here
*/
// Use java script inbuilt function string.reverse() to change our string to array and compare each individual characters in string  using strict opeator to make sure they form word which is palindrome and return the compared characters as string by using join(' ') method.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
   
console.log("");

 console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

   console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

   console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

   console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

   console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");
}

module.exports = isPalindrome;
