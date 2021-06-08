const calculator = require("../code/calculator");

test("2+4 equal 6", () => {
  expect(calculator.add(2, 4)).toBe(6);
});

test("2-4 equal 2", () => {
  expect(calculator.substract(2, 4)).toBe(-2);
});

test("2*4 equal 8", () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});

test("2 divide 4 equal 0.5", () => {
  expect(calculator.divide(2, 4)).toBe(0.5);
});
