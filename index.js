function reverseWord(word){
  // const wordArray=word.split(" ")
  // const reversedArray=wordArray.reverse()
  // const reversedWord=reversedArray.join("")
  // return reversedWord;
  return word.split("").reverse().join("");
}



function isPalindrome(word) {
  // Write your algorithm here

  const reversedWord=reverseWord(word);
  return word===reversedWord
  
}

/* 
  Add your pseudocode here
*/
// reverse the input string


// if the reversed string is the same as the input
//   return true
// else
//   return false
/*

  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
console.log("=>", isPalindrome("ab"));

module.exports = isPalindrome;
