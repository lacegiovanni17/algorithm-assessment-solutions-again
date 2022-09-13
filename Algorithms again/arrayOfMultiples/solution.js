function arrayMultiples(arrOfNumbers) {
  var multiples = [];

  for (var number of arrOfNumbers) {
    multiples.push(number);
    multiples.push(number * 2);
    multiples.push(number * 3);
    multiples.push(number * 4);
    multiples.push(number * 5);
  }

  return multiples;
}

export default arrayMultiples;
