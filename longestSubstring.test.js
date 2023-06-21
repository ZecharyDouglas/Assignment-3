const longestSubstring = require("./longestSubstring"); // Assuming the function is in a separate file

describe("longestSubstring", () => {
  it("give the correct length of the longest substring w/o repeating characters", () => {
    expect(longestSubstring.longestSubstring("abcabcbb")).toBe(3);
    expect(longestSubstring.longestSubstring("bbbbb")).toBe(1);
    expect(longestSubstring.longestSubstring("pwwkew")).toBe(3);
  });
});
