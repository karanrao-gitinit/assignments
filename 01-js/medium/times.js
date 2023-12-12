/**
 * 
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
 */

function calculateTime(runFunction) {
    /**
     * STEP 1 : Start timer
     * ---------------------
     * Used Date object to get the current time in milliseconds before running the function
     */
    const startTimer =  Date.now();

    /**
     * STEP 2 : Run Function
     * ----------------------
     * ⚠ Used Function Callback to call function outside of this current function 
     */ 
    runFunction()

    /**
     * STEP 3 : End timer 
     * ---------------------
     * Used Date object to get the current time in milliseconds after running the function
     */
    const endTimer = Date.now();

    /**
     * STEP 4 : Calculate time taken
     * ---------------------
     * - Substracted both Start timer value with End timer value and divide them with 1000,
     *   as 1000 milliseconds is equals to 1 second, it will convert the milliseconds into seconds
     * 
     * - Store the value in a new constant called execuutinTimeinSeconds
     */
    const executionTimeinSeconds = (endTimer - startTimer) / 1000;
    
    // STEP 5 : Print the calculated 
    return executionTimeinSeconds; 
}


/**
 *  Created a function called calculateSum
 *  - Runs in a loop until the condition is fulfulled
 *  - Calculate the sum until a certain user defined number
 */  

const userDefinednumber = 10000000000;

function calculateSum() {
    for (let i = 0; i < userDefinednumber; i++) {
        const num =+ i;
        const sum = num + i;
    }
}

/**
 * Called 🤙 calculateTime() function, Here I used another function
 * named calculateSum() as the parameter . 
 * Now, inside that paramete my calculteSume() function will run  
 * 
 * One more interesting thing 😄 to mention
 * The calculateSum is now used as runFunction(), check above 🔝🆙
 * 
 * runFunction() is replaced by calculateSum() 😆
 * Kinda confusing but once you run this code line by line you will understand whats
 * happening, 
 * 
 * My tip use a debugger. 🤡 
 */
const calculateExecutionTime = calculateTime(calculateSum);

console.log(`Total time taken for execution ${calculateExecutionTime} seconds`);
