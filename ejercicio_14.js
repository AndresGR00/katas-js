const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
function repeatCounter(param) {
  const objectWithDifferentWords = {};

  param.forEach((word) => {
    if (objectWithDifferentWords[word]) {
      objectWithDifferentWords[word]++;
    } else {
      objectWithDifferentWords[word] = 1;
    }
  });

  return objectWithDifferentWords;
}
