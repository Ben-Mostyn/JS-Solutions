import { romanNumerals } from "./romanNumerals";

describe("roman numerals test suits", () => {
  test.skip("passes correct argument type", () => {
    expect(() => romanNumerals([12344556])).toThrow(
      "incorrect argument type, must be string or number",
    );
  });
  test("prints correct numeral when a number is passed to function", () => {
    expect(romanNumerals(1)).toEqual("I");
    expect(romanNumerals(2)).toEqual("II");
    expect(romanNumerals(10)).toEqual("X");
    expect(romanNumerals(17)).toEqual("XVII");
    expect(romanNumerals(60)).toEqual("LX");
    expect(romanNumerals(91)).toEqual("XCI");
    expect(romanNumerals(100)).toEqual("C");
  });
});
