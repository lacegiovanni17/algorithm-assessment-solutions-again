import withinRange from "../solution";

describe("Example tests", () => {
  it("Example 1", () => {
    expect(withinRange([2, 3, 0, 1, 7], 4, 8)).toBe(1);
  });

  it("Example 2", () => {
    expect(withinRange([3, 3, 3, 5, 18, 6, 20], 15, 30)).toBe(2);
  });

  it("Example 3", () => {
    expect(withinRange([4, 6, 2, 6, 7, 7], 2, 7)).toBe(6);
  });
});

describe("Solution tests", () => {
  it("Test 1", () => {
    expect(withinRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 9)).toBe(5);
  });

  it("Test 2", () => {
    expect(withinRange([100, 450, 900, 4500, 9000], 0, 90)).toBe(0);
  });

  it("Test 3", () => {
    expect(
      withinRange(
        [
          1, 10, 400, 2000, 5000, 10000, 12000, 100000, 250000, 900000,
          10000000,
        ],
        0,
        249999
      )
    ).toBe(8);
  });

  it("Test 4", () => {
    expect(withinRange([-10000, -150, -1000, -14000, -9, -1], -150, 1)).toBe(3);
  });

  it("Test 5", () => {
    expect(
      withinRange(
        [
          -1000, -1, -39302, -40000, -82910, -9302, 4, 3, 9000, -8392, -10392,
          1000, 3000, 898, 466, -193, 90000, 48300, -5839, 0, 50000, -50000,
        ],
        -50000,
        50000
      )
    ).toBe(20);
  });
});
