function findShort(s) {
  var shortest_length = 999, strarr = s.split(" ");

  for (var i = 0; i < strarr.length; i++) {
    if (shortest_length > strarr[i].length)
      shortest_length = strarr[i].length;
  }
  return shortest_length;
}

var test = "This tests whether function findShort finds the shortest word";
var test2 = "These violent delights have violent ends";
var test3 = "GitHub, also known as Facebook for coders";

console.log(findShort(test)); // 3
console.log(findShort(test2)); // 4
console.log(findShort(test3)); // 2