export const fillSquare = (square) => {
  if (!Array.isArray(square)) {
    throw new Error("Argument square, must be an array");
  }

  // Make a copy of the original array
  const squareCopy = square.slice();
  // grab the array with the highest number of items (this will be our guide)
  const highestValue = [];
  for (const item of squareCopy) {
    highestValue.push(item.length);
  }

  // Loop through each array and the correct number of items onto the end
  squareCopy.forEach((item) => {
    for (let i = item.length; i < Math.max(...highestValue); i++) {
      item.push(null);
    }
  });

  return squareCopy;
};
