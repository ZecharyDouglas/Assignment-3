const maxArea = require("./containMostWater"); // Assuming the function is in a separate file

describe("maxArea ", () => {
  it("returns the maximum area for the array", () => {
    expect(maxArea.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(maxArea.maxArea([4, 3, 2, 1, 4])).toBe(16);
    expect(maxArea.maxArea([1, 2, 1])).toBe(2);
    expect(maxArea.maxArea([1, 1])).toBe(1);
    expect(maxArea.maxArea([2, 3, 10, 5, 7, 8, 9])).toBe(36);
  });
});
