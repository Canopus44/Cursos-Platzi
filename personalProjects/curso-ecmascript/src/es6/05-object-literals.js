// enahced object literals

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId,
  };
}

console.log(newUser("Jhon", 25, "USA", 1));
