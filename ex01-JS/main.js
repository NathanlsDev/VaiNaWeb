//Question 01 ------------------------------------------------------------------------
console.log(`Question 01:`);

function dayTime() {
  const date = new Date();
  const hour = date.getHours();
  const isDay = hour >= 6 && hour < 18;

  if (isDay) {
    console.log(`Now it's ${hour}h, it's day.`);
    return;
  }
  console.log(`Now it's ${hour}h, it's night.`);
}
dayTime();

//Question 02 ------------------------------------------------------------------------
console.log(`\nQuestion 02:`);

function onlyEven() {
  for (let i = 1; i <= 20; i++) {
    const numberIsEven = i % 2 === 0;
    if (numberIsEven) {
      console.log(i);
    }
  }
}
onlyEven();

//Question 03 ------------------------------------------------------------------------
console.log(`\nQuestion 03:`);

function logMessage(message) {
  console.log(message);
}
logMessage(`Message to be displayed here!`);

//Question 04 ------------------------------------------------------------------------
console.log(`\nQuestion 04:`);

function logName(name) {
  console.log(name);
}
logName("Nathan");

//Question 05 ------------------------------------------------------------------------
console.log(`\nQuestion 05:`);

function preferences(name, age, musicStyle) {
  console.log(
    `My name is ${name}, i'm ${age} years old, and like ${musicStyle} music.`
  );
}
preferences("Nathan", 28, "EDM");

//Question 06 ------------------------------------------------------------------------
console.log(`\nQuestion 06:`);

function medias(movie, music) {
  console.log(
    `My favorite movie is: ${movie}, and my favorite music is: ${music}.`
  );
}
medias("Interestelar", "Depeche Mode - Enjoy the Silence");

//Question 07 ------------------------------------------------------------------------
console.log(`\nQuestion 07:`);

function triple(n) {
  return `the triple of ${n} is ${n * 3}.`;
}
console.log(triple(11));

//Question 08 ------------------------------------------------------------------------
/**
 * Achei o enunciado dessa questão muito aberto à interpretação, então fiz o mais básico possível.
 * considerando um cenário onde o parâmetro esperado é um boolean true ou false.
 */
console.log(`\nQuestion 08:`);

const bool = false;

function trueOrFalse(param) {
  if (param === true) {
    console.log(param);
  } else if (param === false) {
    console.log(param);
  } else {
    console.log(
      `The received parameter is a [${typeof param}], and does not match the expected types: 'true'/'false'`
    );
  }
}
trueOrFalse(bool);

//Question 09 ------------------------------------------------------------------------
console.log(`\nQuestion 09:`);

function arrayFive() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
  console.log(arr);
}
arrayFive();

//Question 10 ------------------------------------------------------------------------
console.log(`\nQuestion 10:`);

const names = ["Maria", "Julia", "Pedro"];

function addNameToArray(name) {
  names.unshift(name);
}
addNameToArray("João");
console.log(names);

//Question 11 ------------------------------------------------------------------------
console.log(`\nQuestion 11:`);

names.pop();
console.log(names);

//Question 12 ------------------------------------------------------------------------
console.log(`\nQuestion 12:`);

names.push("Sara", "Roberto");
console.log(names);

//Question 13 ------------------------------------------------------------------------
console.log(`\nQuestion 13:`);

names.shift();
console.log(names);

//Question 14 ------------------------------------------------------------------------
console.log(`\nQuestion 14:`);

const numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
console.log(numbers.sort());

//Question 15 ------------------------------------------------------------------------
console.log(`\nQuestion 15:`);

function personObject() {
  const person = {
    name: "Nathan",
    age: "28",
    mail: "nathanExemple@ex.com",
  };
  console.log(person);

  //Question 16 ------------------------------------------------------------------------
  console.log(`\nQuestion 16:`);

  person.phone = "+556812345678";
  console.log(person);

  //Question 17 ------------------------------------------------------------------------
  console.log(`\nQuestion 17:`);

  delete person.age;
  console.log(person);

  //Question 18 ------------------------------------------------------------------------
  console.log(`\nQuestion 18:`);

  for (property in person){
    console.log(person[property])
  }  
}
personObject();

//Question 19 ------------------------------------------------------------------------
console.log(`\nQuestion 19:`);

const register = [
  { name: "Pedro", age: 27, phone: "+5521987654321", friends: ["Maria", "Luana", "Karla", "Lucas"] },
  { name: "Maria", age: 38, phone: "+5588123456789", friends: ["Lucas", "Karla", "Pedro", "Luana"] },
  { name: "Luana", age: 21, phone: "+5511043219876", friends: ["Karla", "Lucas", "Pedro", "Maria"] },
  { name: "Karla", age: 19, phone: "+5568912345678", friends: ["Luana", "Maria", "Lucas", "Pedro"] },
  { name: "Lucas", age: 24, phone: "+5568234567890", friends: ["Pedro", "Maria", "Luana", "Karla"] },
];
console.log(register);

//Question 20 ------------------------------------------------------------------------
console.log(`\nQuestion 20:`);

const firstFriendInRegister = person => console.log(person.friends[0]);
register.forEach(firstFriendInRegister);
