/* Returns the middle character if a word if odd,
middle two characters if the word is even. */

var getMiddle = function(str) {

    // returns entire string if length is 1
    if (str.length === 1)
        return str;
    
    // if word is odd, middle letter is returned
    // Math floor function used to return dividend
    // without remainder
    if (str.length % 2 === 1)
        return str[Math.floor(str.length/2)];
    
    // default case for even-letter words
    // returns middle letter and letter to the
    // left of it, as string indices begin at 0.
    return str[str.length/2 - 1] + str[str.length/2];
};

// Tests
console.log(getMiddle("test")); // should return 'es'
console.log(getMiddle ("testing")); // should return 't'
console.log(getMiddle("middle")); // should return 'dd'
console.log(getMiddle("A")); // should return 'A'