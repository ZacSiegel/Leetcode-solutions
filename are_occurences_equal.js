// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

const areOccurrencesEqual = (str)  => {
    let freq = {}
    for(let letter of str){
        freq[letter] ? freq[letter]++ : freq[letter] = 1
    }
   return new Set(Object.values(freq)).size === 1
};
