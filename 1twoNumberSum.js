//Thomas Pisfil | 03/15/2022

//=============================================================================
//-------------------------------- PROMPT -------------------------------------
//=============================================================================
// Write a function that takes in a nonepresenting a target sum. If-empty array of distinct integers and an
// integer r any two numbers in the input array sum
// up to the target sum, the function should return them in an array, in any
// order. If no two numbers sum up to the target sum, the function should return
// an empty array.

// Note that the target sum has to be obtained by summing two different integers
// in the array; you can't add a single integer to itself in order to obtain the
// target sum.

// You can assume that there will be at most one pair of numbers summing up to
// the target sum.
//=============================================================================
//---------------------------- MY SOLUTION ------------------------------------
//=============================================================================
//*** MY SOLUTION ***//
//O(n^2) time | O(1) space

// function twoNumberSum(array, targetSum) {
//     const newArray = [];

//     for (let i=0; i<array.length-1; i++) { //has to be -1 here or else it will go extra and check the last value but we already checked it with j
//         // console.log("this is i: "+array[i]);
//         for (let j=i+1; j<array.length; j++) { //uses a double for loop to check a value against the remaining values 
//             // console.log("this is j: "+array[j]);
//             if (array[i]+array[j]==targetSum) { //if it equals to the target sum then enter this if statement 
//                 newArray[0] = array[i];
//                 newArray[1] = array[j];
//                 return newArray; //return the array with the two values 
//             }
//         }
//     }
//     return newArray; //returns an empty array
// }
//=============================================================================
//----------------------------- SOLUTION --------------------------------------
//=============================================================================
//O(n) time | O(n) space

function twoNumberSum(array, targetSum) {
    //we know x+y=targetSum
    //we know x is the number it is iterating through so solve for y
    //y=targetSum-x
    //if y is in the hashtable then x+y will get us our target sum, return [x,y]
    //if not add x to the hashtable

    const numsHash = {}; //create hash table 

    for (const x of array) { //for...of will go through each one IN ORDER, if you use for...in, order is not guaranteed 
        const y = targetSum - x; //determine the value of y 
        if (y in numsHash){  //check if y in hashtable
            return [y, x]; //if it is return x and y 
        } else {
            numsHash[x] = true; //if not add x to the hashtable 
        }
    }
    return []; //if no pair then return an empty array
}
//=============================================================================
//----------------------------- TEST CASES ------------------------------------
//=============================================================================
// array = [3, 5, -4, 8, 11, 1, -1, 6];
// targetSum = 10;

// array = [4, 6];
// targetSum = 10;

array= [3, 5, -4, 8, 11, 1, -1, 6];
targetSum= 15;

console.log(twoNumberSum(array, targetSum));