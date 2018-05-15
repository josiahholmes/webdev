/* Returns the middle character if a word if odd,
middle two characters if the word is even. */

let getMiddle = (s) => {

    // returns entire string if length is 1
    if (s.length === 1)
        return s;
    
    // if word is odd, middle letter is returned
    // Math floor function used to return dividend
    // without remainder
    if (s.length % 2 === 1)
        return s[Math.floor(s.length/2)];
    
    // default case for even-letter words
    // returns middle letter and letter to the
    // left of it, as string indices begin at 0.
    return s[s.length/2 - 1] + s[s.length/2];
}

// Tests
console.log(getMiddle("test")); // should return 'es'
console.log(getMiddle ("testing")); // should return 't'
console.log(getMiddle("middle")); // should return 'dd'
console.log(getMiddle("A")); // should return 'A'