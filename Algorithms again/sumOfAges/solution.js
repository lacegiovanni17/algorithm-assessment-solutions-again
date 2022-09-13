function sumOfAges(students) {
  let maleAges = 0;
  let femaleAges = 0;

  for (const student of students) {
    if (student.age <= 25) {
      if (student.gender === "male") {
        maleAges += student.age;
      } else {
        femaleAges += student.age;
      }
    }
  }

  return { male: maleAges, female: femaleAges };
}

export default sumOfAges;
