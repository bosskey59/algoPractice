var twoSum = function (nums, target) {
  // key = value counter desired, value = index of where it's original came from
  const counterParts = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const counter = target - currentNum;
    // console.log(counterParts);
    if (counterParts[currentNum] >= 0) {
      return [i, counterParts[currentNum]];
    } else {
      counterParts[counter] = i;
    }
  }
};

nums = [2, 7, 11, 15, 999, 1000];
t = 1999;
twoSum(nums, t);
