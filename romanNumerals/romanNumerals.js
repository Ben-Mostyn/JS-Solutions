const romanNumeralsMatcher = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
};

export const romanNumerals = (number) => {
  if (number > 100 || number <= 0) {
    throw new Error(
      "This number is too big or too small, please pass a number that is < 100 or greater than 0",
    );
  }
  const split = number.toString().split("");
  const numberConversion = split.map(Number);

  let returnNum = "";

  if (number === 100) {
    returnNum = "C";
  }

  if (numberConversion.length === 2) {
    const match = numberConversion[0] * 10;
    returnNum = romanNumeralsMatcher[numberConversion[1]]
      ? romanNumeralsMatcher[match] + romanNumeralsMatcher[numberConversion[1]]
      : romanNumeralsMatcher[match];
  }

  if (numberConversion.length === 1) {
    returnNum = romanNumeralsMatcher[numberConversion[0]];
  }

  return returnNum;
};
