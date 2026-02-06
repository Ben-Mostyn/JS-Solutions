import { fillSquare } from "./fillsquare.js";

const TwoByTwo = [[1, 2], [1]];
const ThreeByThree = [[1, 2, 3], [1], [1, 2]];
const nonArray = "123";
// Test to see if the function actually produces what it is meant to produce
describe("test suite for fillsquare", () => {
  test("Function actually returns the correct square", () => {
    const two = fillSquare(TwoByTwo);

    for (const item of two) {
      expect(item.length).toEqual(2);
    }

    const three = fillSquare(ThreeByThree);

    for (const item of three) {
      expect(item.length).toEqual(3);
    }
  });

  test("Throws error if array is not passed", () => {
    expect(() => fillSquare(nonArray)).toThrow(
      "Argument square, must be an array",
    );
  });
});
