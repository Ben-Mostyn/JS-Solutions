import { simplifyDirections } from "./SimplifyDirections";

const firstArr = ["NORTH", "SOUTH", "WEST"];
const secondArr = ["NORTH", "SOUTH", "WEST", "EAST", "NORTH", "NORTH"];
const thirdArr = ["NORTH", "SOUTH", "WEST", "EAST"];
const noneArr = "NORTH";

describe("Simplify Directions test suite", () => {
  test("Directions are simplified when function is executed", () => {
    const first = simplifyDirections(firstArr);
    expect(first).toEqual(["WEST"]);
    const second = simplifyDirections(secondArr);
    expect(second).toEqual(["NORTH", "NORTH"]);
    const third = simplifyDirections(thirdArr);
    expect(third).toEqual([]);
  });
  test("Throws error if array not passed", () => {
    expect(() => simplifyDirections(noneArr)).toThrow(
      "Array must be passed as argument",
    );
  });
});
