// Declara una clase
class User {
  // metodos
  greeting() {
    return "Hello";
  }
}

// Instanciar una clase
const newUser = new User();

console.log(newUser.greeting());

const devExample = new User();
console.log(devExample.greeting());

// Constructor

class user {
  // constructor
  constructor() {
    console.log("New user");
  }
  greeting() {
    return "Hello";
  }
}

const david = new user();

// this

class user {
  constructor(name) {
    this.name = name;
  }
  // metodos
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user("Ana");
console.log(ana.greeting());

// setter getters

class user {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(age) {
    this.age = age;
  }
}

const bebeloper = new user("Santiago", 15);
console.log(bebeloper.uAge);
console.log((bebeloper.uAge = 20));
