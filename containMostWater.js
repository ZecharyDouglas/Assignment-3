const maxArea = (height) => {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let currentHeight = Math.min(height[left], height[right]);
    let currentWidth = right - left;
    let area = currentHeight * currentWidth;

    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
module.exports = { maxArea };
