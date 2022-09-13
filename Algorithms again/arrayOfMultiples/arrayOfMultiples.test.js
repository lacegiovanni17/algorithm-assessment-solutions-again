import arrayMultiples from "./solution";

describe("Example Tests", function () {
  it("Example 1", function () {
    expect(arrayMultiples([5])).toEqual([5, 10, 15, 20, 25]);
  });

  it("Example 2", function () {
    expect(arrayMultiples([1, 4])).toEqual([1, 2, 3, 4, 5, 4, 8, 12, 16, 20]);
  });

  it("Example 3", function () {
    expect(arrayMultiples([])).toEqual([]);
  });
});

describe("Solution Tests", function () {
  it("Test 1", function () {
    expect(arrayMultiples([0])).toEqual([0, 0, 0, 0, 0]);
  });

  it("Test 2", function () {
    expect(arrayMultiples([-5])).toEqual([-5, -10, -15, -20, -25]);
  });
  it("Test 3", function () {
    expect(arrayMultiples([1, 0, -1])).toEqual([
      1, 2, 3, 4, 5, 0, 0, 0, 0, 0, -1, -2, -3, -4, -5,
    ]);
  });
  it("Test 4", function () {
    expect(arrayMultiples([60000, 10000, 100000])).toEqual([
      60000, 120000, 180000, 240000, 300000, 10000, 20000, 30000, 40000, 50000,
      100000, 200000, 300000, 400000, 500000,
    ]);
  });
  it("Test 5", function () {
    expect(arrayMultiples([-60000, -10000, -100000])).toEqual([
      -60000, -120000, -180000, -240000, -300000, -10000, -20000, -30000,
      -40000, -50000, -100000, -200000, -300000, -400000, -500000,
    ]);
  });
  it("Test 6", function () {
    expect(
      arrayMultiples([-98302, 34586, -193029, 304820, 578302, 192482])
    ).toEqual([
      -98302, -196604, -294906, -393208, -491510, 34586, 69172, 103758, 138344,
      172930, -193029, -386058, -579087, -772116, -965145, 304820, 609640,
      914460, 1219280, 1524100, 578302, 1156604, 1734906, 2313208, 2891510,
      192482, 384964, 577446, 769928, 962410,
    ]);
  });
  it("Test 7", function () {
    expect(arrayMultiples([0, 0, 0, 0, 0, 0])).toEqual([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
    ]);
  });
  it("Test 8", function () {
    expect(arrayMultiples([-1, 2, -3, 4, -5])).toEqual([
      -1, -2, -3, -4, -5, 2, 4, 6, 8, 10, -3, -6, -9, -12, -15, 4, 8, 12, 16,
      20, -5, -10, -15, -20, -25,
    ]);
  });
});
