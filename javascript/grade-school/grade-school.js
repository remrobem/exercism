export class GradeSchool {
  // grade => [students]
  #roster = new Map([]);

  roster() {
    const roster = {};
    for (let [key, value] of this.#roster) {
      roster[key] = [...value];
    }
    return roster;
  }

  add(student, grade) {

    this.removeStudentFromOtherGrades(student);

    const studentsInGrade = this.#roster.get(grade) || [];
    studentsInGrade.push(student);
    this.#roster.set(grade, studentsInGrade.sort());
    
  }

  grade(grade) {
    return [...(this.#roster.get(grade) || [])];
  }

  removeStudentFromOtherGrades(student) {
    for (let [key, value] of this.#roster) {
      // filter out the student if the student already exists
      let students = value.filter((name) => {
        return student != name;
      });

      // update the roster if a student was removed from a grade
      if (value.length != students.length) {
        this.#roster.set(key, students);
      }
    }
  }
}
