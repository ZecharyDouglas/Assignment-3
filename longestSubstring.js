function longestSubstring(str) {
  let maxLength = 0;
  let start = 0;
  let userMap = {};

  for (let i = 0; i < str.length; i++) {
    const index = str[i];

    if (userMap[index] !== undefined && userMap[index] >= start) {
      start = userMap[index] + 1;
    }

    userMap[index] = i;

    const currentLength = i - start + 1;

    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}
module.exports = { longestSubstring };
