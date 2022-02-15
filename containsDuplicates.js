// var containsDuplicate = function (nums) {
//   const found = {};
//   for (num of nums) {
//     if (found[num]) {
//       return true;
//     } else {
//       found[num] = 1;
//     }
//   }
//   return false;
// };
var containsDuplicate = function (nums) {
  //   console.log(nums.length);
  //   console.log([...new Set(nums)]);
  return nums.length !== new Set(nums).size;
};

const nums = [1, 2, 3, 1];

console.log(containsDuplicate(nums));
