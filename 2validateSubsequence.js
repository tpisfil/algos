//Thomas Pisfil | 03/21/2022

//=============================================================================
//-------------------------------- PROMPT -------------------------------------
//=============================================================================
// Given two non-empty arrays of integers, write a function that determines
// whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent
// in the array but that are in the same order as they appear in the array. For
// instance, the numbers <span>[1, 3, 4]</span> form a subsequence of the array
// <span>[1, 2, 3, 4]</span>, and so do the numbers <span>[2, 4]</span>. Note
// that a single number in an array and the array itself are both valid
// subsequences of the array.

//=============================================================================
//---------------------------- MY SOLUTION ------------------------------------
//=============================================================================
function isValidSubsequence(array, sequence) { //should return a boolean 
    //is seq in the array? how would we check that?
    //we could check if each number in from seq is in the array??? 
    //but it would have to be in order 

    let j = 0;

    for (let i=0; i<array.length; i++){ //iterate through every value in array 
        if (array[i]==sequence[j]){ //checks if it matches with the current value of j
            j += 1; //if it does, move to the next value of j 
        }
    }
    return j==sequence.length; //this would return true if it goes through each of the sequences values 
    //if the last number of seq has an index value of [length-1],
    //then once it gets to that 1 gets added to j bc it goes in the if statement 
    //that would set j equal to the length of the sequence 
}


//=============================================================================
//----------------------------- SOLUTION --------------------------------------
//=============================================================================
//pretty much the same thing as mine which means Im a beast :) 
//O(n) time | O(1) space 
function isValidSubsequence (array, sequence) {
    let seqIdx = 0;

    for (const value of array){ //go through every number in array 
        if(seqIdx === sequence.length){
            return true; //it will get here if it finds the sequence before finishing the array
        }
        if (sequence[seqIdx] === value){
            seqIdx++; //if it matches then point to the next number in seq to find in array 
        }
    }
    return seqIdx === sequence.length;
}
//=============================================================================
//----------------------------- TEST CASES ------------------------------------
//=============================================================================
array = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [1, 6, -1, 10];

console.log(); 