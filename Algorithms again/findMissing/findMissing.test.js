import findMissing from "./solution";

describe("Example tests", () => {
  it("Example 1", () => {
    expect(findMissing([0, 1, 2, 3, 4, 5, 6, 7, 8])).toBe(9);
  });

  it("Example 2", () => {
    expect(findMissing([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(-1);
  });
});

describe("Solution tests", () => {
  it("Test 1", () => {
    expect(findMissing([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(-1);
  });

  it("Test 2", () => {
    expect(
      findMissing([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9])
    ).toBe(-1);
  });

  it("Test 3", () => {
    expect(findMissing([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(0);
  });

  it("Test 4", () => {
    expect(findMissing([9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(0);
  });

  it("Test 5", () => {
    expect(findMissing([0, 1, 2, 4, 5, 6, 3, 8, 9])).toBe(7);
  });

  it("Test 6", () => {
    expect(findMissing([1, 2, 3, 4, 5, 0, 5, 0, 5, 6, 7, 7, 7, 7, 8])).toBe(9);
  });

  it("Test 7", () => {
    expect(findMissing([2, 4, 6, 8, 1, 1, 3, 3, 7, 9, 0, 0])).toBe(5);
  });

  it("Test 8", () => {
    expect(findMissing([5, 4, 3, 2, 1, 0, 9, 8, 7, 5])).toBe(6);
  });

  it("Test 9", () => {
    expect(findMissing([5, 4, -3, 2, 1, 0, 9, 8, 7, 6])).toBe(3);
  });

  it("Test 10", () => {
    expect(
      findMissing([
        -5, 5, -4, 4, -3, 3, -2, -2, 1, -1, 0, -9, 9, -8, 8, 7, -7, 6, -6,
      ])
    ).toBe(2);
  });
});
