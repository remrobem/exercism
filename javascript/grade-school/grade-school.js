export class GradeSchool {
  #roster = new Map([]);

  roster() {
    return this.buildRoster()
  }

  buildRoster() {
    let roster = {};
     for (let [key, value] of this.#roster) {
       roster[key] = value;
     }
     return roster;
   }

  add(student, grade) {

    this.removeStudentFromExistingGrade(student);
    
    const students = this.#roster.get(grade);

    if (students) {
      students.push(student);
      students.sort();
      this.#roster.set(grade, students);
    } else {
      this.#roster.set(grade, [student]);
    }
  }

  grade(grade) {
    return this.#roster.get(grade) || [];
  }

  removeStudentFromExistingGrade(student) {
   
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



  // const invertBy = obj => Object.entries(obj).reduce((inverted, [key, value]) => ({
  //   ...inverted,
  //   [value]: [...(inverted[value] ?? []), key].sort()
  // }), {});
  
  // export class GradeSchool {
  //   #roster = {};
  
  //   add(name, grade) {
  //     this.#roster[name] = grade;
  //   }
  
  //   grade(target) {
  //     return Object.entries(this.#roster).flatMap(([name, grade]) => grade === target ? name : []).sort();
  //   }
  
  //   roster() {
  //     return invertBy(this.#roster);
  //   }
  // }