function allLowerCaseLetters(str) {
  let lowercasedLetters = "";

  for (const letter of str) {
    if (letter === letter.toLowerCase()) {
      lowercasedLetters += letter;
    }
  }

  return lowercasedLetters;
}

export default allLowerCaseLetters;
