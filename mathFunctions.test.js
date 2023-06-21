const mathFunctions = require("./mathFunctions");
const { add, subtract, multiply, divide } = mathFunctions;

describe("add subtract divide and multiply functions should perform namesake tasks ", () => {
  test("add function should successfully add two numbers giving the correct answer ", () => {
    expect(add(3, 5)).toBe(8);
  });
  test("subtract function should successfully subtract two numbers giving the correct answer ", () => {
    expect(subtract(3, 5)).toBe(-2);
  });
  test("multiply function should successfully multiply two numbers giving the correct answer ", () => {
    expect(multiply(3, 5)).toBe(15);
  });
  test("divide function should successfully divide two numbers giving the correct answer ", () => {
    expect(divide(3, 5)).toBe(0.6);
  });
});
