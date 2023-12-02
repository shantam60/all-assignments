/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1,str2){
    const clnstr1=str1.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    const clnstr2=str2.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    if(clnstr1.length!==clnstr2.length){
        return false;
    }
    return clnstr1.split('').sort().join('')===clnstr2.split('').sort().join('');
//split array of characters me convert karta hai then usko lexicographically sort karta hai after that join karta to form a string of characters 

}

console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("rat","car"));
console.log(isAnagram("awesome","awesom"));
console.log(isAnagram("qwerty","qeywrt"));


module.exports = isAnagram;
