const stringFunctions = require("./stringFunctions");
const { reverseString, isPalindrome } = stringFunctions;

describe("testing the functionality of the isPalindrome function", () => {
  test("isPalindrome should return true for anna", () => {
    expect(isPalindrome("anna")).toBe(true);
  });
  test("isPalindrome should return false for steve", () => {
    expect(isPalindrome("steve")).toBe(false);
  });
  test("isPalindrome should return no string detected", () => {
    expect(isPalindrome("")).toBe("no string detected");
  });
  expect(isPalindrome(11123333)).toBe(
    "inputString is not a string but a number , please enter a string instead"
  );
  test("isPalindrome should return no string detected for a string with less than 2 characters", () => {
    expect(isPalindrome("a")).toBe("no string detected");
  });
});

describe("testing the functionality of the reverseString function", () => {
  test("reverseString should reverse mystring", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
  test("reverseString should reverse computer", () => {
    expect(reverseString("OpenAI")).toBe("IAnepO");
  });
  test("reverseString should reverse mystring", () => {
    expect(reverseString("mystring")).toBe("gnirtsym");
  });
  test("reverseString should reverse mystring", () => {
    expect(reverseString("racecar")).toBe("racecar");
  });
  test("reverseString should reverse mystring", () => {
    expect(reverseString("mystring has spaces")).toBe("secaps sah gnirtsym");
  });
  test("reverseString should say no string detected for an empty input", () => {
    expect(reverseString("")).toBe("no string detected");
  });
  test("reverseString should say inputString is not a string but a number , please enter a string instead in case of a number being entered", () => {
    expect(reverseString(11123333)).toBe(
      "inputString is not a string but a number , please enter a string instead"
    );
  });
});
