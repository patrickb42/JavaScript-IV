// CODE here for your Lambda Classes
class Person {
  constructor(spec) {
    this.name = spec.name;
    this.age = spec.age;
    this.location = spec.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(spec) {
    super(spec);
    this.specialty = spec.specialty;
    this.favLanguage = spec.favLanguage;
    this.catchPhrase = spec.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }

  playGod(student) {
    student.grade = Math.round(Math.random() * 100);
  }
}

class Student extends Person {
  constructor(spec) {
    super(spec);
    this.previousBackground = spec.previousBackground;
    this.className = spec.className;
    this.favSubjects = spec.favSubjects;
    this.grade = spec.grade;
  }

  listSubjects() {
    this.favSubjects.forEach(function (subject) {
      console.log(subject);
    });
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate() {
    return this.grade >= 70;
  }
}

class ProjectManager extends Instructor {
  constructor(spec) {
    super(spec);
    this.gradClassName = spec.gradClassName;
    this.favInstructor = spec.favInstructor;
  }

  standUp(slackChannel) {
    console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

let p = new Person({
  name: "person",
  age: "1",
  location: "A",
});
let i = new Instructor({
  name: "person",
  age: "1",
  location: "A",
  specialty: "s1",
  favLanguage: "fl1",
  catchPhrase: "cp1",
});
let pm = new ProjectManager({
  name: "person",
  age: "1",
  location: "A",
  specialty: "s1",
  favLanguage: "fl1",
  catchPhrase: "cp1",
  gradClassName: "cgn1",
  favInstructor: "fi1",
});
let s = new Student({
  name: "person",
  age: "1",
  location: "A",
  previousBackground: "pb1",
  className: "cn1",
  favSubjects: [
    "fs1",
    "fs2",
  ],
  grade: "100",
});

console.log(p);
p.speak();

console.log();

console.log(i);
i.speak();
i.demo(`${i.name} demo`);
i.grade(s, "subject");
i.playGod(s);
console.log(s.grade);

console.log();

console.log(pm);
pm.speak();
pm.demo(`${i.name} demo`);
pm.grade(s, "subject");
pm.playGod(s);
s.grade;
pm.standUp("channel");
pm.debugsCode(s, "subject");

console.log();

console.log(s);
s.speak();
s.listSubjects();
s.PRAssignment("subject");
s.sprintChallenge("subject");
console.log(s.graduate());
