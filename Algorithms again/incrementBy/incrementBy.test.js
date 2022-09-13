import incrementBy from "./solution";

describe("Solution tests", () => {
  it("Test 1", () => {
    expect(incrementBy([{ num: 10 }, { num: 20 }, { num: 30 }], 0)).toEqual([
      { num: 10 },
      { num: 20 },
      { num: 30 },
    ]);
  });

  it("Test 2", () => {
    expect(incrementBy([{ num: 5 }, { num: 12 }, { num: 23 }], -1)).toEqual([
      { num: 4 },
      { num: 11 },
      { num: 22 },
    ]);
  });

  it("Test 3", () => {
    expect(incrementBy([{ num: -10 }, { num: -20 }, { num: -30 }], 30)).toEqual(
      [{ num: 20 }, { num: 10 }, { num: 0 }]
    );
  });

  it("Test 4", () => {
    expect(
      incrementBy(
        [
          { num: 1 },
          { num: 3 },
          { num: 6 },
          { num: 1 },
          { num: 3 },
          { num: 6 },
        ],
        1
      )
    ).toEqual([
      { num: 2 },
      { num: 4 },
      { num: 7 },
      { num: 2 },
      { num: 4 },
      { num: 7 },
    ]);
  });

  it("Test 5", () => {
    expect(
      incrementBy([{ num: -10 }, { num: -20 }, { num: -30 }, { num: -40 }], -30)
    ).toEqual([{ num: -40 }, { num: -50 }, { num: -60 }, { num: -70 }]);
  });
});
