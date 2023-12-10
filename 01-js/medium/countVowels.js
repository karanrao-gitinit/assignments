/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
/**
 * STEP 1
 * -------
 * Used Match method to match the 'a, e, i, o, u' in the parameter
 * Used litral Regular expression and 'gi' is 'g = Global' and 'i = case-insensetive' *
 */
    const matchVowels = str.match(/[aeiou]/gi);
    /**
     * STEP 2
     * ------
     * Used ternary operator to define the condition
     * Condition: if vowels matched then it should return the length of matchVowels
     * which stores the matched vowels else it will return 0
     */  
    return matchVowels ? matchVowels.length : 0;
}

const str = 'I am a hero';
console.log(countVowels(str));

module.exports = countVowels;
