// Finding multiples of 3 or 5 and summing to a total number.
function sumOfMultiples(endpoint) {
    var sum = 0;
    for (var current = 0; current < endpoint; current++) {
        if ((current % 3 === 0) || (current % 5 === 0)) {
            sum += current;
        }
    }
    return sum;
}

var answer = sumOfMultiples(1000);
console.log(answer);