function isPalindrome(word) {
  // Write your algorithm here
  let check = true; 
  for (let i = 0; i < word.length/2; i++) {
    console.log(i)
    console.log(`${word[i]}, ${word[word.length-i-1]}`)
    if(word[i] !== word[word.length - i-1]) {
      check = false; 
      break
    } 
  }
  return check
}

/* 
  Add your pseudocode here

  const check = true; 
  for (i, i < array.length/2, i++) 
  { if (array[i] ===  array[array.length - i]) 
  {

  }}
*/

/*
  Add written explanation of your solution here
  Check that the letter in the 1st position matches the letter in the last position
    Create a variable check that equals True
    Use a for loop to iterate through 1/2 the length of the array
    At each loop, evalute whether the ith letter = 1-ith letter
    If they match, i++, if they don't match, set check = False
    After loop has completed, return check variable
  
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

module.exports = isPalindrome;
