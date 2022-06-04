export const getRandomNumber = () => {
  var nums = [],
    ranNums = [],
    i = 20,
    j = 0;
  for (let count = 0; count <= 20; count++) nums.push(count);
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(nums[j]);
    nums.splice(j, 1);
  }
  return ranNums;
};
export const getEnvFile = str => str.replace(';', '').replaceAll("'", '');
