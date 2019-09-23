const testVals = [1, 2, 3, 4, 5, 6, 7];

function sumFor(nums) {
  let total = 0;
  for (const iter of nums) {
    total += iter;
  }
  return total;
}

function sumWhile(nums) {
  let total = 0;
  let iter = 0;
  while (iter < nums.length) {
    total += nums[iter];
    iter++;
  }
  return total;
}

function sumRecursion(nums) {
  if (nums.length === 0) return 0;
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor(testVals));
console.log(sumWhile(testVals));
console.log(sumRecursion(testVals));
console.log(sumTheSimpleWay(testVals));
