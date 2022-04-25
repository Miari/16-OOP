class User {
  constructor(firstName, secondName, email) {
    this._firstName = firstName;
    this._lastName = secondName;
    this._email = email;
    this.score = 0;
  }

  get name() {
    return (this._firstName + " " + this._lastName).toUpperCase()
  }

  set name(newName) {
    const nameArr = newName.split(' ')
    this._firstName = nameArr[0]
    this._lastName = nameArr[1]
  }
}

const firstUser = new User('Blanche', 'Jarret', 'blanche@db.com')

//console.log(firstUser.name) //you are using the getter
firstUser.name = 'Jacintha Hubbert'

//console.log(firstUser._firstName);
//console.log(firstUser.name);

class Employee {
  #name;

  constructor(name, grade) {
    this.#name = name;
    this._rating = 5;
    this.grade = grade;
    this.nextGrade = this.getNextGrade(grade);
  }

  get name () {
    return this._name;
  }

 set name (name) {
    this._name = name;
  }

  get rating () {
    return this._rating;
  }

 set rating (rating) {
    this._rating = rating;
  }

  getNextGrade(grade) {
    if (grade === 'Junior') return 'Mid Level';
    if (grade === 'Mid Level') return 'Seniour';
    else return 'Boss';
  }

  goodJob () {
    if (this.rating < 10) this.rating += 1;
    this.promote();
  }

  promote() {
    if (this.rating >= 7) {
      this.grade = this.nextGrade;
      this.nextGrade = this.getNextGrade(this.nextGrade);
      this.rating = 5;
    }
  }
}

const testEmployee = new Employee('Elon', 'Junior');
/*console.log(testEmployee.grade);
testEmployee.goodJob();
testEmployee.goodJob();
testEmployee.goodJob();
testEmployee.goodJob();
testEmployee.goodJob();*/
console.log(testEmployee.grade);
/*
console.log(testEmployee.name);
testEmployee.name = 'Ilon';
console.log(testEmployee.name);

console.log(testEmployee.rating);
testEmployee.rating = 9;
console.log(testEmployee.rating);

testEmployee.toBePromoted();
console.log(testEmployee.getNextGrade);
*/



