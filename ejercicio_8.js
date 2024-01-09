const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(param) {
  let maxLength = 0;
  let finalString;
  param.forEach((string) => {
    if (string.length > maxLength) {
      maxLength = string.length;
      finalString = string;
    }
  });
  return finalString;
}
