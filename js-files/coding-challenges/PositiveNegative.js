function countPositivesSumNegatives(input) {
  // returns empty array if input is empty
  if (input.length === 0)
    return [];
  
  // variables declared
  var pos_count = 0, neg_sum = 0, output = [];
  for (var i = 0; i < input.length; i++) {
    // counts number of positive values
    if (input[i] > 0)
      pos_count++;
    
    // adds negative values to a total sum
    if (input[i] < 0)
      neg_sum += input[i];
  }

  // new values pushed to an output array
  output.push(pos_count);
  output.push(neg_sum);

  return output;
}

var test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
var test2 = [2, 3, 6, -8, 9, 1, 2, -10, -125, 94, 97];
var test3 = [];

console.log(countPositivesSumNegatives(test)); // [10, -65]
console.log(countPositivesSumNegatives(test2)); // [8, -143]
console.log(countPositivesSumNegatives(test3)); // []
