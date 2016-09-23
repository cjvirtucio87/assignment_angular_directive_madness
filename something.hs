// For this algorithm, you are given an array of coin denominations and an amount of change. In this world, you can have any denomination of coin, not just the pennies, nickels, dimes and quarters we are used to. Your job is to find the minimum number of coins needed to create the specified amount of change. If it is not possible to create the amount, return -1. You can assume that you have an infinite number of each coin. For example, if you have are given coins [1, 2, 5] and amount = 11, the smallest number of coins would be 3 (5+5+1).
// Another test case: [1,4,6] and 8 should return 2 (4+4)


var change = function(array, amount) {
  var total = 0;
  var change = array.sort
  for(var i = 0; i < change.length; i++) {
    while (total < amount) {
      total + change[i];
    }
  }
  return total;
  
}

change([1,2,5], 11)
change([1,4,6], 8)