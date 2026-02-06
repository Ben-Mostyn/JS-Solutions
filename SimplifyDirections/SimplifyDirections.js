export const simplifyDirections = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Array must be passed as argument");
  }

  const simpleDirections = [];

  arr.forEach((item) => {
    if (item === "NORTH") {
      if (simpleDirections.includes("SOUTH")) {
        simpleDirections.splice(simpleDirections.indexOf("SOUTH"), 1);
      } else simpleDirections.push(item);
    }
    if (item === "SOUTH") {
      if (simpleDirections.includes("NORTH")) {
        simpleDirections.splice(simpleDirections.indexOf("NORTH"), 1);
      } else simpleDirections.push(item);
    }
    if (item === "EAST") {
      if (simpleDirections.includes("WEST")) {
        simpleDirections.splice(simpleDirections.indexOf("WEST"), 1);
      } else simpleDirections.push(item);
    }
    if (item === "WEST") {
      if (simpleDirections.includes("EAST")) {
        simpleDirections.splice(simpleDirections.indexOf("EAST"), 1);
      } else simpleDirections.push(item);
    }
  });

  return simpleDirections;
};
