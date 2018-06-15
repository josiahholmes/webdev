function generatePrimes(number) {
    var primes = [];
    var counter = 2;
    var square = Math.floor(Math.sqrt(number));
    
    for (var i = 2; i <= number; i++) {
        primes.push(i);
        while (counter <= square) {
            if ((primes[i] > counter) && 
            (primes[i] % counter === 0)) {
                primes.splice(i, 1);
            }
            counter++;
        }
    }

    return primes;
}

function largestPrimeFactor(number) {
    var index = 0;
    var quotient = 0;
    var remainder = 0;
    var primeFactors = [];
    var primes = generatePrimes(number);

    for (; index < primes.length; index++) {
        quotient = number / primes[index];
        remainder = number % primes[index];
        if (remainder === 0) {
            primeFactors.push(primes[index]);
            number = quotient;
            index = 0;
        }
    }

    return primeFactors.pop();
}

// Test cases
var testOne = largestPrimeFactor(228);
var testTwo = largestPrimeFactor(189);
var testThree = largestPrimeFactor(300);
var testFour = largestPrimeFactor(13195);

console.log(testOne); // 19
console.log(testTwo); // 7
console.log(testThree); // 5
console.log(testFour); // 29