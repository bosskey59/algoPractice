var searchInsert = function (nums, target) {
  // cut array in half
  let offsetIndex = 0;
  const notFound = true;
  while (notFound) {
    let currentIndex = parseInt(nums.length / 2);
    let selectedValue = nums[currentIndex];
    console.log("nums", nums);
    console.log("selectedValue", selectedValue);
    console.log("currentIndex", currentIndex);
    // check if we landed value
    if (target === selectedValue) return currentIndex + offsetIndex;
    else if (selectedValue > target) {
      // if selectedValue > target keep the left side of the array, change index offset
      if (nums.length > 1) {
        nums.splice(currentIndex, nums.length - 1);
      } else {
        offsetIndex += currentIndex;
        return offsetIndex;
      }
    }
    // if selectedValue < target keep the right side of the array, don't index to offset.
    else if (selectedValue < target) {
      offsetIndex += currentIndex;
      if (nums.length > 1) {
        nums.splice(0, currentIndex);
      } else {
        return offsetIndex + 1;
      }
    }
  }
  // when we get to one value in array check it's value and return index before or after it depending on <> comparinson.
};

// n = [1, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
m = [1, 3, 5, 6];
t = 7;

fail = [1, 3, 5, 6, 7];
tar = 4;
console.log(searchInsert(fail, tar));
