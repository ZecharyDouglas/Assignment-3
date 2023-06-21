const twoSum = (nums, target) => {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const pair = target - nums[i];

    if (numMap.has(pair)) {
      return [numMap.get(pair), i];
    }

    numMap.set(nums[i], i);
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 17));
module.exports = { twoSum };
