var lengthOfLastWord = function(s) {
    //we are doing this problem by checking it in reverse order
    //it doesnt make sense to do it from the beginning if we only need the last word 
    var i = s.length-1; //starting at the end 
    var lastWord = 0;
    
    while (s[i] == " ") i--;
    //this will check for any spaces at the end of the string
    //cant use an if statement if not it will only go through it once 
    //and it will return 0 bc the 2nd time it sees a space it will jump past the next while loop 
    //and go straight to the return statement 
    
    while (i>=0 && s[i]!=" "){
        lastWord++;
        i--;
    }
    //this while loop checks to make sure that i is in bounds 
    //it also checks to make sure that s[i] is not a space 
    //it will only loop through once until it gets to a space after the word or the end of the string 
    
    return lastWord;
};

// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// Constraints:
// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s. 