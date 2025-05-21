// i++ the same as i = i+1
// for (let i = 0; i<5; i++) {
// console.log(i); // 0 1 2 3 4
// }

// for (let i = 2; i<7; i =+2) {
// console.log(i); // 0 1 2 3 4
// }



// for (let i = 0; i <10; i++){
//     if (i===5)
//     {break}
// console.log(i);
// }



// let count = 5;
// // while(count > 0) {
// // console.log(count);
// // count--;
// // }

// do {console.log(count);
//     count--;
// }
// while (count>0);

// let userInput;

// do {
//     userInput = prompt("Choose a number between 1 and 10");
//     userInput = parseInt(userInput);
//     console.log(userInput);
    
// } while(
//     isNaN(userInput) || userInput < 1 || userInput > 10
// );


// function hi() {
//     console.log("hello!");
//     let value = 1 + 3;
//     console.log(value);
// }

// hi();
// hi();
//     let count = 2;
// do {
//     hi();

// }
// while (count = 0);

function calculateVolume(width, height, length) {
    return width * height * length;
}

console.log(calculateVolume(3,2,7));

let greeting = (name) => `Hello, ${name}!`;
console.log(greeting("Ben"));
