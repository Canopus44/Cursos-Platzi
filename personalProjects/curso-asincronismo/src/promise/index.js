const promise = new Promise(function (resolve, reject) {
  resolve("Hey, I am resolved");
});

const cows = 9;
const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) resolve(`We have more than ${cows} cows`);
  else reject(`We have less than ${cows} cows`);
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally");
  });
