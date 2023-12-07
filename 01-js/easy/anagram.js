/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  /**
   * STEP 1
   * ------- 
   * Converting both the strings to Lowercase format for uniform word format
   */
  const lowercaseStr1 = str1.toLowerCase();
  const lowercaseStr2 = str2.toLowerCase(); 

  /**
   * STEP 2
   * ------
   * Resuffelling Characters
   * Defined two new constants which will store the new resuffelled value of lowercaseStr1 and lowercaseStr2
   * Split them into single characters
   * Sorting the characters into an order
   * Joining them all together to creater a new word.
   */
  const resuffelledstr1 = lowercaseStr1.split('').sort().join('');
  const resuffelledstr2 = lowercaseStr2.split('').sort().join('');

  /**
   * STEP 3
   * -------
   * Comparing the new values stored constants created in STEP 3
   */
 return resuffelledstr1 === resuffelledstr2; 

}

const str1 = 'Evil';
const str2 = 'Vile';

console.log(isAnagram(str1, str2));

module.exports = isAnagram;

