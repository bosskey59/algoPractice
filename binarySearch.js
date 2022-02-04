const search = (nums, target) => {
  let notFound = true;
  let indexOffset = 0;
  while (notFound) {
    const halfwayIndex = parseInt(nums.length / 2);
    console.log(nums, halfwayIndex, target);
    if (nums.length === 1 && nums[halfwayIndex] != target) {
      return -1;
    } else if (nums[halfwayIndex] === target) {
      return halfwayIndex + indexOffset;
    } else if (nums[halfwayIndex] > target) {
      nums = nums.splice(0, halfwayIndex);
    } else if (nums[halfwayIndex] < target) {
      nums = nums.splice(halfwayIndex, nums.length - 1);
      indexOffset = indexOffset + halfwayIndex;
    } else {
      return -1;
    }
  }
};
const test1 = [-1, 0, 3, 5, 9, 12];
const test2 = [-1, 0, 3, 5, 9, 12];

console.log(search(test1, 9));
console.log(search(test2, 2));
