const mapToNegativize = sourceArray => {
  return sourceArray.map(n => n * -1);
};

const mapToNoChange = sourceArray => {
  return sourceArray.map(n => n);
};

const mapToDouble = sourceArray => {
  return sourceArray.map(n => n * 2);
};

const mapToSquare = sourceArray => {
  return sourceArray.map(n => n * n);
};

//reduce

const reduceToTotal = (sourceArray, staringPoint = 0) => {
  let total = staringPoint;
  for (const arr of sourceArray) {
    total = total + arr;
  }
  return total;
};

const reduceToAllTrue = sourceArray => {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) return false;
  }
  return true;
};

const reduceToAnyTrue = sourceArray => {
  for (const arr of sourceArray) {
    if (arr) return true;
  }
  return false;
};
