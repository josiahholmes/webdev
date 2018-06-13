// Finding the sum of even Fibonacci numbers below 4,000,000
function fibonacci(index) {
    if (index < 2) return index;
    return fibonacci(index - 1) + fibonacci(index - 2);
}

function evenFibSum(endpoint) {
    var sum = 0;
    var fib = 0;
    var current = 0;

    while (fib < endpoint) {
        fib = fibonacci(current++);
        if (fib % 2 === 0) {
            sum += fib;
        }
    }
    return sum;
}

var answer = evenFibSum(4000000);
console.log(answer);