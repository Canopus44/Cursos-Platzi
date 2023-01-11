// Arrays destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, b);

// Objects destructuring

let user = { username: "Santiago", age: 28 };
let { username, age } = user;
console.log(username, user.age);

// Spread operator

let person = { name: "Santiago", age: 28 };
let country = "CO";

let data = { id: 1, ...person, country };
console.log(data);

// rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3);

// Playground: Combina objetos JSON con el Spread Operator
let json1 = {
  name: "Mr. Michi",
  food: "Pescado",
};

let json2 = {
  age: 12,
  color: "Blanco",
};

export function solution(
  json1 = { name: "Mr. Michi", food: "Pescado" },
  json2 = { age: 12, color: "Blanco" }
) {
  let combinedJson = { ...json1, ...json2 };
  return combinedJson;
}

console.log(solution(json1, json2));
