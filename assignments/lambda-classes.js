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
