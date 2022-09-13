import sumOfAges from "./solution";

describe("Example Tests", () => {
  test("Example 1", () => {
    const students = [
      { name: "Mary", age: 35, gender: "female" },
      { name: "Stephen", age: 20, gender: "male" },
      { name: "Dave", age: 15, gender: "male" },
      { name: "Jane", age: 25, gender: "female" },
      { name: "John", age: 10, gender: "male" },
      { name: "Fred", age: 50, gender: "female" },
      { name: "Caleb", age: 46, gender: "male" },
    ];
    expect(sumOfAges(students)).toEqual({ male: 45, female: 25 });
  });
  test("Example 2", () => {
    expect(
      sumOfAges([
        { name: "Kay", age: 32, gender: "male" },
        { name: "Angel", age: 12, gender: "female" },
      ])
    ).toEqual({ male: 0, female: 12 });
  });
  test("Example 3", () => {
    expect(
      sumOfAges([
        { name: "Kay", age: 12, gender: "male" },
        { name: "Angel", age: 32, gender: "female" },
        { name: "Alexis", age: 18, gender: "male" },
        { name: "Andrew", age: 10, gender: "male" },
      ])
    ).toEqual({ male: 40, female: 0 });
  });
});

describe("Solution Test Cases", () => {
  test("Test 1", () => {
    expect(
      sumOfAges([
        { name: "Kay", age: 12, gender: "male" },
        { name: "Angel", age: 32, gender: "female" },
        { name: "Alexis", age: 18, gender: "male" },
        { name: "Andrew", age: 10, gender: "male" },
        { name: "Robert", age: 54, gender: "male" },
        { name: "Martha", age: 39, gender: "female" },
        { name: "William", age: 22, gender: "male" },
        { name: "Carol", age: 20, gender: "female" },
        { name: "Louis", age: 41, gender: "male" },
        { name: "Michelle", age: 19, gender: "female" },
        { name: "Michael", age: 17, gender: "male" },
        { name: "Samantha", age: 24, gender: "female" },
        { name: "Veronica", age: 29, gender: "female" },
        { name: "Olivia", age: 14, gender: "female" },
        { name: "Raymond", age: 19, gender: "male" },
        { name: "Chris", age: 22, gender: "male" },
        { name: "James", age: 30, gender: "male" },
        { name: "Dennis", age: 11, gender: "male" },
        { name: "Casey", age: 60, gender: "female" },
        { name: "Jessica", age: 27, gender: "female" },
        { name: "Rachael", age: 18, gender: "female" },
      ])
    ).toEqual({ male: 131, female: 95 });
  });
  test("Test 2", () => {
    expect(
      sumOfAges([
        { name: "Kay", age: 22, gender: "male" },
        { name: "Angel", age: 54, gender: "female" },
        { name: "Alexis", age: 13, gender: "male" },
        { name: "Andrew", age: 26, gender: "male" },
        { name: "Robert", age: 32, gender: "male" },
        { name: "Martha", age: 20, gender: "female" },
        { name: "William", age: 18, gender: "male" },
        { name: "Carol", age: 30, gender: "female" },
        { name: "Louis", age: 24, gender: "male" },
      ])
    ).toEqual({ male: 77, female: 20 });
  });
  test("Test 3", () => {
    expect(
      sumOfAges([
        { name: "Kay", age: 12, gender: "male" },
        { name: "Angel", age: 32, gender: "female" },
        { name: "Angel", age: 12, gender: "female" },
      ])
    ).toEqual({ male: 12, female: 12 });
  });
  test("Test 4", () => {
    expect(
      sumOfAges([
        { name: "Kay", age: 5, gender: "male" },
        { name: "Angel", age: 52, gender: "female" },
        { name: "Alexis", age: 48, gender: "male" },
        { name: "Andrew", age: 20, gender: "male" },
        { name: "Robert", age: 84, gender: "male" },
        { name: "Martha", age: 67, gender: "female" },
        { name: "William", age: 43, gender: "male" },
        { name: "Carol", age: 89, gender: "female" },
        { name: "Louis", age: 56, gender: "male" },
        { name: "Michelle", age: 45, gender: "female" },
        { name: "Michael", age: 67, gender: "male" },
        { name: "Samantha", age: 31, gender: "female" },
        { name: "Veronica", age: 90, gender: "female" },
        { name: "Olivia", age: 12, gender: "female" },
        { name: "Raymond", age: 87, gender: "male" },
        { name: "Chris", age: 90, gender: "male" },
        { name: "James", age: 29, gender: "male" },
        { name: "Dennis", age: 90, gender: "male" },
        { name: "Casey", age: 60, gender: "female" },
        { name: "Jessica", age: 54, gender: "female" },
        { name: "Rachael", age: 49, gender: "female" },
      ])
    ).toEqual({ male: 25, female: 12 });
  });
  test("Test 5", () => {
    expect(
      sumOfAges([
        { name: "Kay", age: 21, gender: "male" },
        { name: "Angel", age: 12, gender: "female" },
        { name: "Alexis", age: 18, gender: "male" },
        { name: "Andrew", age: 23, gender: "male" },
        { name: "Robert", age: 10, gender: "male" },
        { name: "Martha", age: 14, gender: "female" },
        { name: "William", age: 24, gender: "male" },
        { name: "Carol", age: 20, gender: "female" },
        { name: "Louis", age: 7, gender: "male" },
        { name: "Michelle", age: 19, gender: "female" },
        { name: "Michael", age: 17, gender: "male" },
        { name: "Samantha", age: 24, gender: "female" },
        { name: "Veronica", age: 22, gender: "female" },
        { name: "Olivia", age: 14, gender: "female" },
        { name: "Raymond", age: 19, gender: "male" },
      ])
    ).toEqual({ male: 139, female: 125 });
  });
  test("Test 6", () => {
    expect(
      sumOfAges([
        { name: "Michelle", age: 99, gender: "female" },
        { name: "Michael", age: 17, gender: "male" },
        { name: "Samantha", age: 44, gender: "female" },
        { name: "Veronica", age: 39, gender: "female" },
        { name: "Olivia", age: 94, gender: "female" },
        { name: "Raymond", age: 89, gender: "male" },
        { name: "Chris", age: 152, gender: "male" },
        { name: "James", age: 30, gender: "male" },
        { name: "Dennis", age: 111, gender: "male" },
        { name: "Casey", age: 60, gender: "female" },
        { name: "Jessica", age: 17, gender: "female" },
        { name: "Rachael", age: 78, gender: "female" },
      ])
    ).toEqual({ male: 17, female: 17 });
  });
  test("Test 7", () => {
    expect(
      sumOfAges([
        { name: "Michelle", age: 26, gender: "female" },
        { name: "Michael", age: 27, gender: "male" },
        { name: "Samantha", age: 51, gender: "female" },
        { name: "Veronica", age: 37, gender: "female" },
        { name: "Olivia", age: 41, gender: "female" },
        { name: "Raymond", age: 91, gender: "male" },
        { name: "Chris", age: 22, gender: "male" },
        { name: "James", age: 30, gender: "male" },
        { name: "Dennis", age: 91, gender: "male" },
        { name: "Casey", age: 45, gender: "female" },
        { name: "Jessica", age: 10, gender: "female" },
        { name: "Rachael", age: 38, gender: "female" },
      ])
    ).toEqual({ male: 22, female: 10 });
  });
  test("Test 8", () => {
    expect(
      sumOfAges([
        { name: "Kay", age: 25, gender: "male" },
        { name: "Kay", age: 25, gender: "male" },
        { name: "Angel", age: 25, gender: "female" },
        { name: "Angel", age: 25, gender: "female" },
        { name: "Alexis", age: 25, gender: "male" },
        { name: "Andrew", age: 25, gender: "male" },
      ])
    ).toEqual({ male: 100, female: 50 });
  });
  test("Test 9", () => {
    expect(
      sumOfAges([
        { name: "Alexis", age: 38, gender: "male" },
        { name: "Andrew", age: 37, gender: "male" },
        { name: "Robert", age: 31, gender: "male" },
        { name: "Martha", age: 89, gender: "female" },
        { name: "William", age: 62, gender: "male" },
        { name: "Carol", age: 52, gender: "female" },
        { name: "Raymond", age: 60, gender: "male" },
        { name: "Chris", age: 67, gender: "male" },
        { name: "James", age: 60, gender: "male" },
        { name: "Dennis", age: 51, gender: "male" },
        { name: "Casey", age: 60, gender: "female" },
      ])
    ).toEqual({ male: 0, female: 0 });
  });
  test("Test 10", () => {
    expect(
      sumOfAges([
        { name: "Michael", age: 26, gender: "male" },
        { name: "Samantha", age: 26, gender: "female" },
        { name: "Veronica", age: 26, gender: "female" },
        { name: "Olivia", age: 26, gender: "female" },
        { name: "Raymond", age: 26, gender: "male" },
        { name: "Chris", age: 26, gender: "male" },
        { name: "James", age: 26, gender: "male" },
        { name: "Dennis", age: 26, gender: "male" },
        { name: "Casey", age: 26, gender: "female" },
        { name: "Jessica", age: 26, gender: "female" },
        { name: "Rachael", age: 26, gender: "female" },
      ])
    ).toEqual({ male: 0, female: 0 });
  });
});
