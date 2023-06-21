const twoSum = require("./twoSum");

describe("twoSum.twoSum", () => {
  it("returns the indices of the pair that sums up to the target", () => {
    expect(twoSum.twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum.twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum.twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
    expect(twoSum.twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  it("returns an empty array if no pair is found", () => {
    expect(twoSum.twoSum([2, 7, 11, 15], 5)).toEqual([]);
    expect(twoSum.twoSum([1, 2, 3], 7)).toEqual([]);
    expect(twoSum.twoSum([], 10)).toEqual([]);
  });
});
