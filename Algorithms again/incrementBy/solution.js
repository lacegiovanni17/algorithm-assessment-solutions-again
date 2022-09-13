function incrementBy(arrayOfNumbers, value) {
  return arrayOfNumbers.map((obj) => {
    return { num: obj.num + value };
  });
}

export default incrementBy;
