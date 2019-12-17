// Your code here

const mapToNegativize = sourceArray => {
  let result = [];
  for (const element of sourceArray) {
    let x = element * -1;
    result.push(x);
  }
  return result;
};

const mapToNoChange = sourceArray => {
  return sourceArray;
};

const mapToDouble = sourceArray => {
  let result = [];
  for (const element of sourceArray) {
    let x = element * 2;
    result.push(x);
  }
  return result;
};

const mapToSquare = sourceArray => {
  let result = [];
  for (const element of sourceArray) {
    let x = element * element;
    result.push(x);
  }
  return result;
};

const reduceToTotal = (sourceArray, startingPoint = 0) => {
  let total = startingPoint;
  for (const element of sourceArray) {
    total = total + element;
  }
  return total;
};

const reduceToAllTrue = sourceArray => {
  for (const element of sourceArray) {
    if (!element) return false;
  }
  return true;
};

const reduceToAnyTrue = sourceArray => {
  for (const element of sourceArray) {
    if (element) return true;
  }
  return false;
};
