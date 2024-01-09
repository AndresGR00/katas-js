const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  const totalSum = param.reduce((acc, number) => {
    return acc + number
  }, 0)
  return totalSum / param.length
}