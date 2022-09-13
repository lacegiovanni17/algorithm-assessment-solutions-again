function withinRange(arrOfNumbers, lowerRange, upperRange) {
  let count = 0;

  for (let i = 0; i < arrOfNumbers.length; i++) {
    const number = arrOfNumbers[i];

    if (number >= lowerRange && number <= upperRange) {
      count++;
    }
  }

  return count;
}

export default withinRange;
