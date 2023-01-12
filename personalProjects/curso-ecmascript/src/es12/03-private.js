class user {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  #speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get #uAge() {
    return this.age;
  }
  set uAge(age) {
    this.age = age;
  }
}

const bebeloper = new user("Santiago", 15);
console.log(bebeloper.uAge);
console.log((bebeloper.uAge = 20));
