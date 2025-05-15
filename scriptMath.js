// let userPrompt = prompt("Choose a number :)")
// console.log("userPrompt = " + userPrompt);
// console.log("userPrompt type = " + typeof userPrompt);
// let numUserPrompt = parseFloat(userPrompt);
// console.log(numUserPrompt + ", userPrompt type = " + typeof numUserPrompt);

// const remainder = 10 % 3;
// console.log(remainder);
// const remainder2 = 10 % 2;
// console.log(remainder2);

// MATH OBJECT ------------------- //
let userMath = Math.ceil(4.5) //rounds up
console.log(userMath);
userMath = Math.floor(4.5) //rounds down
console.log(userMath);
console.log("-----");
userMath = Math.round(4.4);
console.log(userMath);
userMath = Math.round(4.5); // 0.5 rounds to 1
console.log(userMath);
userMath = Math.round(4.6);
console.log(userMath);
userMath = Math.trunc(4.9); //deletes all after dot
console.log(userMath);
console.log("-----");
// ------------------------------- //

let randomNum = Math.random();
console.log(randomNum);
randomNum = Math.random() *20 + 1; // number between 1 and 20
let randomFloor = Math.floor(randomNum);
console.log(randomFloor);
