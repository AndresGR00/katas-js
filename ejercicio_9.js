const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  return param.reduce((acc, number) => {
    return acc + number;
  }, 0);
}