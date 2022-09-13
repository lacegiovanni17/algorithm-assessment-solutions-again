import allLowerCaseLetters from "./solution";

describe("Example Tests", function () {
  it("Example 1", function () {
    expect(allLowerCaseLetters("Qualified")).toBe("ualified");
  });

  it("Example 2", function () {
    expect(allLowerCaseLetters("ADecadeV")).toBe("ecade");
  });

  it("Example 3", function () {
    expect(allLowerCaseLetters("HELLO")).toBe("");
  });
});

describe("Solution Tests", function () {
  it("Test 1", function () {
    expect(allLowerCaseLetters("")).toBe("");
  });

  it("Test 2", function () {
    expect(allLowerCaseLetters("WORLD")).toBe("");
  });

  it("Test 3", function () {
    expect(allLowerCaseLetters("SaNTaCLaUS")).toBe("aaa");
  });

  it("Test 4", function () {
    expect(allLowerCaseLetters("alllowercaseletters")).toBe(
      "alllowercaseletters"
    );
  });

  it("Test 5", function () {
    expect(
      allLowerCaseLetters("AReallylongwordThatHASLetterSInDifferentCASES")
    ).toBe("eallylongwordhatetternifferent");
  });
});
