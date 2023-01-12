const user = { username: "canopus44", age: 28, country: "CO" };
const { username, ...values } = user;
console.log(username);
console.log(values);
