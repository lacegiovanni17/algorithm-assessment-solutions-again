function findMissing(arrOfNumbers) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (!arrOfNumbers.includes(number)) {
      return number;
    }
  }

  return -1;
}

export default findMissing;
