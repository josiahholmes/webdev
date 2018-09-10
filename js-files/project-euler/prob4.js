function isPalindrome(str) {
    if (typeof str === "number") {
        str = str.toString();
    }

    var len = str.length;
    if (len < 2) return true;

    for (var i = 0; i < len/2; i++) {
        if (str[i] === str[len-i-1])
            return true;
    }
    return false;
}

function largestPalindromeProduct() {
    var product = 0;
    var palindromes = [];
    var first = 100, second = 100;

    for (; first <= 999; first++) {
        do {
            product = first * second;
            if (isPalindrome(product)) {
                palindromes.push(product);
            }
            second++;
        } while (second <= 999);
        second = 100;
    }
    return palindromes;
}

var answer = isPalindrome(10000);
console.log(answer);