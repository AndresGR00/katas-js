const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(param) {
  let totalSum = 0;
  param.forEach(element => {
    if(typeof element === 'number'){
        totalSum += element;
    } else {
        totalSum += element.length
    }
  });
  return totalSum
}

console.log(averageWord(mixedElements));
