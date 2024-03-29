// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.
 
// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

var isPalindrome = function(x) {
  if(x < 0) return false
    let reverse = parseInt(x.toString().split("").reverse().join(""))
    return x === reverse
};
