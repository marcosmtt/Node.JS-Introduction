setTimeout(function () {
  console.log("Hello");
}, 1000);

const num1 = 10;
const num2 = 20;
const sum = num1 + num2;

console.log("World!");
console.log(sum);


/*
  Hello
  World!
  20
  
  ou...
  
  World!
  20
  Hello       ?
 */