import deutschTranslator from "./solution";

describe("Example Tests", function () {
  it("Example 1", function () {
    expect(deutschTranslator("ihr wir")).toBe("you we");
  });
  it("Example 2", function () {
    expect(deutschTranslator("du bist ein kind")).toBe("you are a child");
  });
  it("Example 3", function () {
    expect(deutschTranslator("brot")).toBe("bread");
  });
});

describe("Solution Tests", function () {
  it("Test 1", function () {
    expect(deutschTranslator("ich bin ein mann und sie ist eine frau")).toBe(
      "I am a man and she is a woman"
    );
  });

  it("Test 2", function () {
    expect(deutschTranslator("madchen")).toBe("girl");
  });

  it("Test 3", function () {
    expect(deutschTranslator("ein junge und ein madchen")).toBe(
      "a boy and a girl"
    );
  });

  it("Test 4", function () {
    expect(deutschTranslator("sie ist eine frau und er ist ein mann")).toBe(
      "she is a woman and he is a man"
    );
  });

  it("Test 5", function () {
    expect(deutschTranslator("es ist brot")).toBe("it is bread");
  });

  it("Test 6", function () {
    expect(deutschTranslator("ich bin ein madchen und du bist eine frau")).toBe(
      "I am a girl and you are a woman"
    );
  });

  it("Test 7", function () {
    expect(deutschTranslator("er sie es")).toBe("he she it");
  });

  it("Test 8", function () {
    expect(deutschTranslator("brot und wasser")).toBe("bread and water");
  });

  it("Test 9", function () {
    expect(deutschTranslator("Ihr Wir")).toBe("you we");
  });

  it("Test 10", function () {
    expect(deutschTranslator("Du bist ein Madchen und ich bin ein junge")).toBe(
      "you are a girl and I am a boy"
    );
  });
});
