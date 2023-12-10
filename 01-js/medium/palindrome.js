/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  /**
   * STEP 1
   * ------
   * Created new Constant called 'cleanStr' to store cleaned String
   * Convert string to lower case and remove non-alphanumeric characters
   * used regular expression to replace non-alphanumeric characters
   */
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  /**
   * STEP 2
   * ------
   * Splitted the String into single characters
   * Reversed and joined it to create a new string
   * Stored in as a new constant called 'reversedStr'  
   */
  const reversedStr = cleanStr.split('').reverse().join('');
  
  /**
   * STEP 3
   * ------
   * Used ternary operator to define the condition
   * Condition: if values matched it should return true else false   
   */

  return cleanStr === reversedStr ? true : false;
}


const str = 'Able, was I ere I saw Elba!'
console.log(isPalindrome(str));

module.exports = isPalindrome;
