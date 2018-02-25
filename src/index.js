module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length == 0) return 0;
  else if (array.length == 1) return 1;
  var count = 1;
  var countArr = [];
  array = array.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < array.length; i++) {
    if (array[i + 1] - array[i] == 1) {
      count++;
    }
    else if (array[i + 1] - array[i] > 0) {
      countArr.push(count);
      count = 1;
    }
  }
  return Math.max.apply(Math, countArr);
}
