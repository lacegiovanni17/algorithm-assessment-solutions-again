// Do not modify the dictionary below
const deutschDict = {
  er: "he",
  sie: "she",
  es: "it",
  du: "you",
  ich: "I",
  wir: "we",
  ihr: "you",
  brot: "bread",
  ein: "a",
  eine: "a",
  frau: "woman",
  mann: "man",
  kind: "child",
  madchen: "girl",
  junge: "boy",
  bist: "are",
  bin: "am",
  ist: "is",
  und: "and",
  wasser: "water",
};
// Do not modiy the dictionary above

function deutschTranslator(sentence) {
  const words = sentence.split(" ");
  let translations = "";

  for (const word of words) {
    const translation = deutschDict[word.toLowerCase()];

    if (translation) {
      translations += ` ${translation}`;
    }
  }

  return translations.trim();
}

export default deutschTranslator;
