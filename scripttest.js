

const multiLineSentence = "this a \nsentence\nwow another line";

console.log(multiLineSentence);

const insertedVariable = "INSERTED VARIABLE";

console.log("This is an " + insertedVariable);
const variableSentence = `This is an ${insertedVariable}`; // BETTER WAY TO DO IT!

console.log(variableSentence.length);

console.log('3333'.length);

let oh = 3333;
console.log(oh.length); // doesnt work with numbers

let userInput = "hEllo bOhDAN"

console.log(userInput);

let toLowerCase = userInput.toLowerCase(); //premade function(); called method
let toUpperCase = userInput.toUpperCase();
console.log(toLowerCase);
console.log(toUpperCase);

let fullSentence = "This is a sentence for doing things like this string manipulation."
let fullSentenceLength = fullSentence.length;
let fullSentenceLength2 = fullSentence.length - 1;

console.log(fullSentenceLength);
console.log(fullSentenceLength2);
console.log(fullSentence[0].toLowerCase()); 
console.log(fullSentence[1]);

console.log(fullSentence[66]); //string starts with 0, not 1
console.log(fullSentence[65]);
console.log(fullSentence[fullSentenceLength]);
console.log(fullSentence[fullSentenceLength2]);

let includesLike = fullSentence.includes("like"); //check if there is content, CASE sensitive!
console.log(includesLike);

let indexcheck = fullSentence.indexOf(includesLike);

let delWord = fullSentence.slice(); // something lost


