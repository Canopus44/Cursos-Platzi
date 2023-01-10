function newUser(name, age, country) {
  var name = name || "Santiago";
  var age = age || 28;
  var country = country || "CO";
  console.log(name, age, country);
}

newUser();
newUser("Juan", 30, "MX");

// ES6
function newAdmin(name = "Santiago", age = "32", country = "CL") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("Juan", 30, "MX");
