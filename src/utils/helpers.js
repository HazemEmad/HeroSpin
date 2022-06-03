export const getRandomNumber = (min, max) => {
  var nums = [],
    ranNums = [],
    i = max,
    j = min;
  for (let count = min; count <= max; count++) nums.push(count);
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
  }
  return ranNums;
};
